'use strict';

angular.module('main.home', ['ui.bootstrap']).config(function ($stateProvider){
  var homeViewDir = 'views/home/';
  $stateProvider
    .state('main.home', {
      url: '/',
      abstract: true,
      views: {
        'content@': {
          templateUrl: homeViewDir + 'home.html'
        }
      }
    })
    .state('main.home.content', {
      url: '',
      views: {
        'banner': {
          templateUrl: homeViewDir + 'banner.html',
          controller: 'BannerCtrl'
        },
        'search': {
          templateUrl: homeViewDir + 'search.html',
          controller: 'SearchCtrl'
        },
        'lastminutelarge': {
          templateUrl: homeViewDir + 'lastminutelarge.html',
          controller: 'LastMinuteLargeCtrl'
        },
        'lastminutesmall': {
          templateUrl: homeViewDir + 'lastminutesmall.html',
          controller: 'LastMinuteSmallCtrl'
        },
        'topdeals': {
          templateUrl: homeViewDir + 'topdeals.html',
          controller: 'TopDealsCtrl'
        }
      }
    });
});
