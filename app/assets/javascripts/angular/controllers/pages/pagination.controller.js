var moduleName = "paginationApp";
var controllerName = "PaginationController";

angular.module(moduleName, ['angularUtils.directives.dirPagination', 'ngResource']);
angular.module(moduleName).controller(controllerName, PaginationController);




function PaginationController (dataStore) {
  var vm = this;

  vm.currentPage = 1;
  vm.pagination_size = $('body').width() > 375 ? 25 : 7;
  vm.loadCountries = loadCountries;

  ////////////////////

  function loadCountries (newPageNumber) {
    vm.currentPage = newPageNumber;
    vm.countries = dataStore.Country.query({ page: newPageNumber });
  }
}
PaginationController.$inject = ['dataStore'];
