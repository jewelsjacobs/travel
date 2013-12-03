'use strict';

angular.module('list', ['ui.state'])
    .constant('statesList', [
        { name: 'main.list',
            options: {
                url: '/list',
                views: {
                    'container@': {
                        templateUrl: 'views/list.html'
                    }
                },
                controller:'ListController'
            }}
    ])
    .config(['$stateProvider', function($stateProvider){
    }])
