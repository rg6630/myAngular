'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('AboutCtrl', ['$scope', 'cityService', function ($scope, cityService) {
  	$scope.city = cityService.city; 

  	$scope.$watch('city', function(){
  		cityService.city = $scope.city;
  	});
  }]);
