_ = require('lodash')

process = (res, err, response) ->
  if err
    res.status(500).send err
    return
  res.send response

expedia = require("expedia")(
  apiKey: "hjmtgvdffmrdhjpq5tnscv36"
  cid: "55505"
)

Hotels = require("./hotels.model")

options = (req, model) ->
  options =
    customerSessionId: req.session
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']

  _.assign options, model

# a complete list of options is available at http://developer.ean.com/docs/payment-types/
exports.acceptedPayments = (req, res) ->
  options = options(req, Hotels.acceptedPayments)
  expedia.hotels.acceptedPayments options, (err, response) ->
    process(res, err, response)

# a complete list of options is available at http://developer.ean.com/docs/room-avail/
exports.hotelAvailability = (req, res) ->
  options = options(req, Hotels.hotelAvailability)
  expedia.hotels.availability options, (err, response) ->
    process(res, err, response)

# a complete list of options is available at http://developer.ean.com/docs/hotel-info/
exports.hotelInfo = (req, res) ->
  options = options(req, Hotels.hotelInfo)
  expedia.hotels.info options, (err, response) ->
    process(res, err, response)

# a complete list of options is available at http://developer.ean.com/docs/hotel-list/
exports.hotelList = (req, res) ->
  options = options(req, Hotels.hotelList)
  expedia.hotels.list options, (err, response) ->
    process(res, err, response)

# a complete list of options is available at http://developer.ean.com/docs/room-images/
exports.hotelRoomImages = (req, res) ->
  options = options(req, Hotels.hotelRoomImages)
  expedia.hotels.roomImages options, (err, response) ->
    process(res, err, response)



