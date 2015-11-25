require('test/test_helper');
require('angular-resource');
require('app/assets/javascripts/angular/controllers/pages/forms.js');

describe('formsApp', function () {

  beforeEach(angular.mock.module("formsApp"));

  describe('mySimpleFormsCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      mockDataStore = { User: stub() };
      mockDataShareService = { colors: ['blue', 'red', 'green'] };

      controller = $controller("mySimpleFormsCtrl", {
        $scope: mockScope,
        dataStore: mockDataStore,
        dataShareService: mockDataShareService
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set $scope.user to an object', function () {
      expect(typeof(mockScope.user)).to.equal('object');
    });

    it('should set $scope.user.is_cool param to false', function () {
      expect(mockScope.user.is_cool).to.equal(false);
    });

    it('should set $scope.colors param to the dataShare services colors', function () {
      expect(mockScope.colors).to.include.members(mockDataShareService.colors);
    });
  });
});
