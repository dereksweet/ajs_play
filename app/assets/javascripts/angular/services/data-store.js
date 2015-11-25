var dataStore = function ($http, $resource) {
  var dataStore = {};

  dataStore.User = $resource(User.url, User.paramDefaults, User.actions, User.options);
  dataStore.Country = $resource(Country.url, Country.paramDefaults, Country.actions, Country.options);

  return dataStore;
};
dataStore.$inject = ['$http', '$resource'];

angular.module(moduleName).factory('dataStore', dataStore);
