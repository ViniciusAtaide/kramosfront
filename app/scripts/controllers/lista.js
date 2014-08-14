'use strict';

angular.module('kleberApp').controller('ListaCtrl', ['$scope', 'imoveis', function ($scope, imoveis) {
  $scope.imoveis = imoveis.results;
  $scope.mostra = $scope.imoveis.length >= $scope.tamanhopagina;
}]);
