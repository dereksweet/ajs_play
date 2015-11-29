beforeEach(function () {
  browser.ignoreSynchronization = true;
});

describe('Simple Directives', function () {
  describe('ngModel directive', function () {
    it('should duplicate the text typed in below', function() {
      browser.get('http://ajs_play.dev/directives');

      element(by.model('boundinput')).sendKeys('testing 123');
      expect(element(by.id('boundinput_clone')).getText()).toEqual(' testing 123 ');
    });
  });

  describe('ngShow directive', function () {
    it('should show the text when the mathmatical expression equals 10', function() {
      browser.get('http://ajs_play.dev/directives');

      element(by.model('mathexpression')).sendKeys('2 * 5');
      expect(element(by.id('mathexpression_eql10')).getText()).toEqual('I appear when the expression is equal to 10!');
    });

    it('should not show the text when the mathmatical expression does not equal 10', function() {
      browser.get('http://ajs_play.dev/directives');

      element(by.model('mathexpression')).sendKeys('2 + 5');
      expect(element(by.id('mathexpression_eql10')).getText()).toEqual('');
    });
  });
});