angular.module(moduleName).directive('ngShowHide', ngShowHide);



function ngShowHide () {
  return {
    scope: {},
    restrict: 'AE',
    templateUrl: asset_paths['angular/directives/showHide.html'],
    link: function ($scope, $element) {
      $scope.showMessage = false;
      $scope.showCount = 0;

      $scope.toggleMessage = function () {
        $scope.showMessage = !$scope.showMessage;

        if ($scope.showMessage) {
          $scope.showCount = $scope.showCount + 1;
        }

        var myContainer = $element.find('#myMessage');
        myContainer.html('Shown <b>' + $scope.showCount + '</b> times');
      }
    }
  };
}
ngShowHide.$inject = [];
