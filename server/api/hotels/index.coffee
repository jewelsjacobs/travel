'use strict'

express = require('express')
controller = require('./hotels.controller')

router = express.Router()

router.get('/payments', controller.acceptedPayments)
router.get('/availability', controller.hotelAvailability)
router.get('/information', controller.hotelInfo)
router.get('/list', controller.hotelList)
router.get('/images', controller.hotelRoomImages)

module.exports = router