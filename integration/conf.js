const HTTP_PORT = process.env.HTTP_PORT || '8100';
const HTTP_HOST = process.env.HTTP_HOST || 'localhost';
const BASE_URL = process.env.BASE_URL || ('http://' + HTTP_HOST + ':' + HTTP_PORT)

exports.config = {
  baseUrl: BASE_URL,
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
