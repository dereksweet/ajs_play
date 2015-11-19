//process.env.NODE_PATH = require('path').resolve(__dirname, '..');

var jsdom = require('jsdom').jsdom;
var document = jsdom('<html><head><script></script></head><body></body></html>');
var window = document.defaultView;

global.jsdom = jsdom;
global.document = document;
global.window = window;

global.window.mocha = {};
//global.window.beforeEach = beforeEach;
//global.window.afterEach = afterEach;

require('angular/angular');
//require('angular-mocks');

global.angular = window.angular;

//global.inject = angular.mock.inject;
//global.ngModule = angular.mock.module;

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
