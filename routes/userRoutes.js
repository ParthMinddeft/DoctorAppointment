const express = require('express')
const { loginController, registerController,authController,applyDoctorController,getAllNotificationController,deleteAllNotificationController,getAllDoctorsController,bookappointmentController,bookingavailabilityController,userappointmentsController } = require('../controllers/userCtrl')
const authmiddleware = require('../middlewares/authmiddleware')

const router = express.Router()

router.post('/login',loginController)

router.post('/register',registerController)

router.post('/getUserData',authmiddleware,authController)

router.post('/apply-doctor',authmiddleware,applyDoctorController)

router.post('/get-all-notification',authmiddleware,getAllNotificationController)

router.post('/delete-all-notification',authmiddleware,deleteAllNotificationController)

router.get('/getAllDoctors',authmiddleware,getAllDoctorsController)

router.post('/book-appointment',authmiddleware,bookappointmentController)

router.post('/booking-availability',authmiddleware,bookingavailabilityController)

router.get('/user-appointments',authmiddleware,userappointmentsController)

module.exports = router