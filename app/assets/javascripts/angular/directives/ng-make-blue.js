var ngMakeBlue = function () {
  return {
    scope: {},
    restrict: 'AE',
    transclude: true,
    template: '<span style="color:blue"><div ng-transclude></div></span>'
  };
};
angular.module(moduleName).directive('ngMakeBlue', ngMakeBlue);
