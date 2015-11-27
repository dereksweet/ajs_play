angular.module(moduleName).filter('stripDashes', function () {
  return function(txt) {
    return txt.split('-').join(' ').replace(/\s\s+/g, ' ');;
  };
});
