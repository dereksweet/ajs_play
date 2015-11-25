require('test/test_helper');
require('ui-router');
require('app/assets/javascripts/angular/controllers/pages/uirouter.js');

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
      //expect(multipleState.data.name).to.equal('multiple');
    }));
  });

});