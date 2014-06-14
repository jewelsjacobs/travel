"use strict"

#
# Search Controller
#
angular.module("main.home").controller "SearchCtrl", ["$scope", "Expedia"
  ($scope, Expedia) ->

    # calendar
    $scope.today = ->
      $scope.dt = new Date()

    $scope.today()
    $scope.showWeeks = true
    $scope.toggleWeeks = ->
      $scope.showWeeks = not $scope.showWeeks

    $scope.clear = ->
      $scope.checkinDt = null
      $scope.checkoutDt = null

    $scope.toggleMin = ->
      $scope.minDate = (if ($scope.minDate) then null else new Date())

    $scope.toggleMin()
    $scope.openCheckIn = ($event) ->
      $event.preventDefault()
      $event.stopPropagation()
      $scope.checkInOpened = true

    $scope.openCheckOut = ($event) ->
      $event.preventDefault()
      $event.stopPropagation()
      $scope.checkOutOpened = true

    $scope.dateOptions =
      "year-format": "'yy'"
      "starting-day": 1

    $scope.formats = [
      "dd-MMMM-yyyy"
      "yyyy/MM/dd"
      "shortDate"
    ]
    $scope.format = $scope.formats[0]

    # typeahead
    $scope.getLocation = (val) ->
      Expedia.one("geosearch", val).getList().then (data) ->
        addresses = []
        locationInfoData = data.LocationInfoResponse.LocationInfos
        if locationInfoData["@size"] > 1
          angular.forEach locationInfoData.LocationInfo, (item) ->
            addresses.push "#{ item.city }, #{ item.countryName }"
        else
          addresses.push "#{ locationInfoData.LocationInfo.city }, #{ locationInfoData.LocationInfo.countryName.replace('.', '') }"
        addresses

]
