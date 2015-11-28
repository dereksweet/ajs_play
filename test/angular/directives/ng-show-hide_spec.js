require('test/test_helper.js');
require('app/assets/javascripts/angular/directives/ng-show-hide');

var $compile, $scope, $directiveElem;

describe('ng-show-hide directive', function () {
  beforeEach(function(){
    angular.mock.module(moduleName);

    inject(function(_$compile_, $rootScope){
      $compile = _$compile_;
      $scope = $rootScope.$new();
    });

    var element = angular.element('<ng-show-hide />');
    var compiledElement = $compile(element)($scope);
    $scope.$digest();
    $directiveElem = compiledElement;
  });

  xit('should make the text within the element blue', function () {
    expect(true).to.equal(true);
  });
});
