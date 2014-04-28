"use strict"
angular.module("main", [
  "ngRoute"
  "ui.router"
  "main.home"
]).config([
  "$routeProvider"
  "$locationProvider"
  "$httpProvider"
  "$stateProvider"
  "$urlRouterProvider"
  ($routeProvider, $locationProvider, $httpProvider, $stateProvider) ->
    delete $httpProvider.defaults.headers.common["X-Requested-With"]

    $stateProvider.state "main",
      url: ""
      abstract: true
      views:
        header:
          templateUrl: "common/header.html"
          controller: "HeaderCtrl"

        footer:
          templateUrl: "common/footer.html"
          controller: "FooterCtrl"

    $routeProvider.otherwise redirectTo: "/"
    $locationProvider.html5Mode true
]).run [
  "$rootScope"
  ($rootScope) ->
    $rootScope.loading = false
]