angular.module(moduleName).filter('stripDashes', stripDashes);



function stripDashes () {
  return function(txt) {
    return txt.split('-').join(' ').replace(/\s\s+/g, ' ');;
  };
}
