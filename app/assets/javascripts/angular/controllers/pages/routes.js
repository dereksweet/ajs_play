var moduleName = "routesApp";

angular.module(moduleName, ['ngRoute']);

var routesConfig = function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: asset_paths['pages/routes/home.html'],
      controller: 'homeCtrl'
    })

    .when('/about', {
      templateUrl: asset_paths['pages/routes/about.html'],
      controller: 'aboutCtrl'
    })

    .when('/contact', {
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: 'contactCtrl'
    })

    .when('/contact/:subject', {
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: 'contactCtrl'
    })

    .when('/eager/:extra*', {
      templateUrl: asset_paths['pages/routes/eager.html'],
      controller: 'eagerCtrl'
    })

    .otherwise({
      templateUrl: asset_paths['pages/routes/routeNotFound.html'],
      controller: 'notFoundCtrl'
    });
};
routesConfig.$inject = ['$routeProvider'];
angular.module(moduleName).config(routesConfig);

var routesCtrl = function() {
  this.active = 'home';

  this.isActive = function isActive(page) {
    return this.active == page ? 'active' : '';
  };
};
angular.module(moduleName).controller('routesCtrl', routesCtrl);


var homeCtrl = function ($scope) {

};
homeCtrl.$inject = ['$scope'];
angular.module(moduleName).controller('homeCtrl', homeCtrl);


var aboutCtrl = function ($scope) {

};
aboutCtrl.$inject = ['$scope'];
angular.module(moduleName).controller('aboutCtrl', aboutCtrl);


var contactCtrl = function ($scope, $routeParams) {
  if ($routeParams['subject'] == 'learn') {
    $scope.showLearn = true;
  } else if ($routeParams['subject'] == 'complain') {
    $scope.showComplain = true;
  }
};
contactCtrl.$inject = ['$scope', '$routeParams'];
angular.module(moduleName).controller('contactCtrl', contactCtrl);


var eagerCtrl = function ($scope, $routeParams) {
  $scope.extra = $routeParams['extra'];
};
eagerCtrl.$inject = ['$scope','$routeParams'];
angular.module(moduleName).controller('eagerCtrl', eagerCtrl);


var notFoundCtrl = function ($scope, $location) {
  $scope.attemptedLocation = $location.path();
};
notFoundCtrl.$inject = ['$scope', '$location'];
angular.module(moduleName).controller('notFoundCtrl', notFoundCtrl);
