var moduleName = "uiRouterApp";

var uiRouterApp = angular.module(moduleName, ['ui.router']);

var uirouterCtrl = function($scope, $state) {
  $scope.state = $state;
};
uirouterCtrl.$inject = ['$scope', '$state'];
uiRouterApp.controller('uirouterCtrl', uirouterCtrl);


var homeCtrl = function ($scope) {

};
homeCtrl.$inject = ['$scope'];
uiRouterApp.controller('homeCtrl', homeCtrl);


var aboutCtrl = function ($scope) {

};
aboutCtrl.$inject = ['$scope'];
uiRouterApp.controller('aboutCtrl', aboutCtrl);


var contactCtrl = function ($scope, $state) {
  if ($state.current.data.subject == 'complain') {
    $scope.showComplain = true;
  }
};
contactCtrl.$inject = ['$scope', '$state'];
uiRouterApp.controller('contactCtrl', contactCtrl);

var nestedCtrl = function ($scope, $state) {

};
nestedCtrl.$inject = ['$scope', '$state'];
uiRouterApp.controller('nestedCtrl', nestedCtrl);

var multipleCtrl = function ($scope, $state) {

};
multipleCtrl.$inject = ['$scope', '$state'];
uiRouterApp.controller('multipleCtrl', multipleCtrl);



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
        controller: homeCtrl,
        data: {
          name: 'home'
        }
      })
      .state('about', {
        url: "/about",
        templateUrl: asset_paths['pages/routes/about.html'],
        controller: aboutCtrl,
        data: {
          name: 'about'
        }
      })
      .state('contact', {
        url: "/contact",
        templateUrl: asset_paths['pages/routes/contact.html'],
        controller: contactCtrl,
        data: {
          subject: '',
          name: 'contact'
        }
      })
      .state('contact_complain', {
        url: "/contact/complain",
        templateUrl: asset_paths['pages/routes/contact.html'],
        controller: contactCtrl,
        data: {
          subject: 'complain',
          name: 'contact_complain'
        }
      })
      .state('nested', {
        url: "/nested",
        controller: nestedCtrl,
        templateUrl: asset_paths['pages/uirouter/nested.html'],
        data: {
          name: 'nested'
        }
      })
      .state('nested.list', {
        url: "/list",
        templateUrl: asset_paths['pages/uirouter/nested.list.html'],
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        },
        data: {
          name: 'nested'
        }
      })
      .state('multiple', {
        url: "/multiple",
        controller: multipleCtrl,
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
uiRouterApp.config(stateConfig);
