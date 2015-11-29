exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['directives_spec.js'],
  rootElement: '[ng-app]'
};