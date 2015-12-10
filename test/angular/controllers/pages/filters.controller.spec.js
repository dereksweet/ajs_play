require('test/test_helper');
require('app/assets/javascripts/angular/controllers/pages/filters.controller.js');

// Use timekeeper to freeze the Date so we can test it is being set properly
var tk = require('timekeeper');
var currentDate = new Date();

describe('filtersApp', function () {

  beforeEach(angular.mock.module("filtersApp"));

  describe('filtersCtrl', function () {

    mockController = function ($controller) {
      // Freeze Date() to the current Date
      tk.freeze(currentDate);

      mockTimeout = sinon.spy();
      controller = $controller("filtersCtrl", {
        $timeout: mockTimeout
      });
    };

    beforeEach(angular.mock.inject(mockController));

    afterEach(function () {
      // Unfreeze Date()
      tk.reset();
    });

    it('should set the current date', function () {
      expect(controller.currentDate).to.equal(currentDate);
    });

    it('should create the sampleData array', function() {
      expected = [123.65,89.325,23.453,45.66,67.80,23.454];
      expect(controller.sampleData).to.include.members(expected);
    });

    it('should create the myString string', function() {
      expect(controller.myString).to.equal('TestString');
    });

    it('should create the jsonObject object', function() {
      expected = JSON.stringify({ data1: 'blah', data2: 'blah!'});
      expect(JSON.stringify(controller.jsonObject)).to.equal(expected);
    });

    it('should fire an updateTime $timeout event', function() {
      expect(mockTimeout.calledWith(controller.updateTime, 1000)).to.equal(true);
    });

    describe('this.updateTime()', function () {
      it('should update the currentDate', function () {
        expect(controller.currentDate).to.equal(currentDate);
        var newDate = new Date();
        newDate.setDate(currentDate.getDate() + 1);
        tk.travel(newDate);
        controller.updateTime();
        expect(controller.currentDate).to.equal(newDate);
      });

      it('should call itself again', function () {
        controller.updateTime();
        expect(mockTimeout.calledTwice).to.equal(true);
      });
    });
  })
});
