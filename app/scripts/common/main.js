'use strict';

angular.module('main', ['ngRoute', 'ui.router'])
  .config(['$routeProvider',
    '$locationProvider',
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider', function ($routeProvider,
                      $locationProvider,
                      $httpProvider,
                      $stateProvider){
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
          'footer': {
            templateUrl: 'views/footer.html',
            controller: 'FooterCtrl'
          }
        }
      });
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', function ($rootScope){
    $rootScope.loading = false;
  }]);

