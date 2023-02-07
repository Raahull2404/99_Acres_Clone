const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    maxPrice: String,
    preference: {
        priceRange: {
            from: Number,
            to: {
                type: Number,
                required: true
            }
        },
        bedrooms: Number,
        bathrooms: Number,
        propertyType: String,
        CreationDate: {
            type: Date,
            immutable: true,
            default: Date.now
        },
        updateDate: {
            type: Date,
            immutable: true,
            default: Date.now
        },
    },
    favouriteProperties: [{
        propertyId: String,
        propertyName: String,
        address: String,
        listPrice: { type: Number },
        bedrooms: Number,
        bathrooms: Number,
        propertyType: String,
        propertyImage: String
    }],
    registrationDate: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User