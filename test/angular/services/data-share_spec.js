require('test/test_helper');
require('app/assets/javascripts/angular/services/data-share');

var service, $rootScope;

describe('data-share service', function () {
  beforeEach(function () {
    angular.mock.module(moduleName);

    inject(function (dataShareService, _$rootScope_) {
      $rootScope = _$rootScope_;
      service = dataShareService;

      $rootScope.$broadcast = sinon.spy();
    });
  });

  it('should initialize the colors array', function () {
    expect(service.colors.length).to.be.equal(3);
    expect(service.colors[0].value).to.include.equal('red');
    expect(service.colors[1].value).to.include.equal('blue');
    expect(service.colors[2].value).to.include.equal('yellow');
  });

  describe('getAllUsers()', function () {
    beforeEach(function () {
      service.getAllUsers();
    });

    it('should broadcast the getAllUsers event from the rootScope', function () {
      expect($rootScope.$broadcast.calledWith('getAllUsers')).to.equal(true);
    });
  });
});