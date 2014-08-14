'use strict';

describe('Controller: PaginacaoCtrl', function () {

  // load the controller's module
  beforeEach(module('kleberApp'));

  var PaginacaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaginacaoCtrl = $controller('PaginacaoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
