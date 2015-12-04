var dataShareService = function($rootScope) {
  var sharedService = {};

  sharedService.colors = [
    {value: "red", label: "Red"},
    {value: "blue", label: "Blue"},
    {value: "yellow", label: "Yellow"}
  ];

  sharedService.getAllUsers = function() {
    $rootScope.$broadcast('getAllUsers');
  };

  return sharedService;
};
dataShareService.$inject = ['$rootScope'];

angular.module(moduleName).factory('dataShareService', dataShareService);
