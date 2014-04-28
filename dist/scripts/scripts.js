'use strict';

angular.module('travelApp', ['main','main.home']);

'use strict';

angular.module('main.home', ['ui.bootstrap']).config(function ($stateProvider){
  var homeViewDir = './views/home/';
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
'use strict';

/**
 * Lastminutelarge Controller
 */
angular.module('main.home')
  .controller("LastMinuteLargeCtrl", ['$scope', function ($scope){

  }]);
'use strict';

/**
 * Lastminutesmall Controller
 */
angular.module('main.home')
  .controller("LastMinuteSmallCtrl", ['$scope', function ($scope){

  }]);
'use strict';

/**
 * Search Controller
 */
angular.module('main.home')
  .controller("SearchCtrl", ['$scope', function ($scope){
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    $scope.format = $scope.formats[0];
  }]);
'use strict';

/**
 * Topdeals Controller
 */
angular.module('main.home')
  .controller("TopDealsCtrl", ['$scope', function ($scope){

  }]);
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
    var commonViewDir = './views/common/';
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
'use strict';

/**
 * Global Controller
 */
angular.module('main')
  .controller("HeaderCtrl", ['$scope', function ($scope){
    $scope.links = [
      {name: 'home', url: '/'},
      {name: 'about', url: '/about'},
      {name: 'contacts', url: '/contact'}
    ];
  }]);
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