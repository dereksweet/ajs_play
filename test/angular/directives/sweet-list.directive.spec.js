require('test/test_helper.js');
require('app/assets/javascripts/angular/directives/sweet-list.directive');

var $compile, $scope, $filter, $controller, $directiveElem;

describe('sweet-list directive', function () {
  beforeEach(function(){
    angular.mock.module(moduleName, function($controllerProvider) {
      $controllerProvider.register('DirectivesController', function() {
        this.products = [
          { name: "Apples", price: 1.20 },
          { name: "Bananas", price: 2.42 },
          { name: "Pears", price: 2.03 }
        ];

        this.incrementPrices = function() {
          for (var i = 0; i < this.products.length; i++) {
            this.products[i].price++;
          }
        }
      })
    });

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

  it('should set the html of the directive to the unordered list of products', function () {
    expect($directiveElem.html()).to.equal("<ul><li>$1.20</li><li>$2.42</li><li>$2.03</li></ul>");
  });

  it('should update the html when listed objects change', function () {
    $directiveElem.controller('sweetList').incrementPrices();
    $scope.$digest();
    expect($directiveElem.html()).to.equal("<ul><li>$2.20</li><li>$3.42</li><li>$3.03</li></ul>");
  });
});
