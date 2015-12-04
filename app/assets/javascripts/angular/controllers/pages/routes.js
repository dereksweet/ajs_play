var moduleName = "routesApp";

angular.module(moduleName, ['ngRoute']);
angular.module(moduleName).config(routesConfig);
angular.module(moduleName).controller('routesCtrl', routesCtrl);
angular.module(moduleName).controller('homeCtrl', homeCtrl);
angular.module(moduleName).controller('aboutCtrl', aboutCtrl);
angular.module(moduleName).controller('contactCtrl', contactCtrl);
angular.module(moduleName).controller('eagerCtrl', eagerCtrl);
angular.module(moduleName).controller('notFoundCtrl', notFoundCtrl);




function routesConfig ($routeProvider) {
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
}
routesConfig.$inject = ['$routeProvider'];




function routesCtrl () {
  var vm = this;

  vm.active = 'home';
  vm.isActive = isActive;

  /////////////////////

  function isActive (page) {
    return this.active == page ? 'active' : '';
  }
}




function homeCtrl () {

}
homeCtrl.$inject = [];




function aboutCtrl () {

}
aboutCtrl.$inject = [];




function contactCtrl ($routeParams) {
  var vm = this;

  vm.showLearn = false;
  vm.showComplain = false;

  ////////////////////

  if ($routeParams['subject'] == 'learn') {
    vm.showLearn = true;
  } else if ($routeParams['subject'] == 'complain') {
    vm.showComplain = true;
  }
}
contactCtrl.$inject = ['$routeParams'];




function eagerCtrl ($routeParams) {
  var vm = this;

  vm.extra = $routeParams['extra'];
}
eagerCtrl.$inject = ['$routeParams'];




function notFoundCtrl ($location) {
  var vm = this;

  vm.attemptedLocation = $location.path();
}
notFoundCtrl.$inject = ['$location'];
