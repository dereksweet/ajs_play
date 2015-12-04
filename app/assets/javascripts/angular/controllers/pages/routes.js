var moduleName = "routesApp";

angular.module(moduleName, ['ngRoute']);

var routesConfig = function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: asset_paths['pages/routes/home.html'],
      controller: 'homeCtrl as vm'
    })

    .when('/about', {
      templateUrl: asset_paths['pages/routes/about.html'],
      controller: 'aboutCtrl as vm'
    })

    .when('/contact', {
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: 'contactCtrl as vm'
    })

    .when('/contact/:subject', {
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: 'contactCtrl as vm'
    })

    .when('/eager/:extra*', {
      templateUrl: asset_paths['pages/routes/eager.html'],
      controller: 'eagerCtrl as vm'
    })

    .otherwise({
      templateUrl: asset_paths['pages/routes/routeNotFound.html'],
      controller: 'notFoundCtrl as vm'
    });
};
routesConfig.$inject = ['$routeProvider'];
angular.module(moduleName).config(routesConfig);

var routesCtrl = function() {
  var vm = this;

  vm.active = 'home';
  vm.isActive = isActive;

  /////////////////////

  function isActive (page) {
    return this.active == page ? 'active' : '';
  }
};
angular.module(moduleName).controller('routesCtrl', routesCtrl);


var homeCtrl = function () {

};
homeCtrl.$inject = [];
angular.module(moduleName).controller('homeCtrl', homeCtrl);


var aboutCtrl = function () {

};
aboutCtrl.$inject = [];
angular.module(moduleName).controller('aboutCtrl', aboutCtrl);


var contactCtrl = function ($routeParams) {
  var vm = this;

  vm.showLearn = false;
  vm.showComplain = false;

  ////////////////////

  if ($routeParams['subject'] == 'learn') {
    vm.showLearn = true;
  } else if ($routeParams['subject'] == 'complain') {
    vm.showComplain = true;
  }
};
contactCtrl.$inject = ['$routeParams'];
angular.module(moduleName).controller('contactCtrl', contactCtrl);


var eagerCtrl = function ($routeParams) {
  var vm = this;

  vm.extra = $routeParams['extra'];
};
eagerCtrl.$inject = ['$routeParams'];
angular.module(moduleName).controller('eagerCtrl', eagerCtrl);


var notFoundCtrl = function ($location) {
  var vm = this;

  vm.attemptedLocation = $location.path();
};
notFoundCtrl.$inject = ['$location'];
angular.module(moduleName).controller('notFoundCtrl', notFoundCtrl);
