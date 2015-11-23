require('test/test_helper');
require('angular-animate');
require('app/assets/javascripts/angular/controllers/pages/animate.js.erb');

describe('animateApp', function () {

  beforeEach(angular.mock.module("animateApp"));

  describe('animateCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller("animateCtrl", {
        $scope: mockScope
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should default animate_on to false', function () {
      expect(mockScope.animate_on).to.equal(false);
    });

    it('should create the "people" object', function () {
      expect(mockScope.people[0]['name']).to.equal('Derek Sweet');
      expect(mockScope.people[0]['url']).to.equal('pages/animate/derek-sweet.html');
      expect(mockScope.people[1]['name']).to.equal('Kelsey Sweet');
      expect(mockScope.people[1]['url']).to.equal('pages/animate/kelsey-sweet.html');
    });

    it('should default selected_person to empty string', function () {
      expect(mockScope.selected_person).to.equal('');
    });

  })
});