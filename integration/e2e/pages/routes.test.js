var dateFormat = require('dateformat');

describe('routes', function () {
  beforeEach(function () {
    browser.get('/routes');
  });

  describe('ngRoute', function () {
    // ngRoute seems to have issues with the elements not being loaded into the DOM super quick, so some browser.driver.sleep
    //   commands have been included after the nav link clicks to ensure that angular has enough time to finish before
    //   protractor tries to see if the header has changed. 100 milliseconds seems to be enough on my machine, if you
    //   experience any stale element errors while testing please let me know with a github issue.
    it('should be able to navigate through all the tabs', function () {
      expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Home');
      element(by.id('about_link')).click().then(function() {
        browser.driver.sleep(100);
        expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('About');
      });
      element(by.id('contact_link')).click().then(function() {
        browser.driver.sleep(100);
        expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Contact');
      });
      element(by.id('contact_learn_link')).click().then(function() {
        browser.driver.sleep(100);
        expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Contact');
      });
      element(by.id('contact_complain_link')).click().then(function() {
        browser.driver.sleep(100);
        expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Contact');
      });
      element(by.id('eager_link')).click().then(function() {
        browser.driver.sleep(100);
        expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Eager');
      });
      element(by.id('undefined_link')).click().then(function() {
        browser.driver.sleep(100);
        expect(element(by.id('routes_ng_view')).element(by.tagName('h1')).getText()).toEqual('Page Not Found');
      });
    });
  });
});
