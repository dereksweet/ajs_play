angular.module(moduleName).directive('ngCurrentTime', ngCurrentTime);



function ngCurrentTime ($compile, $timeout) {
  return {
    scope: {},
    restrict: 'AE',
    template: "{{ myCurrentTime | date: 'medium'}}",
    link: function ($scope, $element) {
      $scope.myCurrentTime = new Date();

      updateTime = function() {
        $scope.myCurrentTime = new Date();
        $timeout(updateTime, 1000);
      };

      $timeout(updateTime, 1000);
    }
  };
}
ngCurrentTime.$inject = ['$compile', '$timeout'];
