describe('routes', function () {
  beforeEach(function () {
    browser.get('http://ajs_play.dev/forms');
  });

  describe('Simple and Modal Forms', function () {
    var createUser = function() {
      element(by.model('user.first_name')).sendKeys('Test');
      element(by.model('user.email')).sendKeys('test@test.com');
      element(by.model('user.color')).click();
      element.all(by.css('option[value="string:blue"]')).first().click();
      element(by.model('user.is_cool')).click();
      element(by.css('input[type="submit"]')).click();
      browser.driver.sleep(1000);
    };

    var deleteUser = function() {
      element(by.linkText('Test')).click();
      browser.driver.sleep(1000);
      element(by.linkText('Delete')).click();
      browser.driver.sleep(1000);
    };

    it('should create a user and have them appear in the list below, and then allow me to delete them', function () {
      expect(element.all(by.repeater('user in users').column('user.first_name')).getText()).not.toContain('Test');

      element(by.id('num_users')).getText().then(function (result) {
        var original_count = result;

        createUser();

        expect(element.all(by.repeater('user in users').column('user.first_name')).getText()).toContain('Test');
        expect(element.all(by.repeater('user in users').column('user.email')).getText()).toContain('test@test.com');
        expect(element(by.id('num_users')).getText()).toEqual((Number(original_count) + 1).toString());

        deleteUser();

        expect(element(by.id('num_users')).getText()).toEqual((Number(original_count)).toString());
        expect(element.all(by.repeater('user in users').column('user.first_name')).getText()).not.toContain('Test');
      });
    });
  });
});
