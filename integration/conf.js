exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['directives_spec.js'],
  rootElement: '[ng-app]',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'mobileEmulation': {
        'deviceName': 'Apple iPhone 6'
      },
      'args': ['--window-size=400,745']
    }
  },
  specs: [ 'e2e/helper.js', 'e2e/**/*.test.js']
};