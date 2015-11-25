var moduleName = "animateApp";
var controllerName = "animateCtrl";

var animateApp = angular.module(moduleName, ['ngAnimate']);

animateCtrl = function ($scope) {
  $scope.animate_on = false;

  $scope.people = [
    { name: 'Derek Sweet', url: asset_paths['pages/animate/derek-sweet.html'] },
    { name: 'Kelsey Sweet', url: asset_paths['pages/animate/kelsey-sweet.html'] }
  ];
  $scope.selected_person = "";
};
animateCtrl.$inject = ['$scope'];
animateApp.controller(controllerName, animateCtrl);