require('test/test_helper');
require('ui-router');
require('app/assets/javascripts/angular/controllers/pages/uirouter.controller.js');

describe('uirouterApp', function () {

  beforeEach(angular.mock.module("uiRouterApp"));

  describe('routesConfig', function () {
    it('should configure the routes properly', inject(function ($state) {
      expect($state.href('home')).to.equal('#/');
      expect($state.href('about')).to.equal('#/about');
      expect($state.href('contact')).to.equal('#/contact');
      expect($state.href('contact_complain')).to.equal('#/contact/complain');
      expect($state.href('nested')).to.equal('#/nested');
      expect($state.href('nested.list')).to.equal('#/nested/list');
      expect($state.href('multiple')).to.equal('#/multiple');

      homeState = $state.get('home');
      expect(homeState.url).to.equal('/');
      expect(homeState.templateUrl).to.equal('pages/routes/home.html');
      expect(homeState.data.name).to.equal('home');

      aboutState = $state.get('about');
      expect(aboutState.url).to.equal('/about');
      expect(aboutState.templateUrl).to.equal('pages/routes/about.html');
      expect(aboutState.data.name).to.equal('about');

      contactState = $state.get('contact');
      expect(contactState.url).to.equal('/contact');
      expect(contactState.templateUrl).to.equal('pages/routes/contact.html');
      expect(contactState.data.name).to.equal('contact');

      contact_complainState = $state.get('contact_complain');
      expect(contact_complainState.url).to.equal('/contact/complain');
      expect(contact_complainState.templateUrl).to.equal('pages/routes/contact.html');
      expect(contact_complainState.data.subject).to.equal('complain');
      expect(contact_complainState.data.name).to.equal('contact_complain');

      nestedState = $state.get('nested');
      expect(nestedState.url).to.equal('/nested');
      expect(nestedState.templateUrl).to.equal('pages/uirouter/nested.html');
      expect(nestedState.data.name).to.equal('nested');

      contactState = $state.get('nested.list');
      expect(contactState.url).to.equal('/list');
      expect(contactState.templateUrl).to.equal('pages/uirouter/nested.list.html');
      expect(contactState.data.name).to.equal('nested');

      multipleState = $state.get('multiple');
      expect(multipleState.url).to.equal('/multiple');
      expect(multipleState.templateUrl).to.equal('pages/uirouter/multiple.html');
      expect(multipleState.data.name).to.equal('multiple');

      multipleState1State = $state.get('multiple.state1');
      expect(multipleState1State.data.name).to.equal('multiple');
      expect(multipleState1State.views['viewA'].templateUrl).to.equal('pages/uirouter/multiple.state1.viewA.html');
      expect(multipleState1State.views['viewB'].templateUrl).to.equal('pages/uirouter/multiple.state1.viewB.html');

      multipleState2State = $state.get('multiple.state2');
      expect(multipleState2State.data.name).to.equal('multiple');
      expect(multipleState2State.views['viewA'].templateUrl).to.equal('pages/uirouter/multiple.state2.viewA.html');
      expect(multipleState2State.views['viewB'].templateUrl).to.equal('pages/uirouter/multiple.state2.viewB.html');
    }));
  });

  describe('uirouterCtrl', function () {

    mockController = function ($controller, $state) {
      mockState = $state;
      controller = $controller("uirouterCtrl", {
        $state: mockState
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set the controller.state object to $state', function() {
      expect(controller.state).to.equal(mockState);
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
      mockState = { current: { data: { subject: subject }}};
      controller = $controller("contactCtrl", {
        $state: mockState
      });
    };

    describe('the subject passed in is complain', function() {
      beforeEach(function() {
        subject = 'complain'
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set showComplain to true', function() {
        expect(controller.showComplain).to.equal(true);
      });
    });
  });



  // nestedCtrl has no functionality so x it out for now
  xdescribe('nestedCtrl', function () {

    mockController = function ($controller) {
      controller = $controller("nestedCtrl", {

      });
    };

    beforeEach(angular.mock.inject(mockController));
  });


  // multipleCtrl has no functionality so x it out for now
  xdescribe('mulitpleCtrl', function () {

    mockController = function ($controller) {
      controller = $controller("multipleCtrl", {

      });
    };

    beforeEach(angular.mock.inject(mockController));
  });

});