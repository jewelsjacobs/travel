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

# Takes a search string as an argument, and returns location information available for performing a hotel search
# a complete list of options is available at http://developer.ean.com/docs/geo-functions/
exports.search = (req, res) ->
  options =
    customerSessionId: req.session
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    LocationInfoRequest:
      locale: "en_US"
      destinationString: req.params.location

  expedia.geoSearch options, (err, response) ->
    process(res, err, response)