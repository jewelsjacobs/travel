"use strict"

#
# Search Controller
#
angular.module("main.home").controller "SearchCtrl", [
  "$scope"
  ($scope) ->
    $scope.formats = [
      "dd-MMMM-yyyy"
      "yyyy/MM/dd"
      "shortDate"
    ]
    $scope.format = $scope.formats[0]
]
