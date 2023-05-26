const express = require('express')
const authmiddleware = require('../middlewares/authmiddleware')
const { getDoctorInfoController, updateProfileController,getDoctorByIdController,doctorappointmentsController,updatestatusController } = require('../controllers/doctorCtrl')

const router = express.Router()

router.post('/getDoctorInfo',authmiddleware,getDoctorInfoController)

router.post('/updateProfile',authmiddleware,updateProfileController)

router.post('/getDoctorById',authmiddleware,getDoctorByIdController)

router.get('/doctor-appointments',authmiddleware,doctorappointmentsController)

router.post('/update-status',authmiddleware,updatestatusController)

module.exports = router