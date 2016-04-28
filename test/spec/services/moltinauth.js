'use strict';

describe('Service: MoltinAuth', function () {

  // load the service's module
  beforeEach(module('pcmicroStoreApp'));

  // instantiate service
  var MoltinAuth;
  beforeEach(inject(function (_MoltinAuth_) {
    MoltinAuth = _MoltinAuth_;
  }));

  it('should do something', function () {
    expect(!!MoltinAuth).toBe(true);
  });

});
