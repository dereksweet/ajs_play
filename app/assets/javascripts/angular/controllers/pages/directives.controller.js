var moduleName = "directivesApp";
var controllerName = "DirectivesController";

angular.module(moduleName, []);
angular.module(moduleName).controller(controllerName, DirectivesController);




function DirectivesController ($scope) {
  var vm = this;

  vm.count = 0;
  vm.my_count = 3;
  vm.my_array = ['1','2','3'];
  vm.do_eval = false;
  vm.products = [
    { name: "Apples", price: 1.20 },
    { name: "Bananas", price: 2.42 },
    { name: "Pears", price: 2.03 }
  ];
  vm.evalExpression = evalExpression;
  vm.incrementPrices = incrementPrices;

  /////////////////////

  function evalExpression() {
    var myResult = false;

    if (vm.do_eval) {
      try {
        myResult = $scope.$eval(vm.mathexpression) == 10;
      }
      catch(exception) {
        vm.do_eval = false;
      }
    }

    return myResult;
  }

  function incrementPrices() {
    for (var i = 0; i < vm.products.length; i++) {
      vm.products[i].price++;
    }
  }
}
DirectivesController.$inject = ['$scope'];
