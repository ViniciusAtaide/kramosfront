'use strict';

describe('Service: slide', function () {

  // load the service's module
  beforeEach(module('kleberApp'));

  // instantiate service
  var slide;
  beforeEach(inject(function (_slide_) {
    slide = _slide_;
  }));

  it('should do something', function () {
    expect(!!slide).toBe(true);
  });

});
