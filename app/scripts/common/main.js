'use strict';

angular.module('main', ['ngRoute', 'ui.router', 'main.home'])
  .config(['$routeProvider',
    '$locationProvider',
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider', function ($routeProvider,
                      $locationProvider,
                      $httpProvider,
                      $stateProvider){
    var commonViewDir = 'views/common/';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        views: {
          'header': {
            templateUrl: commonViewDir + 'header.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: commonViewDir + 'footer.html',
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

