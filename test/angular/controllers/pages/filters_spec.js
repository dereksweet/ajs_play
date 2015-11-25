require('test/test_helper');
require('app/assets/javascripts/angular/controllers/pages/filters.js');

// Use timekeeper to freeze the Date so we can test it is being set properly
var tk = require('timekeeper');
var currentDate = new Date();

describe('filtersApp', function () {

  beforeEach(angular.mock.module("filtersApp"));

  describe('filtersCtrl', function () {

    mockController = function ($controller, $rootScope, $timeout) {
      // Freeze Date() to the current Date
      tk.freeze(currentDate);

      mockScope = $rootScope.$new();
      mockTimeout = $timeout;
      controller = $controller("filtersCtrl", {
        $scope: mockScope,
        $timeout: mockTimeout
      });
    };

    beforeEach(angular.mock.inject(mockController));

    afterEach(function () {
      // Unfreeze Date()
      tk.reset();
    });

    it('should set the current date', function () {
      expect(mockScope.currentDate).to.equal(currentDate);
    });

    it('should create the sampleData array', function() {
      expected = [123.65,89.325,23.453,45.66,67.80,23.454];
      expect(mockScope.sampleData).to.include.members(expected);
    });

    it('should create the myString string', function() {
      expect(mockScope.myString).to.equal('TestString');
    });

    it('should create the jsonObject object', function() {
      expected = JSON.stringify({ data1: 'blah', data2: 'blah!'});
      expect(JSON.stringify(mockScope.jsonObject)).to.equal(expected);
    });

    it('should fire an updateTime $timeout event', function() {
      var updateTimeSpy = sinon.spy(controller.updateTime);
      expect(updateTimeSpy.called);
      mockTimeout.flush();
    });
  })
});
