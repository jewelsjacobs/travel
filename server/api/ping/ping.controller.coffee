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

Ping = require("./ping.model")

# Simple echo server, response should match input
exports.ping = (req, res) ->

  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']

  _.assign options, Ping.ping

  expedia.ping options, (err, response) ->
    process(res, err, response)