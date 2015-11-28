require('test/test_helper.js');
require('app/assets/javascripts/angular/directives/ng-current-time');

// Use timekeeper to freeze the Date so we can test it is being set properly
var tk = require('timekeeper');
var currentDate = new Date();

var $compile, $scope, $filter, $directiveElem;

describe('ng-current-time directive', function () {
  beforeEach(function(){
    // Freeze Date() to the current Date
    tk.freeze(currentDate);

    angular.mock.module(moduleName);

    inject(function(_$compile_, _$filter_, $rootScope){
      $compile = _$compile_;
      $filter = _$filter_;
      $scope = $rootScope.$new();
    });

    var element = angular.element('<ng-current-time />');
    var compiledElement = $compile(element)($scope);
    $scope.$digest();
    $directiveElem = compiledElement;
  });

  afterEach(function () {
    // Unfreeze Date()
    tk.reset();
  });

  it('should display the current Date in the element text', function () {
    expect($directiveElem.text()).to.equal($filter('date')(currentDate, 'medium'));
  });

  it('should keep the displayed date updated', function () {
    expect($directiveElem.text()).to.equal($filter('date')(currentDate, 'medium'));
    var newDate = new Date();
    newDate.setDate(currentDate.getDate() + 1);
    tk.travel(newDate);
    $scope.$digest();
    expect($directiveElem.text()).to.equal($filter('date')(newDate, 'medium'));
  });
});
