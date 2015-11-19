//require('../../../../app/assets/javascripts/angular/controllers/pages/directives.js.erb');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Foobar', function() {
  describe('#sayHello()', function() {
    it('should return some text', function() {
      var foobar = {
        sayHello: function() {
          return 'Hello World!';
        }
      };

      assert(foobar.sayHello() === 'Hello World!');
    })
  })
});