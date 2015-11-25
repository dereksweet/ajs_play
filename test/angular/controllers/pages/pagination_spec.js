require('test/test_helper');
require('angular-utils-pagination');
require('angular-resource');
require('app/assets/javascripts/angular/controllers/pages/pagination.js');

describe('paginationApp', function () {

  beforeEach(angular.mock.module("paginationApp"));

  describe('paginationCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();

      mockQuery = sinon.stub();
      mockQuery.withArgs({ page: 1 }).returns(['Country1', 'Country2']);
      mockQuery.withArgs({ page: 2 }).returns(['Country3', 'Country4']);
      mockDataStore = { Country: { query: mockQuery } };

      mock_$ = sinon.stub();
      mockWidth = sinon.stub().returns(bodyWidth || 1);
      mock_$.withArgs('body').returns({ width: mockWidth });
      global.$ = mock_$;

      controller = $controller("paginationCtrl", {
        $scope: mockScope,
        dataStore: mockDataStore
      });
    };

    describe('small screen sizes', function () {
      beforeEach(function() {
        bodyWidth = 375;
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set the pagination_size to 7', function () {
        expect(mockScope.pagination_size).to.equal(7);
      });
    });

    describe('non-small screen sizes', function () {
      beforeEach(function() {
        bodyWidth = 376;
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set the pagination_size to 25', function () {
        expect(mockScope.pagination_size).to.equal(25);
      });
    });

    describe('all screen sizes', function () {
      beforeEach(angular.mock.inject(mockController));

      it('should set the currentPage to 1', function () {
        expect(mockScope.currentPage).to.equal(1);
      });

      describe('$scope.loadCountries', function () {
        it('should set the currentPage to the page passed in', function () {
          expect(mockScope.currentPage).to.equal(1);
          mockScope.loadCountries(2);
          expect(mockScope.currentPage).to.equal(2);
        });

        it('should set the countries appropriately for page 1', function () {
          mockScope.loadCountries(1);
          expected = ['Country1', 'Country2'];
          expect(mockScope.countries).to.include.members(expected);
        });

        it('should set the countries appropriately for page 2', function () {
          mockScope.loadCountries(2);
          expected = ['Country3', 'Country4'];
          expect(mockScope.countries).to.include.members(expected);
        });
      });
    });
  })
});
