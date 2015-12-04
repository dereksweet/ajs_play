var moduleName = "directivesApp";
var controllerName = "directivesCtrl";

angular.module(moduleName, []);

var directivesCtrl = function ($scope) {
  $scope.do_eval = false;

  $scope.evalExpression = function evalExpression() {
    var myResult = false;

    if ($scope.do_eval) {
      try {
        myResult = $scope.$eval($scope.mathexpression) == 10;
      }
      catch(exception) {
        $scope.do_eval = false;
      }
    }

    return myResult;
  };
};
directivesCtrl.$inject = ['$scope'];
angular.module(moduleName).controller(controllerName, directivesCtrl);
