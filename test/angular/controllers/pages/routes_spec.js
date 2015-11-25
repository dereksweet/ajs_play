require('test/test_helper');
require('angular-route');
require('app/assets/javascripts/angular/controllers/pages/routes.js');

describe('routesApp', function () {

  beforeEach(angular.mock.module("routesApp"));

  describe('routesConfig', function () {
    it('should configure the routes properly', inject(function ($route) {
      expect($route.routes['/'].controller).to.equal('homeCtrl');
      expect($route.routes['/'].templateUrl).to.equal(asset_paths['pages/routes/home.html']);

      expect($route.routes['/about'].controller).to.equal('aboutCtrl');
      expect($route.routes['/about'].templateUrl).to.equal(asset_paths['pages/routes/about.html']);

      expect($route.routes['/contact'].controller).to.equal('contactCtrl');
      expect($route.routes['/contact'].templateUrl).to.equal(asset_paths['pages/routes/contact.html']);

      expect($route.routes['/eager/:extra*'].controller).to.equal('eagerCtrl');
      expect($route.routes['/eager/:extra*'].templateUrl).to.equal(asset_paths['pages/routes/eager.html']);

      expect($route.routes[null].controller).to.equal('notFoundCtrl');
      expect($route.routes[null].templateUrl).to.equal(asset_paths['pages/routes/routeNotFound.html']);
    }));
  });

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

    describe('this.isActive', function () {

      it('returns "active" if the passed in page is active, otherwise ""', function() {
        controller.active = 'about';
        expect(controller.isActive('about')).to.equal('active');
        expect(controller.isActive('home')).to.equal('');
      });

    });
  });



  // homeCtrl has no functionality so x it out for now
  xdescribe('homeCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller("homeCtrl", {
        $scope: mockScope
      });
    };

    beforeEach(angular.mock.inject(mockController));
  });



  // aboutCtrl has no functionality so x it out for now
  xdescribe('aboutCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      controller = $controller("aboutCtrl", {
        $scope: mockScope
      });
    };

    beforeEach(angular.mock.inject(mockController));
  });



  describe('contactCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      mockRouteParams = { 'subject': subject };
      controller = $controller("contactCtrl", {
        $scope: mockScope,
        $routeParams: mockRouteParams
      });
    };

    describe('the subject passed in is "learn"', function() {

      beforeEach(function() {
        subject = 'learn';
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set showLearn true', function () {
        expect(mockScope.showLearn).to.be.ok;
      });
    });

    describe('the subject passed in is "complain"', function() {
      beforeEach(function() {
        subject = 'complain';
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set showComplain true', function () {
        expect(mockScope.showComplain).to.be.ok;
      });
    });
  });



  describe('eagerCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      mockRouteParams = { 'extra': '12/34/56' };
      controller = $controller("eagerCtrl", {
        $scope: mockScope,
        $routeParams: mockRouteParams
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set extra to the routeParams extra', function () {
      expect(mockScope.extra).to.equal('12/34/56');
    });
  });



  describe('notFoundCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      mockLocation = { path: sinon.stub().returns('/routes/i_blow_goats') };
      controller = $controller("notFoundCtrl", {
        $scope: mockScope,
        $location: mockLocation
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set attemptedLocation to the $location page', function() {
      expect(mockScope.attemptedLocation).to.equal('/routes/i_blow_goats');
    });
  });
});
