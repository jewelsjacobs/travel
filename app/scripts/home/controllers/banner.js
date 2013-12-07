'use strict';

/**
 * Banner Controller
 */
angular.module('main.home')
  .controller("BannerCtrl", ['$scope', function ($scope){
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
      {
        image: 'images/slider/santorini.jpg',
        country: 'Greece',
        city: 'Santorini',
        price: '$1500'
      },
      {
        image: 'images/slider/rome.jpg',
        country: 'Italy',
        city: 'Rome',
        price: '$1500'
      },
      {
        image: 'images/slider/paris.jpg',
        country: 'France',
        city: 'Paris',
        price: '$1500'
      }
    ];
  }]);