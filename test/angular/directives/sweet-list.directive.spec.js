require('test/test_helper.js');
require('app/assets/javascripts/angular/directives/sweet-list.directive');
require('app/assets/javascripts/angular/controllers/pages/directives.controller');

var $compile, $scope, $filter, $controller, $controllerProvider, $directiveElem;

describe('sweet-list directive', function () {
  beforeEach(function(){
    angular.mock.module(moduleName);

    inject(function(_$compile_, _$filter_, _$controller_, $rootScope){
      $compile = _$compile_;
      $filter = _$filter_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
    });

    var element = angular.element('<div sweet-list="products" list-property="price | currency"></div>');
    var compiledElement = $compile(element)($scope);
    $scope.$digest();
    $directiveElem = compiledElement;
  });

  it.only('shoud be true', function () {
    console.log($directiveElem.html());
    expect(true).to.equal(true);
  });
  //it('should display the current Date in the element text', function () {
  //  expect($directiveElem.text()).to.equal($filter('date')(currentDate, 'medium'));
  //});
  //
  //it('should keep the displayed date updated', function () {
  //  expect($directiveElem.text()).to.equal($filter('date')(currentDate, 'medium'));
  //  var newDate = new Date();
  //  newDate.setDate(currentDate.getDate() + 1);
  //  tk.travel(newDate);
  //  $scope.$digest();
  //  expect($directiveElem.text()).to.equal($filter('date')(newDate, 'medium'));
  //});
});
