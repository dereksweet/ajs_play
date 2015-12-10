angular.module(moduleName).directive('sweetMakeBlue', sweetMakeBlue);



function sweetMakeBlue () {
  return {
    scope: {},
    restrict: 'E',
    transclude: true,
    template: '<span style="color:blue"><div ng-transclude></div></span>'
  };
}
