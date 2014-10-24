'use strict';

var PaginacaoCtrl =
  ['$scope',
  function ($scope) {
    var i;

    $scope.paginas = [];
    $scope.paginaatual = 1;
    $scope.tamanhopagina = 15;

    $scope.numerodepaginas = function() {
      return Math.ceil($scope.imoveis.length / $scope.tamanhopagina);
    };

    $scope.trocapagina = function(pagina) {
      $scope.paginaatual = pagina;
    };

    for (i=1;i<=$scope.numerodepaginas();i++) {
      $scope.paginas.push(i);
    }
  }
  ];
