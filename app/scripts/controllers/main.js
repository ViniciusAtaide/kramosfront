'use strict';

angular.module('kleberApp')
  .controller('MainCtrl', ['$scope','slides','cidades','imoveis','$location',
    function ($scope, slides, cidades, imoveis, $location) {
      $scope.construcao = [];
      $scope.lancamentos = [];
      $scope.interval = 5000;

      $scope.pretencoes = [
        {nome: 'Aluguel', valor: 'aluguel'},
        {nome: 'Temporada', valor: 'temporada'}
      ];


      $scope.cidades = cidades.results;

      $scope.imoveisarray = imoveis.results;

      angular.forEach($scope.imoveisarray, function(imovel) {
        if (imovel.lancamento !== false) {
          $scope.construcao.push(imovel);
        } else {
          $scope.lancamentos.push(imovel);
        }
      });

      $scope.slides = slides.results;

      $scope.escolheCidade = function(idCidade) {
        var cidade = $scope.cidades[idCidade-1];
        $scope.bairros = cidade.bairros;
      };

      $scope.busca = function(f) {
//      Todo adicionar busca por parametros

        $location.path('/completos');
      };
    }]);
