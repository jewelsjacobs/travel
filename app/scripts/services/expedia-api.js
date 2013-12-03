'use strict';

/**
 * Expedia service
 * API Docs: https://developers.google.com/freebase/
 */
angular.module('travelApp')
	.factory('Expedia', ['Restangular', function(Restangular) {

		return Restangular.withConfig(function(RestangularConfigurer) {
			RestangularConfigurer.setBaseUrl('/api');
		});
	}]);