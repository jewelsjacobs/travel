"use strict"
angular.module("main.hotels", ["ui.bootstrap"]).config ($stateProvider) ->
  $stateProvider.state("main.hotels",
    url: "/list"
    abstract: true
    views:
      "content@":
        templateUrl: "hotels/hotels.html"
  ).state "main.hotels.content",
    url: ""
    views:
      breadcrumb:
        templateUrl: "hotels/breadcrumb.html"
        controller: "BreadcrumbCtrl"

      filters:
        templateUrl: "hotels/filters.html"
        controller: "FiltersCtrl"

      list:
        templateUrl: "hotels/grid.html"
        controller: "ListCtrl"

