angular.module(moduleName).factory('dataShare', dataShare);



function dataShare ($rootScope) {
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
dataShare.$inject = ['$rootScope'];
