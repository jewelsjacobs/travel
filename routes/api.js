var expedia = require("expedia")({apiKey:"pa39hsu58223g8m23fnb7442",cid:"55505"});

// Takes a search string as an argument, and returns location information available for performing a hotel search
// a complete list of options is available at http://developer.ean.com/docs/geo-functions/
exports.geoSearch = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "LocationInfoRequest": {
      "locale": "en_US",
      "destinationString": "Seattle, WA"
    }
  };

  expedia.geoSearch(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/payment-types/
exports.acceptedPayments = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelPaymentRequest": {
      "hotelId": "122212",
      "supplierType": "E",
      "rateType": "MerchantStandard"
    }
  };

  expedia.hotels.acceptedPayments(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/room-avail/
exports.hotelAvailability = function(req, res) {
// a complete list of options is available at http://developer.ean.com/docs/room-avail/
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelRoomAvailabilityRequest": {
      "hotelId": "106347",
      "arrivalDate": "9/30/2013",
      "departureDate": "10/2/2013",
      "includeDetails": "true",
      "RoomGroup": {
        "Room": { "numberOfAdults": "2" }
      }
    }
  };

  expedia.hotels.availability(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/hotel-info/
exports.hotelInfo = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelInformationRequest": {
      "hotelId": "122212",
      "options": "0"
    }
  };

  expedia.hotels.info(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/hotel-list/
exports.hotelList = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelListRequest": {
      "city": "Seattle",
      "stateProvinceCode": "WA",
      "countryCode": "US",
      "arrivalDate": "9/30/2013",
      "departureDate": "10/2/2013",
      "RoomGroup": {
        "Room": { "numberOfAdults": "2" }
      },
      "numberOfResults": "25"
    }
  }

  expedia.hotels.list(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/room-images/
exports.hotelRoomImages = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelRoomImagesRequest": {
      "hotelId": "106347",
    }
  };

  expedia.hotels.roomImages(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// Simple echo server, response should match input
exports.ping = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "PingRequest": { "echo": "This message should be echoed back to you." }
  };

  expedia.ping(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/book-reservation/
exports.reservationBook = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelRoomReservationRequest": {
      "hotelId": "106347",
      "arrivalDate": "9/30/2013",
      "departureDate": "10/2/2013",
      "supplierType": "E",
      "rateKey": "af00b688-acf4-409e-8bdc-fcfc3d1cb80c",
      "roomTypeCode": "198058",
      "rateCode": "484072",
      "chargeableRate": "231.18",
      "RoomGroup": {
        "Room": {
          "numberOfAdults": "2",
          "firstName": "test",
          "lastName": "tester",
          "bedTypeId": "23",
          "smokingPreference": "NS"
        }
      },
      "ReservationInfo": {
        "email": "test@travelnow.com",
        "firstName": "test",
        "lastName": "tester",
        "homePhone": "2145370159",
        "workPhone": "2145370159",
        "creditCardType": "CA",
        "creditCardNumber": "5401999999999999",
        "creditCardIdentifier": "123",
        "creditCardExpirationMonth": "11",
        "creditCardExpirationYear": "2015"
      },
      "AddressInfo": {
        "address1": "travelnow",
        "city": "Seattle",
        "stateProvinceCode": "WA",
        "countryCode": "US",
        "postalCode": "98004"
      }
    }
  };

  expedia.reservation.book(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/cancel-reservation/
exports.reservationCancel = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelRoomCancellationRequest": {
      "itineraryId": "1234",
      "email": "test@travelnow.com",
      "reason": "COP",
      "confirmationNumber": "1234"
    }
  };

  expedia.reservation.cancel(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};
// a complete list of options is available at http://developer.ean.com/docs/request-itinerary/
exports.reservationGet = function(req, res) {
  var options = {
    "customerSessionId" : "thisisauniqueID",
    "customerIpAddress" : "127.0.0.1",
    "customerUserAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko)",
    "HotelItineraryRequest": {
      "itineraryId": "1234",
      "email": "test@travelnow.com"
    }
  };

  expedia.reservation.get(options, function(err, response){
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(response);
  });
};