"use strict"

#
# Expedia service
# API Docs: https://github.com/Sdedelbrock/node-expedia-api
#
angular.module("main").factory "Expedia", [
  "Restangular"
  (Restangular) ->
    Restangular.withConfig((RestangularConfigurer) ->
      RestangularConfigurer.setBaseUrl "/api"
    )
  ]
