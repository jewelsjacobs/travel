'use strict';

angular.module('travelApp', ['ngRoute', 'ngStorage', 'ngAnimate', 'ui.router', 'ui.utils', 'angularSpinner', 'ngSanitize', 'restangular'])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', '$stateProvider', '$urlRouterProvider', 'list', function ($routeProvider, $locationProvider, $httpProvider, $stateProvider, statesList){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: 'views/header.html',
            controller: 'HeaderCtrl'
          },
          'main': {
            templateUrl: 'views/main.html'
          }
        }
      })
      .state('main.home', {
        url: '/',
        views: {
          'container@': {
            templateUrl: 'views/home.html'
          },
          'banner': {
            templateUrl: 'views/banner.html',
            controller: 'BannerCtrl'
          }
        }
      });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
    angular.forEach(statesList, function (state){
      $stateProvider.state(state.name, state.options);
    })

    $locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams){
    $rootScope.loading = false;
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('main.home');
  }]);

