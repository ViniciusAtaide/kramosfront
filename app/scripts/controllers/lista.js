'use strict';

var ListaCtrl =
  ['$scope', 'imoveis',
  function ($scope, imoveis) {
    $scope.imoveis = imoveis.results;
    $scope.mostra = $scope.imoveis.length >= $scope.tamanhopagina;
  }];

ListaCtrl.resolve = {
  imoveis: ['imovel', '$q', function (imovel, $q) {
    var deferred = $q.defer();
    imovel.get({'lancamento': ''}).$promise.then(function(result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  }],
  completos: ['imovel','$q',function(imovel, $q) {
    var deferred = $q.defer();
    imovel.get({'lancamento':true}).$promise.then(function(result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  }]
};