var moduleName = "filtersApp";
var controllerName = "filtersCtrl";

angular.module(moduleName, []);

var filtersCtrl = function ($timeout) {
  var vm = this;
  vm.currentDate = new Date();
  vm.sampleData = [123.65,89.325,23.453,45.66,67.80,23.454];
  vm.myString = 'TestString';
  vm.jsonObject = {
    data1: 'blah',
    data2: 'blah!'
  };

  this.updateTime = function updateTime() {
    vm.currentDate = new Date();
    $timeout(updateTime, 1000);
  };

  $timeout(this.updateTime, 1000);
};
filtersCtrl.$inject = ['$timeout'];
angular.module(moduleName).controller(controllerName, filtersCtrl);
