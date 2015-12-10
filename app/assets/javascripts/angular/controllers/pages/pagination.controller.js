var moduleName = "paginationApp";
var controllerName = "paginationCtrl";

angular.module(moduleName, ['angularUtils.directives.dirPagination', 'ngResource']);
angular.module(moduleName).controller(controllerName, paginationCtrl);




function paginationCtrl (dataStore) {
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
paginationCtrl.$inject = ['dataStore'];
