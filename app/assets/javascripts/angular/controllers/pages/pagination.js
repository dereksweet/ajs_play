var moduleName = "paginationApp";
var controllerName = "paginationCtrl";

angular.module(moduleName, ['angularUtils.directives.dirPagination', 'ngResource']);

var paginationCtrl = function ($scope, dataStore) {
  $scope.currentPage = 1;
  $scope.pagination_size = $('body').width() > 375 ? 25 : 7;

  $scope.loadCountries = function(newPageNumber) {
    $scope.currentPage = newPageNumber;

    $scope.countries = dataStore.Country.query({ page: newPageNumber });
  };
};
paginationCtrl.$inject = ['$scope', 'dataStore'];
angular.module(moduleName).controller(controllerName, paginationCtrl);
