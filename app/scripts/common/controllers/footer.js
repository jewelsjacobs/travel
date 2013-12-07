'use strict';

/**
 * Global Controller
 */
angular.module('main')
  .controller("FooterCtrl", ['$scope', function ($scope){
    $scope.links = [
      {name: 'home', url: '/'},
      {name: 'about', url: '/about'},
      {name: 'contacts', url: '/contact'}
    ];
  }]);