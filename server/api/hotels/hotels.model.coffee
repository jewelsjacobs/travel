exports.acceptedPayments =
  HotelPaymentRequest:
    hotelId: "122212"
    supplierType: "E"
    rateType: "MerchantStandard"

exports.hotelAvailability =
  HotelRoomAvailabilityRequest:
    hotelId: "106347"
    arrivalDate: "9/30/2013"
    departureDate: "10/2/2013"
    includeDetails: "true"
    RoomGroup:
      Room:
        numberOfAdults: "2"

exports.hotelInfo =
  HotelInformationRequest:
    hotelId: "122212"
    options: "0"

exports.hotelList =
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

exports.hotelRoomImages =
  HotelInformationRequest:
    hotelId: "122212"
    options: "0"