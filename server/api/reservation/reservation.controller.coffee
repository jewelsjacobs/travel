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

Reservation = require("./reservation.model")

options = (req, model) ->
  options =
    customerSessionId: req.session
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']

  _.assign options, model

# a complete list of options is available at http://developer.ean.com/docs/book-reservation/
exports.book = (req, res) ->
  options = options(req, Reservation.book)
  expedia.reservation.book options, (err, response) ->
    process(res, err, response)

# a complete list of options is available at http://developer.ean.com/docs/cancel-reservation/
exports.cancel = (req, res) ->
  options = options(req, Reservation.cancel)
  expedia.reservation.cancel options, (err, response) ->
    process(res, err, response)

# a complete list of options is available at http://developer.ean.com/docs/request-itinerary/
exports.get = (req, res) ->
  options = options(req, Reservation.get)
  expedia.reservation.get options, (err, response) ->
    process(res, err, response)



