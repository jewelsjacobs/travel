'use strict';

angular.module('main.home', ['main']).config(function ($stateProvider){
  $stateProvider
    .state('main.home', {
      url: '/',
      views: {
        '@container': {
          templateUrl: 'views/home.html'
        }
      }
    })
    .state('main.home.content', {
      url: '',
      views: {
        'banner': {
          templateUrl: 'views/banner.html',
          controller: 'BannerCtrl'
        },
        'search': {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl'
        },
        'lastminutelarge': {
          templateUrl: 'views/lastminutelarge.html',
          controller: 'LastMinuteLargeCtrl'
        },
        'lastminutesmall': {
          templateUrl: 'views/lastminutesmall.html',
          controller: 'LastMinuteSmallCtrl'
        },
        'topdeals': {
          templateUrl: 'views/topdeals.html',
          controller: 'TopDealsCtrl'
        }
      }
    });
});
