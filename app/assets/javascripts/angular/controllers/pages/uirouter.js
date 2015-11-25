var moduleName = "uiRouterApp";

var uiRouterApp = angular.module(moduleName, ['ui.router']);

var rootController = function($scope, $state) {
  $scope.state = $state;
};
rootController.$inject = ['$scope', '$state'];
uiRouterApp.controller('rootController', rootController);


var homeController = function ($scope) {

};
homeController.$inject = ['$scope'];
uiRouterApp.controller('homeController', homeController);


var aboutController = function ($scope) {

};
aboutController.$inject = ['$scope'];
uiRouterApp.controller('aboutController', aboutController);


var contactController = function ($scope, $state) {
  if ($state.current.data.subject == 'complain') {
    $scope.showComplain = true;
  }
};
contactController.$inject = ['$scope', '$state'];
uiRouterApp.controller('contactController', contactController);

var nestedController = function ($scope, $state) {

};
nestedController.$inject = ['$scope', '$state'];
uiRouterApp.controller('nestedController', nestedController);

var multipleController = function ($scope, $state) {
  $scope.alertState = function alertState(){
    alert($state.current.data.myName);
  }
};
multipleController.$inject = ['$scope', '$state'];
uiRouterApp.controller('multipleController', multipleController);



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
        controller: homeController,
        data: {
          name: 'home'
        }
      })
      .state('about', {
        url: "/about",
        templateUrl: asset_paths['pages/routes/about.html'],
        controller: aboutController,
        data: {
          name: 'about'
        }
      })
      .state('contact', {
        url: "/contact",
        templateUrl: asset_paths['pages/routes/contact.html'],
        controller: contactController,
        data: {
          subject: '',
          name: 'contact'
        }
      })
      .state('contact_complain', {
        url: "/contact/complain",
        templateUrl: asset_paths['pages/routes/contact.html'],
        controller: contactController,
        data: {
          subject: 'complain',
          name: 'contact_complain'
        }
      })
      .state('nested', {
        url: "/nested",
        controller: nestedController,
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
        controller: multipleController,
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
