require('app/assets/javascripts/angular/filters/title-case.js');

var $filter;

describe('title-case filter', function () {
  beforeEach(function () {
    angular.mock.module(moduleName);

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('converts any string into title case', function () {
    var testString = "TiTle CASE is FoR SUckerz!";
    expect($filter('titleCase')(testString)).to.equal('Title Case Is For Suckerz!');
  });

});