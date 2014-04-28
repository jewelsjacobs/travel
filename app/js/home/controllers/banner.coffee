"use strict"

#
# Banner Controller
#
angular.module("main.home").controller "BannerCtrl", [
  "$scope"
  ($scope) ->
    $scope.myInterval = 5000
    $scope.slides = [
      {
        image: "img/slider/santorini.jpg"
        country: "Greece"
        city: "Santorini"
        price: "$1500"
      }
      {
        image: "img/slider/rome.jpg"
        country: "Italy"
        city: "Rome"
        price: "$1500"
      }
      {
        image: "img/slider/paris.jpg"
        country: "France"
        city: "Paris"
        price: "$1500"
      }
    ]
]
