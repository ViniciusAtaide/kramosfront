'use strict';

/**
 * @ngdoc function
 * @name kleberApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the kleberApp
 */
angular.module('kleberApp')
  .controller('ViewCtrl', ['$scope',function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
