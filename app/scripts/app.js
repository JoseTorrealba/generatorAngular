(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name exampleApp
     * @description
     * # exampleApp
     *
     * Main module of the application.
     */
    angular
        .module('exampleApp', [
            'ngAnimate',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
        ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });



})();