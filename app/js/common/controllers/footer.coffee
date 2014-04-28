"use strict"

#
# Footer Controller
#
angular.module("main").controller "FooterCtrl", [
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
