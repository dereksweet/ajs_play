var moduleName = "paginationApp";
var controllerName = "paginationCtrl";

var paginationApp = angular.module(moduleName, ['angularUtils.directives.dirPagination', 'ngResource']);

paginationCtrl = function ($scope, dataStore) {
  $scope.currentPage = 1;
  $scope.pagination_size = $('body').width() > 375 ? 25 : 7;

  $scope.loadCountries = function(newPageNumber) {
    $scope.currentPage = newPageNumber;

    $scope.countries = dataStore.Country.query({ page: newPageNumber });
  };
};
paginationCtrl.$inject = ['$scope', 'dataStore'];
paginationApp.controller(controllerName, paginationCtrl);
