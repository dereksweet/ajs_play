angular.module(moduleName).directive('sweetCurrentTime', sweetCurrentTime);



function sweetCurrentTime ($timeout) {
  var directive = {
    scope: {},
    restrict: 'E',
    template: "{{ myCurrentTime | date: 'medium'}}",
    link: linkFunc
  };

  return directive;

  ///////////

  function linkFunc($scope, $element) {
    $scope.myCurrentTime = new Date();

    updateTime = function() {
      $scope.myCurrentTime = new Date();
      $timeout(updateTime, 1000);
    };

    $timeout(updateTime, 1000);
  }
}
sweetCurrentTime.$inject = ['$timeout'];
