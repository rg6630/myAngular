'use strict';

/**
 * @ngdoc overview
 * @name myAngularApp
 * @description
 * # myAngularApp
 *
 * Main module of the application.
 */
angular
  .module('myAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

    .config(function ($routeProvider) {
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
      .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast'
      })    
      .otherwise({
        redirectTo: '/'
      });
  });


//SERVICES
angular.module('myAngularApp').service('cityService', function(){
   this.city = "New York,NY";
    });

