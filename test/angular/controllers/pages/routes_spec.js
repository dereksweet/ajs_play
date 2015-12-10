require('test/test_helper');
require('angular-route');
require('app/assets/javascripts/angular/controllers/pages/routes.controller.js');

describe('routesApp', function () {

  beforeEach(angular.mock.module("routesApp"));

  describe('routesConfig', function () {
    it('should configure the routes properly', inject(function ($route) {
      expect($route.routes['/'].controller).to.equal('homeCtrl as vm');
      expect($route.routes['/'].templateUrl).to.equal(asset_paths['pages/routes/home.html']);

      expect($route.routes['/about'].controller).to.equal('aboutCtrl as vm');
      expect($route.routes['/about'].templateUrl).to.equal(asset_paths['pages/routes/about.html']);

      expect($route.routes['/contact'].controller).to.equal('contactCtrl as vm');
      expect($route.routes['/contact'].templateUrl).to.equal(asset_paths['pages/routes/contact.html']);

      expect($route.routes['/eager/:extra*'].controller).to.equal('eagerCtrl as vm');
      expect($route.routes['/eager/:extra*'].templateUrl).to.equal(asset_paths['pages/routes/eager.html']);

      expect($route.routes[null].controller).to.equal('notFoundCtrl as vm');
      expect($route.routes[null].templateUrl).to.equal(asset_paths['pages/routes/routeNotFound.html']);
    }));
  });

  describe('routesCtrl', function () {

    mockController = function ($controller) {
      controller = $controller("routesCtrl", {

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

    mockController = function ($controller) {
      controller = $controller("homeCtrl", {

      });
    };

    beforeEach(angular.mock.inject(mockController));
  });



  // aboutCtrl has no functionality so x it out for now
  xdescribe('aboutCtrl', function () {

    mockController = function ($controller) {
      controller = $controller("aboutCtrl", {

      });
    };

    beforeEach(angular.mock.inject(mockController));
  });



  describe('contactCtrl', function () {

    mockController = function ($controller) {
      mockRouteParams = { 'subject': subject };
      controller = $controller("contactCtrl", {
        $routeParams: mockRouteParams
      });
    };

    describe('the subject passed in is "learn"', function() {

      beforeEach(function() {
        subject = 'learn';
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set showLearn true', function () {
        expect(controller.showLearn).to.be.ok;
      });
    });

    describe('the subject passed in is "complain"', function() {
      beforeEach(function() {
        subject = 'complain';
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set showLearn true', function () {
        expect(controller.showComplain).to.be.ok;
      });
    });
  });



  describe('eagerCtrl', function () {

    mockController = function ($controller) {
      mockRouteParams = { 'extra': '12/34/56' };
      controller = $controller("eagerCtrl", {
        $routeParams: mockRouteParams
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set extra to the routeParams extra', function () {
      expect(controller.extra).to.equal('12/34/56');
    });
  });



  describe('notFoundCtrl', function () {

    mockController = function ($controller) {
      mockLocation = { path: sinon.stub().returns('/routes/i_blow_goats') };
      controller = $controller("notFoundCtrl", {
        $location: mockLocation
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set attemptedLocation to the $location page', function() {
      expect(controller.attemptedLocation).to.equal('/routes/i_blow_goats');
    });
  });
});
