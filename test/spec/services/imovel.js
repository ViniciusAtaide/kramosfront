'use strict';

describe('Service: imovel', function () {

  // load the service's module
  beforeEach(module('kleberApp'));

  // instantiate service
  var imovel;
  beforeEach(inject(function (_imovel_) {
    imovel = _imovel_;
  }));

  it('should do something', function () {
    expect(!!imovel).toBe(true);
  });

});
