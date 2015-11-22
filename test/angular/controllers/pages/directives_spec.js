require('test/test_helper');
require('app/assets/javascripts/angular/controllers/pages/directives.js.erb');

beforeEach(angular.mock.module("directivesApp"));

describe('directivesApp', function () {
  describe('directivesCtrl', function () {

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller("directivesCtrl", {
        $scope: mockScope
      });
    }));

    it('should default do_eval to false', function () {
      expect(mockScope.do_eval).to.equal(false);
    });

    describe('evalExpression()', function() {

      it('should return true if mathexpression evaluates to 10', function () {
        mockScope.do_eval = true;
        mockScope.mathexpression = "2 * 5";
        expect(mockScope.evalExpression()).to.equal(true);
      });

      it('should return false if mathexpression does not evaluate to 10', function () {
        mockScope.do_eval = true;
        mockScope.mathexpression = "2 + 5";
        expect(mockScope.evalExpression()).to.equal(false);
      });

      it('should set do_eval false if mathexpression is not a valid expression', function () {
        mockScope.do_eval = true;
        mockScope.mathexpression = "2 +";
        mockScope.evalExpression();
        expect(mockScope.do_eval).to.equal(false);
      });

    });

  })
});
