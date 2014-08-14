'use strict';

describe('Controller: ListaCtrl', function () {

  // load the controller's module
  beforeEach(module('kleberApp'));

  var ListaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListaCtrl = $controller('ListaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
