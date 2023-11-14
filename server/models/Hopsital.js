const mongoose = require('mongoose')

const hospitalSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId
        },
        provider_id: {
            type: Number
        },
        hospital_name: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zip_code: {
            type: Number
        },
        county_name: {
            type: String
        },
        phone_number: {
            type: String
        },
        hospital_type: {
            type: String
        },
        hospital_ownership: {
            type: String
        },
        emergency_services: {
            type: Boolean
        },
        human_address: {
            type: String
        },
        longitude: {
            type: String
        },
        latitude: {
            type: String
        }
    })

module.exports = mongoose.model('Hospital', hospitalSchema)