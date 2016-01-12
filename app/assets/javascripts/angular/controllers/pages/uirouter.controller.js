var moduleName = "uiRouterApp";

angular.module(moduleName, ['ui.router']);
angular.module(moduleName).config(stateConfig);
angular.module(moduleName).controller('uirouterCtrl', uirouterCtrl);
angular.module(moduleName).controller('HomeController', HomeController);
angular.module(moduleName).controller('AboutController', AboutController);
angular.module(moduleName).controller('ContactController', ContactController);
angular.module(moduleName).controller('NestedController', NestedController);
angular.module(moduleName).controller('NestedListController', NestedListController);
angular.module(moduleName).controller('MultipleController', MultipleController);




function stateConfig($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: asset_paths['pages/routes/home.html'],
      controller: "HomeController as vm",
      data: {
        name: 'home'
      }
    })
    .state('about', {
      url: "/about",
      templateUrl: asset_paths['pages/routes/about.html'],
      controller: "AboutController as vm",
      data: {
        name: 'about'
      }
    })
    .state('contact', {
      url: "/contact",
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: "ContactController as vm",
      data: {
        subject: '',
        name: 'contact'
      }
    })
    .state('contact_complain', {
      url: "/contact/complain",
      templateUrl: asset_paths['pages/routes/contact.html'],
      controller: "ContactController as vm",
      data: {
        subject: 'complain',
        name: 'contact_complain'
      }
    })
    .state('nested', {
      url: "/nested",
      controller: "NestedController as vm",
      templateUrl: asset_paths['pages/uirouter/nested.html'],
      data: {
        name: 'nested'
      }
    })
    .state('nested.list', {
      url: "/list",
      templateUrl: asset_paths['pages/uirouter/nested.list.html'],
      controller: "NestedListController as vm",
      data: {
        name: 'nested'
      }
    })
    .state('multiple', {
      url: "/multiple",
      controller: "MultipleController as vm",
      templateUrl: asset_paths['pages/uirouter/multiple.html'],
      data: {
        name: 'multiple'
      }
    })
    .state('multiple.state1', {
      data: {
        name: 'multiple'
      },
      views: {
        "viewA": { templateUrl: asset_paths['pages/uirouter/multiple.state1.viewA.html'] },
        "viewB": { templateUrl: asset_paths['pages/uirouter/multiple.state1.viewB.html'] }
      }
    })
    .state('multiple.state2', {
      data: {
        name: 'multiple'
      },
      views: {
        "viewA": { templateUrl: asset_paths['pages/uirouter/multiple.state2.viewA.html'] },
        "viewB": { templateUrl: asset_paths['pages/uirouter/multiple.state2.viewB.html'] }
      }
    });
}
stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];



function uirouterCtrl ($state) {
  var vm = this;

  vm.state = $state;
}
uirouterCtrl.$inject = ['$state'];




function HomeController () {

}
HomeController.$inject = [];




function AboutController () {

}
AboutController.$inject = [];




function ContactController ($state) {
  var vm = this;

  vm.showComplain = false;

  ////////////////////

  if ($state.current.data.subject == 'complain') {
    vm.showComplain = true;
  }
}
ContactController.$inject = ['$state'];




function NestedController ($state) {

}
NestedController.$inject = ['$state'];




function NestedListController () {
  var vm = this;

  vm.items = ["A", "List", "Of", "Items"];
}




function MultipleController ($state) {

}
MultipleController.$inject = ['$state'];
