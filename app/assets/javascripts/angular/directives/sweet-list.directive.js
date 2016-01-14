angular.module(moduleName).directive('sweetList', sweetList);



function sweetList () {
  var directive = {
    controller: 'DirectivesController',
    controllerAs: "vm",
    restrict: 'AE',
    link: linkFunc
  };

  return directive;

  ///////////////

  function linkFunc($scope, $element, $attrs, controller) {
    var data = controller[$attrs["sweetList"]];
    var propertyExpression = $attrs["listProperty"];

    if (angular.isArray(data)) {
      var listElem = angular.element("<ul>");
      $element.append(listElem);
      for (var i = 0; i < data.length; i++) {
        (function () {
          var itemElement = angular.element('<li>');
          listElem.append(itemElement);
          var index = i;
          var watcherFn = function (watchScope) {
            return watchScope.$eval(propertyExpression, data[index]);
          };
          $scope.$watch(watcherFn, function (newValue, oldValue) {
            itemElement.text(newValue);
          });
        }());
      }
    }
  }
}
sweetList.$inject = [];
