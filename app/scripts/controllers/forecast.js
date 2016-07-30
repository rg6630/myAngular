'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('ForecastCtrl', ['$scope', 'cityService', function ($scope, cityService) {
    $scope.city = cityService.city;
  }]);
