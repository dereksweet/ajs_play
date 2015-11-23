require('test/test_helper');
require('app/assets/javascripts/angular/controllers/pages/routes.js.erb');

describe('routesApp', function () {

    beforeEach(angular.mock.module("routesApp"));

    describe('routesCtrl', function () {

        mockController = function ($controller, $rootScope) {
            mockScope = $rootScope.$new();
            controller = $controller("routesCtrl", {
                $scope: mockScope
            });
        };

        beforeEach(angular.mock.inject(mockController));

        it('should be true', function () {
            expect(true).to.equal(true);
        });
    })
});
