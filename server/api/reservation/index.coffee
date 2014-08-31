'use strict'

express = require('express')
controller = require('./reservation.controller')

router = express.Router()

router.get('/book', controller.book)
router.get('/cancel', controller.cancel)
router.get('/get', controller.get)

module.exports = router