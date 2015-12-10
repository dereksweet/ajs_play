require('test/test_helper.js');
require('app/assets/javascripts/angular/filters/strip-dashes.filter.js');

var $filter;

describe('strip-dashes filter', function () {
  beforeEach(function () {
    angular.mock.module(moduleName);

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('strips dashes from the string given', function () {
    var testString = "Do----you-like---------dashes?";
    expect($filter('stripDashes')(testString)).to.equal('Do you like dashes?');
  });

});