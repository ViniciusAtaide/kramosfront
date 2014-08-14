'use strict';

describe('Service: filtro', function () {

  // load the service's module
  beforeEach(module('kleberApp'));

  // instantiate service
  var filtro;
  beforeEach(inject(function (_filtro_) {
    filtro = _filtro_;
  }));

  it('should do something', function () {
    expect(!!filtro).toBe(true);
  });

});
