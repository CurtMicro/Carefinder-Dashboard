const Hospital = require('../models/Hopsital')
const asyncHandler = require('express-async-handler')

//@desc Get Hospitals by query param
//@route GET /hospitals?type=value
//@access Private
const getHospitals = asyncHandler(async (req, res) => {
    const { id, providerId, city, state, countyName, hospitalType, hospitalName, ownership, emergency } = req.query
    let hospitals
    let hospital
    if (id) {
        hospital = await Hospital.findById(id).lean()
        if (!hospital) {
            return res.status(400).json({ message: 'No Hospitals Found with unique id: ' + id })
        }
        return res.json(hospital)
    } else if (providerId) {
        hospital = await Hospital.find({ provider_id: providerId }).lean()
        if (!hospital) {
            return res.status(400).json({ message: 'No Hospitals Found with provider id: ' + providerId })
        }
        return res.json(hospital)
    }
    else if (city && state) {
        hospitals = await Hospital.find({ state: state, city: city }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ error: 'Could not fetch hospital with city:' + city + ' and state:' + state })
        }
    }
    else if (city) {
        hospitals = await Hospital.find({ city: city }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found with with city: ' + city })
        }
    }
    else if (state) {
        hospitals = await Hospital.find({ state: state }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found with with state: ' + state })
        }
    }
    else if (countyName) {
        hospitals = await Hospital.find({ county_name: countyName }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found with with county name: ' + countyName })
        }
    }
    else if (hospitalType) {
        hospitals = await Hospital.find({ hospital_type: hospitalType }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found with with type: ' + hospitalType })
        }
    }
    else if (hospitalName) {
        hospitals = await Hospital.find({ hospital_name: hospitalName }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found with with hospital name: ' + hospitalName })
        }
    }
    else if (ownership) {
        hospitals = await Hospital.find({ hospital_ownership: ownership }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found with with ownership: ' + ownership })
        }
    }
    else if (emergency) {
        hospitals = await Hospital.find({ emergency_services: emergency }).collation(
            { locale: 'en', strength: 2 }).lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found with with ownership: ' + ownership })
        }
    }
    else {//find all
        hospitals = await Hospital.find().lean()
        if (!hospitals?.length) {
            return res.status(400).json({ message: 'No Hospitals Found' })
        }
    }
    res.json(hospitals)
})

//@desc Create new Hospital
//@route POST /hospital
//@access Private
const createNewHospital = asyncHandler(async (req, res) => {
    const {
        providerId,
        hospitalName,
        address,
        city,
        state,
        zipCode,
        countyName,
        phoneNumber,
        hospitalType,
        hospitalOwnership,
        emergencyServices,
        humanAddress,
        longitude,
        latitude
    } = req.body

    //confirm data
    if (!providerId) {
        return res.status(400).json({ message: 'ProviderId is required' })
    }

    //check for dupes without case sensititivy
    const duplicate = await Hospital.find({ username }).collation({ locale: 'en', strength: 2 }).lean()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    //Hash password
    const hashedPwd = await bcrypt.hash(password, 10)

    const userObject = (!Array.isArray(roles) || !roles.length)//if roles are not given
        ? { username, "password": hashedPwd }//use default 
        : { username, "password": hashedPwd, roles }//add the roles given

    //create and store new user
    const user = await User.create(userObject)

    if (user) {//created
        res.status(201).json({ message: 'New User ' + username + ' created' })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
})

module.exports = {
    getHospitals
}