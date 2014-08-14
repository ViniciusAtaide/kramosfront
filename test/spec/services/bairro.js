'use strict';

describe('Service: bairro', function () {

  // load the service's module
  beforeEach(module('kleberApp'));

  // instantiate service
  var bairro;
  beforeEach(inject(function (_bairro_) {
    bairro = _bairro_;
  }));

  it('should do something', function () {
    expect(!!bairro).toBe(true);
  });

});
