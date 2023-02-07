const mongoose = require('mongoose')
require('../constants')
const Schema = mongoose.Schema

const propertySchema = new Schema({
    listingId: {
        type: String
    },
    listingAgent: {
        type: String
    },
    listingCompany: {
        type: String
    },
    daysListed: {
        type: Number
    },
    listStatus: {
        type: String,
        default: For_Sale
    },
    address: {
        type: String,
        required: true
    },
    city: String,
    state: String,
    pincode: Number,
    propType: String,
    yearBuilt: Number,
    listPrice: Number,
    propSqrFt: Number,
    carpetAreaSqrFt: Number,
    bedrooms: Number,
    bathrooms: Number,
    subDivision: String,
    photoGallery: {
        type: []
    },
    propertyId: String,
    description: String,
    email: String,
    annualPropTax: Number,
    taxCountry: String,
    utilityCompany: String,
    schoolInfo: String,
    hoaFee: String,
    propFeatures: String,
    image: String,
    listingLink: String,
    propDetailSummary: String,
    createDate: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
    likedByUser: [{
        fullUserName: String,
        email: String
    }]
})

const Property = mongoose.model('Property', propertySchema)
module.exports = Property