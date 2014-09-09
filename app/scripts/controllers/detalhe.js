'use strict';

angular.module('kleberApp').controller('DetalheCtrl', ['$scope', '$timeout', 'imovel', '$modal', function ($scope, $timeout, imovel, $modal) {

  $scope.imovel = imovel;

  $timeout(function () {
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

  $scope.modal = function () {
    $modal.open({
      templateUrl: './static/front/views/modal.html',
      controller: 'ModalInstanceCtrl'
    });
  };
}]);


angular.module('kleberApp').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
  $scope.dismiss = function () {
    $modalInstance.dismiss('cancel');
  };
}]);
