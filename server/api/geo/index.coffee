'use strict'

express = require('express')
controller = require('./geo.controller')

router = express.Router()

router.get('/:location', controller.search)

module.exports = router