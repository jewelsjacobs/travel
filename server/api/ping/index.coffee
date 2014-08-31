'use strict'

express = require('express')
controller = require('./ping.controller')

router = express.Router()

router.get('/', controller.ping)

module.exports = router