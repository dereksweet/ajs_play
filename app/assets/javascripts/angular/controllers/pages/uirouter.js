var moduleName = "uiRouterApp";

angular.module(moduleName, ['ui.router']);

var uirouterCtrl = function ($state) {
  var vm = this;

  vm.state = $state;
};
uirouterCtrl.$inject = ['$state'];
angular.module(moduleName).controller('uirouterCtrl', uirouterCtrl);


var homeCtrl = function () {

};
homeCtrl.$inject = [];
angular.module(moduleName).controller('homeCtrl', homeCtrl);


var aboutCtrl = function () {

};
aboutCtrl.$inject = [];
angular.module(moduleName).controller('aboutCtrl', aboutCtrl);


var contactCtrl = function ($state) {
  var vm = this;

  if ($state.current.data.subject == 'complain') {
    vm.showComplain = true;
  }
};
contactCtrl.$inject = ['$state'];
angular.module(moduleName).controller('contactCtrl', contactCtrl);

var nestedCtrl = function ($state) {

};
nestedCtrl.$inject = ['$state'];
angular.module(moduleName).controller('nestedCtrl', nestedCtrl);

var nestedListCtrl = function() {
  var vm = this;

  vm.items = ["A", "List", "Of", "Items"];
};
angular.module(moduleName).controller('nestedListCtrl', nestedListCtrl);

var multipleCtrl = function ($state) {

};
multipleCtrl.$inject = ['$state'];
angular.module(moduleName).controller('multipleCtrl', multipleCtrl);



var stateConfig = function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
      .state('home', {
        url: "/",
        templateUrl: asset_paths['pages/routes/home.html'],
        controller: "homeCtrl as vm",
        data: {
          name: 'home'
        }
      })
      .state('about', {
        url: "/about",
        templateUrl: asset_paths['pages/routes/about.html'],
        controller: "aboutCtrl as vm",
        data: {
          name: 'about'
        }
      })
      .state('contact', {
        url: "/contact",
        templateUrl: asset_paths['pages/routes/contact.html'],
        controller: "contactCtrl as vm",
        data: {
          subject: '',
          name: 'contact'
        }
      })
      .state('contact_complain', {
        url: "/contact/complain",
        templateUrl: asset_paths['pages/routes/contact.html'],
        controller: "contactCtrl as vm",
        data: {
          subject: 'complain',
          name: 'contact_complain'
        }
      })
      .state('nested', {
        url: "/nested",
        controller: "nestedCtrl as vm",
        templateUrl: asset_paths['pages/uirouter/nested.html'],
        data: {
          name: 'nested'
        }
      })
      .state('nested.list', {
        url: "/list",
        templateUrl: asset_paths['pages/uirouter/nested.list.html'],
        controller: "nestedListCtrl as vm",
        data: {
          name: 'nested'
        }
      })
      .state('multiple', {
        url: "/multiple",
        controller: "multipleCtrl as vm",
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
};
stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
angular.module(moduleName).config(stateConfig);
