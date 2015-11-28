require('test/test_helper.js');
require('app/assets/javascripts/angular/directives/ng-make-blue');

var $compile, $scope, $directiveElem;

describe('ng-make-blue directive', function () {
  beforeEach(function(){
    angular.mock.module(moduleName);

    inject(function(_$compile_, $rootScope){
      $compile = _$compile_;
      $scope = $rootScope.$new();
    });

    var element = angular.element('<ng-make-blue>This is blue</ng-make-blue>');
    var compiledElement = $compile(element)($scope);
    $scope.$digest();
    $directiveElem = compiledElement;
  });

  it('should make the text within the element blue', function () {
    var spanElement = $directiveElem.find('span');
    expect(spanElement.css('color')).to.equal('blue');
    expect($directiveElem.text()).to.equal('This is blue');
  });
});
