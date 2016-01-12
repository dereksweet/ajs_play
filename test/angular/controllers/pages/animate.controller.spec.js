require('test/test_helper');
require('angular-animate');
require('app/assets/javascripts/angular/controllers/pages/animate.controller.js');

describe('animateApp', function () {

  beforeEach(angular.mock.module("animateApp"));

  describe('AnimateController', function () {

    mockController = function ($controller) {
      controller = $controller("AnimateController", {

      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should default animate_on to false', function () {
      expect(controller.animate_on).to.equal(false);
    });

    it('should create the "people" object', function () {
      expect(controller.people[0]['name']).to.equal('Derek Sweet');
      expect(controller.people[0]['url']).to.equal('pages/animate/derek-sweet.html');
      expect(controller.people[1]['name']).to.equal('Kelsey Sweet');
      expect(controller.people[1]['url']).to.equal('pages/animate/kelsey-sweet.html');
    });

    it('should default selected_person to empty string', function () {
      expect(controller.selected_person).to.equal('');
    });

  })
});