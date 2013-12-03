'use strict';

/**
 * Global Controller
 */
angular.module('travelApp')
  .controller("HeaderCtrl", ['$scope', function ($scope){
    $scope.links = [
      {name: 'home', url: '/'},
      {name: 'about', url: '/about'},
      {name: 'contacts', url: '/contact'}
    ];
  }]);