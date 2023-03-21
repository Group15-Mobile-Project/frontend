import { HOME } from "../Model"

export const Home: HOME[] = [
    {
        id: 1,
        openBooking: "2023-04-05",
        closeBooking: "2023-10-10",
        title: "the beaty in place",
        price: 100.0,
        address: "tutkjantie 2",
        city: {
            id: 1,
            name: "oulu",
            country: {
                id: 1,
                name: "finland"
            }
        },
        country: {
            id: 1,
            name: "finland"
        },
        latitude: "64.95431",
        longtitude: "25.71595",
        zipcode: "90570",
        imgUrls: [
            "lkjlkdf.png",
            "lkajsdlfk.png"
        ],
        beds: 2,
        bedrooms: 1,
        capacity: 4,
        rating: null,
        reviewNums: 0,
        homeCategory: {
            id: 1,
            name: "cottage",
            imageUrl: "lksajdflkjas.png"
        },
        owner: {
            id: 1,
            user: {
                id: 1,
                username: "quan",
                email: "quan@gmail.com",
                roles: [
                    "USER",
                    "HOST"
                ],
                hasHost: true,
                hostId: 1,
                imgUrls: "lkjalsdkjflk.png",
                rating: null,
                reviewNums: 0
            }
        },
        discount: {
            id: 1,
            openDate: "2023-04-10",
            closeDate: "2023-04-30",
            discountRate: 30,
            homeId: 1
        }
    },
    {
        id: 2,
        openBooking: "2023-04-05",
        closeBooking: "2023-10-10",
        title: "the beaty in place",
        price: 100.0,
        address: "tutkjantie 2",
        city: {
            id: 1,
            name: "oulu",
            country: {
                id: 1,
                name: "finland"
            }
        },
        country: {
            id: 1,
            name: "finland"
        },
        latitude: "64.95431",
        longtitude: "25.71595",
        zipcode: "90570",
        imgUrls: [
            "lkjlkdf.png",
           "lkajsdlfk.png"
        ],
        beds: 2,
        bedrooms: 1,
        capacity: 4,
        rating: null,
        reviewNums: 0,
        homeCategory: {
            id: 1,
            name: "cottage",
            imageUrl: "lksajdflkjas.png"
        },
        owner: {
            id: 1,
            user: {
                id: 1,
                username: "quan",
                email: "quan@gmail.com",
                roles: [
                    "USER",
                    "HOST"
                ],
                hasHost: true,
                hostId: 1,
                imgUrls: "lkjalsdkjflk.png",
                rating: null,
                reviewNums: 0
            }
        },
        discount: {
            id: 1,
            openDate: "2023-04-10",
            closeDate: "2023-04-30",
            discountRate: 30,
            homeId: 1
        }
    }
    
]

