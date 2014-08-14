'use strict';

describe('Controller: DetalheCtrl', function () {

  // load the controller's module
  beforeEach(module('kleberApp'));

  var DetalheCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetalheCtrl = $controller('DetalheCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
