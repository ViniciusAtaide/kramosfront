'use strict';

describe('Controller: CompletosCtrl', function () {

  // load the controller's module
  beforeEach(module('kleberApp'));

  var CompletosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompletosCtrl = $controller('CompletosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
