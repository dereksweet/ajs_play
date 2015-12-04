var moduleName = "paginationApp";
var controllerName = "paginationCtrl";

angular.module(moduleName, ['angularUtils.directives.dirPagination', 'ngResource']);

var paginationCtrl = function (dataStore) {
  var vm = this;
  vm.currentPage = 1;
  vm.pagination_size = $('body').width() > 375 ? 25 : 7;

  vm.loadCountries = function(newPageNumber) {
    vm.currentPage = newPageNumber;

    vm.countries = dataStore.Country.query({ page: newPageNumber });
  };
};
paginationCtrl.$inject = ['dataStore'];
angular.module(moduleName).controller(controllerName, paginationCtrl);
