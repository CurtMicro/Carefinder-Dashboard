const express = require('express')
const router = express.Router()
const hospitalsController = require('../controllers/hospitalsController')

const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(hospitalsController.getHospitals)

module.exports = router