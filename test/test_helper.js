require('phantomjs');
//require('angular');

// Chai for assertions.
var chai = require('chai');
chai.use(require('chai-as-promised'));

global.assert = chai.assert;
global.expect = chai.expect;
global.should = chai.should();

// Sinon.JS for mocks, stubs and spies.
require('sinon-as-promised');

global.sinon = require('sinon');
//sinon.assert.expose(chai.assert, { prefix: '' });
global.stub = sinon.stub;
global.match = sinon.match;

/*beforeEach(function() {
  // Create a new sandbox before each test
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  // Cleanup the sandbox to remove all the stubs
  this.sinon.restore();
});*/