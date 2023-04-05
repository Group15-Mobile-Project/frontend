import { Alert, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { BOOKING } from '../Model';
import { Image } from '@rneui/base';
import { HOST_URL } from '../Store/store';

const imageDefault =[
    "wallpaper.jpg_a776d37b-97c9-4bd6-b4ca-1f342de06161",
    "Cabin-in-the-city-Best-Airbnbs-in-Ontario-819x1024.jpeg_89abc5d3-cd57-4fae-92ed-96bb77daf640",
    "dormir-dans-une-ferme-en-suède-best-airbnb-in-south-sweden-main.jpg_c83de24f-f4d0-4367-96ef-96d261a99e94"
];

const HostBookingCard = ({booking, onPress, upcoming}: {booking: BOOKING, onPress?: () => void, upcoming: boolean}) => {
    
    const [duration, setDuration] = useState<number>(0);
    const [isUpcoming, setIsUpcoming] = useState<boolean>(true);
    const tw = useTailwind();
    const currentDay = new Date();

    useEffect(() => {
        if(booking) {
            if(upcoming) {  
                const timeleft = Math.round(((new Date(booking.checkInDate).getTime()) - currentDay.getTime()) / 1000 / 60 / 60 / 24);
                setDuration(timeleft);
            } else {       
                const timeleft = Math.round((currentDay.getTime() - (new Date(booking.checkOutDate).getTime())) / 1000 / 60 / 60 / 24);
                setDuration(timeleft);
            }
        }
    }, [booking])

    return (
        <View style={[tw(' rounded-lg my-2 py-2 border border-gray-300 mb-4'), {borderWidth: 2}]}>
            <TouchableOpacity onPress={onPress}>
                <View style={tw('ml-4 mb-4')}>
                    {upcoming ? (
                        <Text style={tw('text-2xl font-bold text-black')}>Arrives in {duration} {duration > 1 ? "days" : "day"}</Text>
                    ) : (
                        <Text style={tw('text-2xl font-bold text-black')}>Checked out {duration} {duration > 1 ? "days" : "day"} ago</Text>
                    )}
                    <Text style={tw('text-lg font-bold text-gray-400')}>{booking?.home?.address}, {booking?.home?.city.name}</Text>
                </View>
                <View style={tw('flex-row items-center justify-between w-full mb-2')}>          
                    <View style={tw('ml-4 flex items-start justify-start')}>
                        <Text style={tw('text-2xl font-bold text-black mb-2')}>{booking?.tenant?.username}</Text>
                        <Text style={tw('text-lg font-bold text-gray-400')}>{booking?.checkInDate && new Date(booking?.checkInDate ).toLocaleString('en-us',{ day: 'numeric', month:'short'})} - {booking?.checkOutDate && new Date(booking?.checkOutDate).toLocaleString('en-us',{ day: 'numeric', month:'short', year: 'numeric'})} </Text>
                    </View>
                    <Image source={{uri: HOST_URL + "/api/images/image/" + imageDefault[0]}} style={[tw('rounded-full mr-4'), {width: 70, height: 70, resizeMode: 'cover'}]}></Image> 
                </View>
            </TouchableOpacity>
            <View style={[tw('w-full bg-gray-300'), {height: 1}]}></View>
            <TouchableOpacity style={tw('flex items-center justify-center w-full py-2')}>
                <Text style={tw('text-2xl font-bold text-black')}>Message</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HostBookingCard

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    }
})