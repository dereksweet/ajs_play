require('test/test_helper');
require('angular-route');
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

        it('default active to "home"', function () {
            expect(controller.active).to.equal('home');
        });
    })
});
