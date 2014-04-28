"use strict"

###
Expedia service
API Docs: https://developers.google.com/freebase/
###
angular.module("main").factory "Expedia", [
  "Restangular"
  (Restangular) ->
    Restangular.withConfig((RestangularConfigurer) ->
      RestangularConfigurer.setBaseUrl "/api"
    )
  ]
