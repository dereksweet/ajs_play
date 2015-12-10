angular.module(moduleName).factory('dataStore', dataStore);



function dataStore ($resource) {
  var dataStore = {
    User: $resource(User.url, User.paramDefaults, User.actions, User.options),
    Country: $resource(Country.url, Country.paramDefaults, Country.actions, Country.options)
  };

  return dataStore;
}
dataStore.$inject = ['$resource'];
