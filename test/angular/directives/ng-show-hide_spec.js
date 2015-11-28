require('test/test_helper.js');
require('app/assets/javascripts/angular/directives/ng-show-hide');

var $compile, $scope, $directiveElem, $directiveScope;

describe('ng-show-hide directive', function () {
  beforeEach(function(){
    angular.mock.module(moduleName);

    inject(function(_$compile_, $rootScope, $templateCache){
      $compile = _$compile_;
      $scope = $rootScope.$new();
      var templateHtml = readSingleFile('app/assets/templates/angular/directives/showHide.html');
      $templateCache.put('angular/directives/showHide.html', templateHtml);
    });

    var element = angular.element('<ng-show-hide />');
    var compiledElement = $compile(element)($scope);
    $scope.$digest();
    $directiveElem = compiledElement;
    $directiveScope = $directiveElem.scope().$$childTail;
  });

  it('should show a toggle button', function () {
    var button = $directiveElem.find('button');
    expect(button.text()).to.be.equal('Toggle Message');
  });

  it('should default showMessage to false', function () {
    expect($directiveScope.showMessage).to.equal(false);
  });

  it('should default showCount to 0', function () {
    expect($directiveScope.showCount).to.equal(0);
  });

  describe('$scope.toggleMessage()', function (){
    it('should toggle showMessage', function () {
      expect($directiveScope.showMessage).to.equal(false);
      $directiveScope.toggleMessage();
      expect($directiveScope.showMessage).to.equal(true);
    });

    it('should increase showCount by 1', function () {
      expect($directiveScope.showCount).to.equal(0);
      $directiveScope.toggleMessage();
      expect($directiveScope.showCount).to.equal(1);
    });
  });
});
