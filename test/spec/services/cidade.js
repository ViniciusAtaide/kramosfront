'use strict';

describe('Service: cidade', function () {

  // load the service's module
  beforeEach(module('kleberApp'));

  // instantiate service
  var cidade;
  beforeEach(inject(function (_cidade_) {
    cidade = _cidade_;
  }));

  it('should do something', function () {
    expect(!!cidade).toBe(true);
  });

});
