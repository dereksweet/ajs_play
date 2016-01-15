// Hack to make mocha tests still pass in angular 1.4.8
var jsdom = require('jsdom').jsdom;
global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.defaultView;
Node = window.Node;
