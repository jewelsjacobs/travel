"use strict"
angular.module("main.home", ["ui.bootstrap"]).config ($stateProvider) ->
  $stateProvider.state("main.home",
    url: "/"
    abstract: true
    views:
      "content@":
        templateUrl: "home/home.html"
  ).state "main.home.content",
    url: ""
    views:
      banner:
        templateUrl: "home/banner.html"
        controller: "BannerCtrl"

      search:
        templateUrl: "home/search.html"
        controller: "SearchCtrl"

      lastminutelarge:
        templateUrl: "home/lastminutelarge.html"
        controller: "LastMinuteLargeCtrl"

      lastminutesmall:
        templateUrl: "home/lastminutesmall.html"
        controller: "LastMinuteSmallCtrl"

      topdeals:
        templateUrl: "home/topdeals.html"
        controller: "TopDealsCtrl"

