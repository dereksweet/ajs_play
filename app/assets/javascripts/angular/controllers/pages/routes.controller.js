var moduleName = "routesApp";

angular.module(moduleName, ['ngRoute']);
angular.module(moduleName).config(routesConfig);
angular.module(moduleName).controller('RoutesController', RoutesController);
angular.module(moduleName).controller('HomeController', HomeController);
angular.module(moduleName).controller('AboutController', AboutController);
angular.module(moduleName).controller('ContactController', ContactController);
angular.module(moduleName).controller('EagerController', EagerController);
angular.module(moduleName).controller('NotFoundController', NotFoundController);




function routesConfig ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: asset_paths['pages/routes/home.html'],
      controller: 'HomeController as vm'
    })

    .when('/about', {
      templateUrl: asset_paths['pages/routes/about.html'],
      controller: 'AboutController as vm'
    })

    .when('/contact', {
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: 'ContactController as vm'
    })

    .when('/contact/:subject', {
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: 'ContactController as vm'
    })

    .when('/eager/:extra*', {
      templateUrl: asset_paths['pages/routes/eager.html'],
      controller: 'EagerController as vm'
    })

    .otherwise({
      templateUrl: asset_paths['pages/routes/routeNotFound.html'],
      controller: 'NotFoundController as vm'
    });
}
routesConfig.$inject = ['$routeProvider'];




function RoutesController () {
  var vm = this;

  vm.active = 'home';
  vm.isActive = isActive;

  /////////////////////

  function isActive (page) {
    return this.active == page ? 'active' : '';
  }
}




function HomeController () {

}
HomeController.$inject = [];




function AboutController () {

}
AboutController.$inject = [];




function ContactController ($routeParams) {
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
ContactController.$inject = ['$routeParams'];




function EagerController ($routeParams) {
  var vm = this;

  vm.extra = $routeParams['extra'];
}
EagerController.$inject = ['$routeParams'];




function NotFoundController ($location) {
  var vm = this;

  vm.attemptedLocation = $location.path();
}
NotFoundController.$inject = ['$location'];
