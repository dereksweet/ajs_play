angular.module(moduleName).filter('titleCase', titleCase);



function titleCase() {
  return function(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    });
  };
}
