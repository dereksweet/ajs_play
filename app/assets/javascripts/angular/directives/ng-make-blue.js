angular.module(moduleName).directive('ngMakeBlue', ngMakeBlue);



function ngMakeBlue () {
  return {
    scope: {},
    restrict: 'AE',
    transclude: true,
    template: '<span style="color:blue"><div ng-transclude></div></span>'
  };
}
