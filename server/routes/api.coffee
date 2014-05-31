expedia = require("expedia")(
  apiKey: "hjmtgvdffmrdhjpq5tnscv36"
  cid: "55505"
)

# Takes a search string as an argument, and returns location information available for performing a hotel search
# a complete list of options is available at http://developer.ean.com/docs/geo-functions/
exports.geoSearch = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    LocationInfoRequest:
      locale: "en_US"
      destinationString: req.params.location

  expedia.geoSearch options, (err, response) ->
    if err
      res.status(500).send err
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/payment-types/
exports.acceptedPayments = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelPaymentRequest:
      hotelId: "122212"
      supplierType: "E"
      rateType: "MerchantStandard"

  expedia.hotels.acceptedPayments options, (err, response) ->
    if err
      res.status(500).send err
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/room-avail/
exports.hotelAvailability = (req, res) ->
  
  # a complete list of options is available at http://developer.ean.com/docs/room-avail/
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelRoomAvailabilityRequest:
      hotelId: "106347"
      arrivalDate: "9/30/2013"
      departureDate: "10/2/2013"
      includeDetails: "true"
      RoomGroup:
        Room:
          numberOfAdults: "2"

  expedia.hotels.availability options, (err, response) ->
    if err
      res.status(500).send err
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/hotel-info/
exports.hotelInfo = (req, res) ->
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
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/hotel-list/
exports.hotelList = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelListRequest:
      city: "Seattle"
      stateProvinceCode: "WA"
      countryCode: "US"
      arrivalDate: "9/30/2013"
      departureDate: "10/2/2013"
      RoomGroup:
        Room:
          numberOfAdults: "2"

      numberOfResults: "25"

  expedia.hotels.list options, (err, response) ->
    if err
      res.status(500).send err
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/room-images/
exports.hotelRoomImages = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    HotelRoomImagesRequest:
      hotelId: "106347"

  expedia.hotels.roomImages options, (err, response) ->
    if err
      res.status(500).send err
      return
    res.send response
    return

  return


# Simple echo server, response should match input
exports.ping = (req, res) ->
  options =
    customerSessionId: req.sessionID
    customerIpAddress: req.ip
    customerUserAgent: req.headers['user-agent']
    PingRequest:
      echo: "This message should be echoed back to you."

  expedia.ping options, (err, response) ->
    if err
      res.status(500).send err
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/book-reservation/
exports.reservationBook = (req, res) ->
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
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/cancel-reservation/
exports.reservationCancel = (req, res) ->
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
      return
    res.send response
    return

  return


# a complete list of options is available at http://developer.ean.com/docs/request-itinerary/
exports.reservationGet = (req, res) ->
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
      return
    res.send response
    return

  return
