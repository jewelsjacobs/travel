"use strict"

#
# Search Controller
#
angular.module("main.home").controller "SearchCtrl", [
  "$scope"
  ($scope) ->
    $scope.today = ->
      $scope.dt = new Date()

    $scope.today()
    $scope.showWeeks = true
    $scope.toggleWeeks = ->
      $scope.showWeeks = not $scope.showWeeks

    $scope.clear = ->
      $scope.dt = null

    # Disable weekend selection
    $scope.disabled = (date, mode) ->
      mode is "day" and (date.getDay() is 0 or date.getDay() is 6)

    $scope.toggleMin = ->
      $scope.minDate = (if ($scope.minDate) then null else new Date())

    $scope.toggleMin()
    $scope.open = ($event) ->
      $event.preventDefault()
      $event.stopPropagation()
      $scope.opened = true

    $scope.dateOptions =
      "year-format": "'yy'"
      "starting-day": 1

    $scope.formats = [
      "dd-MMMM-yyyy"
      "yyyy/MM/dd"
      "shortDate"
    ]
    $scope.format = $scope.formats[0]
]
