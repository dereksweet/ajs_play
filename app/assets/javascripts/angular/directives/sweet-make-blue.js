angular.module(moduleName).directive('sweetMakeBlue', sweetMakeBlue);



function sweetMakeBlue () {
  return {
    scope: {},
    restrict: 'AE',
    transclude: true,
    template: '<span style="color:blue"><div ng-transclude></div></span>'
  };
}
