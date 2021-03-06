require('test/test_helper');
require('angular-utils-pagination');
require('angular-resource');
require('app/assets/javascripts/angular/controllers/pages/pagination.controller.js');

describe('paginationApp', function () {

  beforeEach(angular.mock.module("paginationApp"));

  describe('PaginationController', function () {

    mockController = function ($controller) {
      mockQuery = sinon.stub();
      mockQuery.withArgs({ page: 1 }).returns(['Country1', 'Country2']);
      mockQuery.withArgs({ page: 2 }).returns(['Country3', 'Country4']);
      mockDataStore = { Country: { query: mockQuery } };

      mock_$ = sinon.stub();
      mockWidth = sinon.stub().returns(bodyWidth || 1);
      mock_$.withArgs('body').returns({ width: mockWidth });
      global.$ = mock_$;

      controller = $controller("PaginationController", {
        dataStore: mockDataStore
      });
    };

    describe('small screen sizes', function () {
      beforeEach(function() {
        bodyWidth = 375;
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set the pagination_size to 7', function () {
        expect(controller.pagination_size).to.equal(7);
      });
    });

    describe('non-small screen sizes', function () {
      beforeEach(function() {
        bodyWidth = 376;
      });

      beforeEach(angular.mock.inject(mockController));

      it('should set the pagination_size to 25', function () {
        expect(controller.pagination_size).to.equal(25);
      });
    });

    describe('all screen sizes', function () {
      beforeEach(angular.mock.inject(mockController));

      it('should set the currentPage to 1', function () {
        expect(controller.currentPage).to.equal(1);
      });

      describe('$scope.loadCountries', function () {
        it('should set the currentPage to the page passed in', function () {
          expect(controller.currentPage).to.equal(1);
          controller.loadCountries(2);
          expect(controller.currentPage).to.equal(2);
        });

        it('should set the countries appropriately for page 1', function () {
          controller.loadCountries(1);
          expected = ['Country1', 'Country2'];
          expect(controller.countries).to.include.members(expected);
        });

        it('should set the countries appropriately for page 2', function () {
          controller.loadCountries(2);
          expected = ['Country3', 'Country4'];
          expect(controller.countries).to.include.members(expected);
        });
      });
    });
  })
});
