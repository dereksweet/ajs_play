describe('routes', function () {
  beforeEach(function () {
    browser.get('/forms');
  });

  describe('Simple and Modal Forms', function () {
    var createUser = function() {
      element(by.model('simpleVm.user.first_name')).sendKeys('Test');
      element(by.model('simpleVm.user.email')).sendKeys('test@test.com');
      element(by.model('simpleVm.user.color')).click();
      element.all(by.css('option[value="string:blue"]')).first().click();
      element(by.model('simpleVm.user.is_cool')).click();
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
      expect(element.all(by.repeater('user in modalVm.users').column('user.first_name')).getText()).not.toContain('Test');

      element(by.id('num_users')).getText().then(function (result) {
        var original_count = result;

        createUser();

        expect(element.all(by.repeater('user in modalVm.users').column('user.first_name')).getText()).toContain('Test');
        expect(element.all(by.repeater('user in modalVm.users').column('user.email')).getText()).toContain('test@test.com');
        expect(element(by.id('num_users')).getText()).toEqual((Number(original_count) + 1).toString());

        deleteUser();

        expect(element(by.id('num_users')).getText()).toEqual((Number(original_count)).toString());
        expect(element.all(by.repeater('user in modalVm.users').column('user.first_name')).getText()).not.toContain('Test');
      });
    });

    it('should allow me to edit a users details', function () {
      expect(element.all(by.repeater('user in modalVm.users').column('user.email')).getText()).not.toContain('test2@test.com');

      createUser();

      element(by.linkText('Test')).click();
      browser.driver.sleep(1000);
      element(by.model('modalVm.modal_user.email')).clear();
      element(by.model('modalVm.modal_user.email')).sendKeys('test2@test.com');
      element(by.css('input[value="Update"]')).click();
      browser.driver.sleep(1000);
      expect(element.all(by.repeater('user in modalVm.users').column('user.email')).getText()).toContain('test2@test.com');

      deleteUser();
    });

    it('should allow me to load a user in the simple form by first name', function () {
      createUser();

      element(by.model('simpleVm.user.first_name')).clear();
      element(by.model('simpleVm.user.email')).clear();

      element(by.model('simpleVm.user.first_name')).sendKeys('Test');
      element(by.css('input[value="Load by First Name"]')).click();
      browser.driver.sleep(1000);
      expect(element(by.model('simpleVm.user.email')).getAttribute('value')).toEqual('test@test.com');

      deleteUser();
    });
  });
});
