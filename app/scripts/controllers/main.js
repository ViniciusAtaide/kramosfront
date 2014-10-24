'use strict';


var MainCtrl =
  ['$scope','slides','cidades','imoveis',
  function ($scope, slides, cidades, imoveis) {
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
}];

MainCtrl.resolve = {
  cidades: ['cidade', '$q', function (cidade, $q) {
    var deferred = $q.defer();
    cidade.get(function(result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  }],
  imoveis: ['imovel', '$q', function (imovel, $q) {
      var deferred = $q.defer();
      imovel.get(function (result) {
          deferred.resolve(result);
      });
      return deferred.promise;
  }],
  slides: ['slide', '$q', function (slide, $q) {
    var deferred = $q.defer();
    slide.get(function(result) {
        deferred.resolve(result);
    });
    return deferred.promise;
  }]
};