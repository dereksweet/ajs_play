describe('directives', function () {
  var dateFormat = require('dateformat');

  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('/directives');
  });

  describe('Simple Directives', function () {
    describe('ngModel directive', function () {
      it('should duplicate the text typed in below', function() {
        element(by.model('vm.boundinput')).sendKeys('testing 123');
        expect(element(by.id('boundinput_clone')).getText()).toEqual(' testing 123 ');
      });
    });

    describe('ngShow directive', function () {
      it('should show the text when the mathmatical expression equals 10', function() {
        element(by.model('vm.mathexpression')).sendKeys('2 * 5');
        expect(element(by.id('mathexpression_eql10')).getText()).toEqual('I appear when the expression is equal to 10!');
      });

      it('should not show the text when the mathmatical expression does not equal 10', function() {
        element(by.model('vm.mathexpression')).sendKeys('2 + 5');
        expect(element(by.id('mathexpression_eql10')).getText()).toEqual('');
      });
    });

    describe('ngClick directive', function () {
      it('should increase the count by 1 when you click the +1 button', function () {
        expect(element(by.id('count')).getText()).toEqual('0');
        element(by.id('plus_1')).click();
        expect(element(by.id('count')).getText()).toEqual('1');
      });

      it('should increase the count by 1 when you click the -1 button', function () {
        expect(element(by.id('count')).getText()).toEqual('0');
        element(by.id('minus_1')).click();
        expect(element(by.id('count')).getText()).toEqual('-1');
      });
    });

    describe('ngRepeat directive', function () {
      it('should add to the list of numbers when "Add an Item" is clicked', function () {
        expect(element(by.id('number_list')).getText()).toEqual('1, 2, 3');
        element(by.id('add_item_to_list')).click();
        expect(element(by.id('number_list')).getText()).toEqual('1, 2, 3, 4');
      });
    });
  });

  describe('Custom Directives', function () {
    describe('sweetShowHide directive', function () {
      it('should toggle the first message when the first toggle button is clicked', function () {
        expect(element.all(by.id('myMessage')).get(0).getText()).toEqual('');
        element.all(by.id('show_hide_toggle')).get(0).click();
        expect(element.all(by.id('myMessage')).get(0).getText()).toEqual('Shown 1 times');
        element.all(by.id('show_hide_toggle')).get(0).click();
        expect(element.all(by.id('myMessage')).get(0).getText()).toEqual('');
      });

      it('should toggle the second message when the second toggle button is clicked', function () {
        expect(element.all(by.id('myMessage')).get(1).getText()).toEqual('');
        element.all(by.id('show_hide_toggle')).get(1).click();
        expect(element.all(by.id('myMessage')).get(1).getText()).toEqual('Shown 1 times');
        element.all(by.id('show_hide_toggle')).get(1).click();
        expect(element.all(by.id('myMessage')).get(1).getText()).toEqual('');
      });

      it('should allow both copies of the directive to function independently of ther other', function () {
        element.all(by.id('show_hide_toggle')).get(0).click();
        element.all(by.id('show_hide_toggle')).get(0).click();
        element.all(by.id('show_hide_toggle')).get(0).click();
        expect(element.all(by.id('myMessage')).get(0).getText()).toEqual('Shown 2 times');

        element.all(by.id('show_hide_toggle')).get(1).click();
        element.all(by.id('show_hide_toggle')).get(1).click();
        element.all(by.id('show_hide_toggle')).get(1).click();
        element.all(by.id('show_hide_toggle')).get(1).click();
        element.all(by.id('show_hide_toggle')).get(1).click();
        expect(element.all(by.id('myMessage')).get(1).getText()).toEqual('Shown 3 times');
      });
    });

    describe('sweetCurrentTime directive', function () {
      it('have the current time displayed', function () {
        // Test against the previous 5 seconds to account for any delay. 5 is overkill
        var testDate = new Date();
        var dateOptions = [];
        var dateFormatString = "mmm d, yyyy h:MM:ss TT";
        dateOptions.push(dateFormat(testDate, dateFormatString));
        for (var i = 0; i < 5; i++) {
          testDate.setSeconds(testDate.getSeconds() - 1);
          dateOptions.push(dateFormat(testDate, dateFormatString));
        }

        expect(dateOptions).toContain(element(by.id('current_time')).getText());
      });
    });

    describe('sweetMakeBlue', function () {
      it('should color text text blue', function () {
        expect(element(by.id('make-blue')).all(by.tagName('span')).first().getCssValue('color')).toEqual('rgba(0, 0, 255, 1)');
      });
    });
  });
});
