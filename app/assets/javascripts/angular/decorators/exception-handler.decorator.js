// This is ripped almost directly out of John Papa's style guide
// https://github.com/johnpapa/angular-styleguide#style-y110

angular
  .module(moduleName)
  .config(exceptionConfig);

exceptionConfig.$inject = ['$provide'];

function exceptionConfig($provide) {
  $provide.decorator('$exceptionHandler', extendExceptionHandler);
}

extendExceptionHandler.$inject = ['$delegate'];

function extendExceptionHandler($delegate, toastr) {
  return function(exception, cause) {
    $delegate(exception, cause);
    var errorData = {
      exception: exception,
      cause: cause
    };

    // Alert the error to the user.
    alert(exception);
  };
}