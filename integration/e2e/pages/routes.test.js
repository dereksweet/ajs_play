var dateFormat = require('dateformat');

describe('routes', function () {
  beforeEach(function () {
    browser.get('http://ajs_play.dev/routes');
  });

  describe('ngRoute', function () {
    it('should be able to navigate through all the tabs', function () {
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Home');
      element(by.id('about_link')).click();
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('About');
      element(by.id('contact_link')).click();
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Contact');
      element(by.id('contact_learn_link')).click();
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Contact');
      element(by.id('contact_complain_link')).click();
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Contact');
      element(by.id('eager_link')).click();
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Eager');
      element(by.id('undefined_link')).click();
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Page Not Found');
    });
  });
});
