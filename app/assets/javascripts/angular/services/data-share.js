angular.module(moduleName).factory('dataShareService', dataShareService);



function dataShareService ($rootScope) {
  var sharedService = {
    colors: [
      {value: "red", label: "Red"},
      {value: "blue", label: "Blue"},
      {value: "yellow", label: "Yellow"}
    ],
    getAllUsers: getAllUsers
  };

  return sharedService;

  ///////////

  function getAllUsers() {
    $rootScope.$broadcast('getAllUsers');
  }
}
dataShareService.$inject = ['$rootScope'];
