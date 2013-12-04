'use strict';

/**
 * Expedia service
 * API Docs: https://developers.google.com/freebase/
 */
angular.module('main')
  .factory('Expedia', ['Restangular', function (Restangular){

    return Restangular.withConfig(function (RestangularConfigurer){
      RestangularConfigurer.setBaseUrl('/api');
    });
  }]);