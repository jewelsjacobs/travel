"use strict"

###
Global Controller
###
angular.module("main").controller "HeaderCtrl", [
  "$scope"
  ($scope) ->
    $scope.links = [
      {
        name: "home"
        url: "/"
      }
      {
        name: "about"
        url: "/about"
      }
      {
        name: "contacts"
        url: "/contact"
      }
    ]
]
