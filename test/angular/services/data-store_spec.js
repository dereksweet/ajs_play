require('test/test_helper');
require('app/assets/javascripts/angular/services/data-store');

var service;

describe('data-store service', function () {
  beforeEach(function () {
    angular.mock.module(moduleName);

    User = sinon.stub();
    Country = sinon.stub();

    inject(function (dataStore) {
      service = dataStore;
    });
  });

  it('should create the User resource', function () {
    expect(service.User).to.not.be.null;
  });

  it('should create the Country resource', function () {
    expect(service.Country).to.not.be.null;
  });
});
