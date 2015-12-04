var moduleName = "animateApp";
var controllerName = "animateCtrl";

angular.module(moduleName, ['ngAnimate']);
angular.module(moduleName).controller(controllerName, animateCtrl);




function animateCtrl () {
  var vm = this;

  vm.animate_on = false;
  vm.selected_person = "";
  vm.people = [
    { name: 'Derek Sweet', url: asset_paths['pages/animate/derek-sweet.html'] },
    { name: 'Kelsey Sweet', url: asset_paths['pages/animate/kelsey-sweet.html'] }
  ];
}
animateCtrl.$inject = [];
