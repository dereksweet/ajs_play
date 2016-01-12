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
  vm.evalExpression = evalExpression;

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
}
DirectivesController.$inject = ['$scope'];
