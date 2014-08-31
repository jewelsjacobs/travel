express = require('express')
api = express.Router()
expedia = require("expedia")(
  apiKey: "hjmtgvdffmrdhjpq5tnscv36"
  cid: "55505"
)



# a complete list of options is available at http://developer.ean.com/docs/hotel-info/
hotelInfo = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelInformationRequest:
      hotelId: "122212"
      options: "0"

  expedia.hotels.info options, (err, response) ->
    if err
      res.status(500).send err
    res.send response

# a complete list of options is available at http://developer.ean.com/docs/hotel-list/
hotelList = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers["user-agent"]
    HotelListRequest:
      city: "Seattle"
      stateProvinceCode: "WA"
      countryCode: "US"
      arrivalDate: "7/15/2014"
      departureDate: "7/17/2014"
      RoomGroup: [
          Room:
            numberOfAdults: "2"
            numberOfChildren: "2"
            childAges: "5, 3"
      ,
          Room:
            numberOfAdults: "3"
            numberOfChildren: "1"
            childAges: "5"
      ]
      numberOfResults: "2"

  expedia.hotels.list options, (err, response) ->
    if err
      res.status(500).send err
    res.send response

# a complete list of options is available at http://developer.ean.com/docs/room-images/
hotelRoomImages = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelRoomImagesRequest:
      hotelId: "106347"

  expedia.hotels.roomImages options, (err, response) ->
    if err
      res.status(500).send err
    res.send response

# Simple echo server, response should match input
ping = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    PingRequest:
      echo: "This message should be echoed back to you."

  expedia.ping options, (err, response) ->
    if err
      res.status(500).send err
    res.send response


# a complete list of options is available at http://developer.ean.com/docs/book-reservation/
reservationBook = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelRoomReservationRequest:
      hotelId: "106347"
      arrivalDate: "9/30/2013"
      departureDate: "10/2/2013"
      supplierType: "E"
      rateKey: "af00b688-acf4-409e-8bdc-fcfc3d1cb80c"
      roomTypeCode: "198058"
      rateCode: "484072"
      chargeableRate: "231.18"
      RoomGroup:
        Room:
          numberOfAdults: "2"
          firstName: "test"
          lastName: "tester"
          bedTypeId: "23"
          smokingPreference: "NS"

      ReservationInfo:
        email: "test@travelnow.com"
        firstName: "test"
        lastName: "tester"
        homePhone: "2145370159"
        workPhone: "2145370159"
        creditCardType: "CA"
        creditCardNumber: "5401999999999999"
        creditCardIdentifier: "123"
        creditCardExpirationMonth: "11"
        creditCardExpirationYear: "2015"

      AddressInfo:
        address1: "travelnow"
        city: "Seattle"
        stateProvinceCode: "WA"
        countryCode: "US"
        postalCode: "98004"

  expedia.reservation.book options, (err, response) ->
    if err
      res.status(500).send err
    res.send response

# a complete list of options is available at http://developer.ean.com/docs/cancel-reservation/
reservationCancel = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelRoomCancellationRequest:
      itineraryId: "1234"
      email: "test@travelnow.com"
      reason: "COP"
      confirmationNumber: "1234"

  expedia.reservation.cancel options, (err, response) ->
    if err
      res.status(500).send err
    res.send response

# a complete list of options is available at http://developer.ean.com/docs/request-itinerary/
reservationGet = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelItineraryRequest:
      itineraryId: "1234"
      email: "test@travelnow.com"

  expedia.reservation.get options, (err, response) ->
    if err
      res.status(500).send err
    res.send response

api.use (req, res, next) ->
  console.log req.method req.url
  next()

api.get "/geosearch/:location", geoSearch
api.get "/payments", acceptedPayments
api.get "/hotel/avail", hotelAvailability
api.get "/hotel/info", hotelInfo
api.get "/hotel/list", hotelList
api.get "/hotel/images", hotelRoomImages
api.get "/ping", ping
api.post "/res/book", reservationBook
api.get "/res/cancel", reservationCancel
api.get "/res/get", reservationGet

module.exports = api
