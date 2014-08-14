'use strict';

angular.module('kleberApp')
  .controller('DetalheCtrl', ['$scope', '$timeout', 'imovel', function ($scope, $timeout, imovel) {

    $scope.imovel = imovel;

    $timeout(function(){
      $('.slider').Slider();

      $('.baixo').responsiveManySlider({
        slideObjs : '.paginador-detalhe',
        box : '.window',
        paginadorActive: 'ativo',
        slider : '.listapaginador',
        nextPaginator : '.pagnext',
        prevPaginator : '.pagprev',
        paddingLeft: 0
      });
    }, 1000);
    }]);

