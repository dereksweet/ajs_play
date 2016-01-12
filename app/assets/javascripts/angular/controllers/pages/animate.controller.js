var moduleName = "animateApp";
var controllerName = "AnimateController";

angular.module(moduleName, ['ngAnimate']);
angular.module(moduleName).controller(controllerName, AnimateController);




function AnimateController () {
  var vm = this;

  vm.animate_on = false;
  vm.selected_person = "";
  vm.people = [
    { name: 'Derek Sweet', url: asset_paths['pages/animate/derek-sweet.html'] },
    { name: 'Kelsey Sweet', url: asset_paths['pages/animate/kelsey-sweet.html'] }
  ];
}
AnimateController.$inject = [];
