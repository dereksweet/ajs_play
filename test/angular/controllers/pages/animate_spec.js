require('test/test_helper');
require('angular-animate');
require('app/assets/javascripts/angular/controllers/pages/animate.js.erb');

beforeEach(angular.mock.module("animateApp"));

describe('animateApp', function () {
  describe('animateCtrl', function () {

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller("animateCtrl", {
        $scope: mockScope
      });
    }));

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