require('test/test_helper');
require('app/assets/javascripts/angular/controllers/pages/directives.controller.js');

describe('directivesApp', function () {

  beforeEach(angular.mock.module("directivesApp"));

  describe('DirectivesController', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller("DirectivesController", {
        $scope: mockScope
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should default do_eval to false', function () {
      expect(controller.do_eval).to.equal(false);
    });

    describe('evalExpression()', function() {

      it('should return true if mathexpression evaluates to 10', function () {
        controller.do_eval = true;
        controller.mathexpression = "2 * 5";
        expect(controller.evalExpression()).to.equal(true);
      });

      it('should return false if mathexpression does not evaluate to 10', function () {
        controller.do_eval = true;
        controller.mathexpression = "2 + 5";
        expect(controller.evalExpression()).to.equal(false);
      });

      it('should set do_eval false if mathexpression is not a valid expression', function () {
        controller.do_eval = true;
        controller.mathexpression = "2 +";
        controller.evalExpression();
        expect(controller.do_eval).to.equal(false);
      });

    });

  })
});
