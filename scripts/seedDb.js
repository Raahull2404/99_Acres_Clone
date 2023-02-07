const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/99_Acres_Clone")

const propertySeed = [
    {
        listingId: 000001,
        listingAgent: "Prashant Malhotra",
        listingCompany: "GreenEstate Co.",
        daysListed: 5,
        listStatus: "For Sale",
        address: "112, santos Rd",
        city: "Indore",
        state: "Maharashtra",
        pincode: "450001",
        propType: "Single Family Home",
        yearBuilt: "1975",
        listPrice: "12000000",
        propSqrFt: "1500",
        carpetAreaSqrFt: "2000",
        bedrooms: 4,
        bathrooms: 3,
        subDivision: "Velda Rose Estate 3",
        annualPropTax: 500,
        taxCountry: "India",
        utilityCompany: "water tanks, city hospital, laundary service, cleaners Inc, Rotary Club Co.",
        schoolInfo: "DAS Public School",
        propFeatures: " ",
        Image: " ",
        listingLink: " ",
        propDetailSummary: " ",
        createDate: "2020-02-04",
        likedByUser: [{
            fullUserName: "John Doe",
            email: "johnDoe@gmail.com"
        }]

    },
    {
        listingId: 000002,
        listingAgent: "Rahul seth",
        listingCompany: "RealEstate Co.",
        daysListed: 10,
        listStatus: "For Sale",
        address: "114, santos Rd",
        city: "Indore",
        state: "Maharashtra",
        pincode: "450001",
        propType: "Single Family Home",
        yearBuilt: "1975",
        listPrice: "12000000",
        propSqrFt: "1500",
        carpetAreaSqrFt: "2000",
        bedrooms: 4,
        bathrooms: 3,
        subDivision: "Velda Rose Estate 3",
        annualPropTax: 500,
        taxCountry: "India",
        utilityCompany: "water tanks, city hospital, laundary service, cleaners Inc, Rotary Club Co.",
        schoolInfo: "DAS Public School",
        propFeatures: " ",
        Image: " ",
        listingLink: " ",
        propDetailSummary: " ",
        createDate: "2020-02-04",
        likedByUser: [{
            fullUserName: "John Doe",
            email: "johnDoe@gmail.com"
        }]
    },
    {
        listingId: 000003,
        listingAgent: "Shradha sharma",
        listingCompany: "GreenEstate Co.",
        daysListed: 7,
        listStatus: "For Sale",
        address: "120, santos Rd",
        city: "Indore",
        state: "Maharashtra",
        pincode: "450001",
        propType: "Single Family Home",
        yearBuilt: "1975",
        listPrice: "12000000",
        propSqrFt: "1500",
        carpetAreaSqrFt: "2000",
        bedrooms: 4,
        bathrooms: 3,
        subDivision: "Velda Rose Estate 3",
        annualPropTax: 500,
        taxCountry: "India",
        utilityCompany: "water tanks, city hospital, laundary service, cleaners Inc, Rotary Club Co.",
        schoolInfo: "DAS Public School",
        propFeatures: " ",
        Image: " ",
        listingLink: " ",
        propDetailSummary: " ",
        createDate: "2020-02-04",
        likedByUser: [{
            fullUserName: "Shradha Sharma",
            email: "shradha.sharma@gmail.com"
        }]
    }
];

const userSeed = [
    {
        lastLogin: new Date(Date.now() - 12 * 1000 * 3600 * 24),
        firstName: "Raj",
        lastName: "Shekhar",
        emailId: "rajShekhar12@gmail.com",
        password: "zaq@1234",
        phone: "9876534120",
        preferences: {
            priceRange: {
                from: 2400000,
                to: 7500000
            },
            bedrooms: 2,
            bathrooms: 2,
            propertyType: "Apartment",
            CreationDate: new Date(Date.now()),
            updateDate: new Date(Date.now())
        },
        favouriteProperties: [{
            propertyId: "000023",
            propertyName: "Alfa Town",
            address: "b-81, Alfa Town, GTA Rd",
            listPrice: 4500000,
            bedrooms: 2,
            bathrooms: 3,
            propertyType: "Single Family House",
            propertyImage: " "
        }],
        registartionDate: new Date(Date.now()),
        updateDate: new Date(Date.now())
    },
    {
        lastLogin: new Date(Date.now() - 12 * 1000 * 3600 * 24),
        firstName: "Suman",
        lastName: "Chandra",
        emailId: "sumanchand56@gmail.com",
        password: "Qwerty@123",
        phone: "9557226789",
        preferences: {
            priceRange: {
                from: 4500000,
                to: 17500000
            },
            bedrooms: 4,
            bathrooms: 4,
            propertyType: "Independent House",
            CreatioDate: new Date(Date.now()),
            updateDate: new Date(Date.now())
        },
        favouriteProperties: [{
            propertyId: "000042",
            propertyName: "Elite Residency",
            address: "House A1-25, St Stephens Main Rd",
            listPrice: 16500000,
            bedrooms: 6,
            bathrooms: 5,
            propertyType: "Independent House",
            propertyImage: " "
        }],
        registartionDate: new Date(Date.now()),
        updateDate: new Date(Date.now())
    },
    {
        lastLogin: new Date(Date.now() - 12 * 1000 * 3600 * 24),
        firstName: "Sanjay",
        lastName: "Tripathy",
        emailId: "sanjuForYou@gmail.com",
        password: "ipl@1234",
        phone: "9876530001",
        preferences: {
            priceRange: {
                from: 7500000,
                to: 20000000
            },
            bedrooms: 6,
            bathrooms: 5,
            propertyType: "Independent House",
            CreatioDate: new Date(Date.now()),
            updateDate: new Date(Date.now())
        },
        favouriteProperties: [{
            propertyId: "000032",
            propertyName: "Beta Township",
            address: "c-8, Beta Township, port Rd",
            listPrice: 4500000,
            bedrooms: 2,
            bathrooms: 2,
            propertyType: "Single Family House",
            propertyImage: " "
        }],
        registartionDate: new Date(Date.now()),
        updateDate: new Date(Date.now())
    }
]