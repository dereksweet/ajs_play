require('test/test_helper');
require('angular-resource');
require('app/assets/javascripts/angular/controllers/pages/forms.js');

describe('formsApp', function () {

  beforeEach(angular.mock.module("formsApp"));

  describe('mySimpleFormsCtrl', function () {

    mockController = function ($controller, $rootScope) {
      mockScope = $rootScope.$new();
      mockScope.sampleForm = { first_name: { $setDirty: sinon.spy() },
                               email: { $setDirty: sinon.spy() },
                               color: { $setDirty: sinon.spy() },
                               is_cool: { $setDirty: sinon.spy() } };

      mockUser = sinon.spy();
      mockUser.$save = sinon.spy();
      mockUser.get = stub().returns({ first_name: 'Derek',
                                      last_name: 'Sweet',
                                      $save: sinon.spy() });
      mockDataStore = { User: mockUser };

      mockDataShareService = { colors: ['blue', 'red', 'green'],
                               get_all_users: sinon.spy() };

      controller = $controller("mySimpleFormsCtrl", {
        $scope: mockScope,
        dataStore: mockDataStore,
        dataShareService: mockDataShareService
      });
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set $scope.user to an object', function () {
      expect(typeof(mockScope.user)).to.equal('object');
    });

    it('should set $scope.user.is_cool param to false', function () {
      expect(mockScope.user.is_cool).to.equal(false);
    });

    it('should set $scope.colors param to the dataShare services colors', function () {
      expect(mockScope.colors).to.include.members(mockDataShareService.colors);
    });

    describe('$scope.get_user()', function () {
      beforeEach(function () {
        mockScope.get_user();
      });

      it('should set $scope.user to the dataStore.User.get', function () {
        expect(mockScope.user.first_name).to.equal('Derek');
        expect(mockScope.user.last_name).to.equal('Sweet');
      });

      it('should set the sampleForm fields dirty', function () {
        expect(mockScope.sampleForm.email.$setDirty.called).to.equal(true);
        expect(mockScope.sampleForm.color.$setDirty.called).to.equal(true);
        expect(mockScope.sampleForm.is_cool.$setDirty.called).to.equal(true);
      });

      it('should set showLoadSuccessMessage true', function () {
        expect(mockScope.showLoadSuccessMessage).to.equal(true);
      });
    });

    describe('$scope.submit_form()', function () {
      it('should set firstNameInvalid false when first name is valid', function () {
        mockScope.sampleForm.first_name.$invalid = false;
        mockScope.submit_form();
        expect(mockScope.firstNameInvalid).to.equal(false);
      });

      it('should set firstNameInvalid true when first name is invalid', function () {
        mockScope.sampleForm.first_name.$invalid = true;
        mockScope.submit_form();
        expect(mockScope.firstNameInvalid).to.equal(true);
      });

      it('should set emailInvalid false when email is valid', function () {
        mockScope.sampleForm.email.$invalid = false;
        mockScope.submit_form();
        expect(mockScope.emailInvalid).to.equal(false);
      });

      it('should set emailInvalid true when email is invalid', function () {
        mockScope.sampleForm.email.$invalid = true;
        mockScope.submit_form();
        expect(mockScope.emailInvalid).to.equal(true);
      });

      it('should set colorInvalid false when color is valid', function () {
        mockScope.sampleForm.color.$invalid = false;
        mockScope.submit_form();
        expect(mockScope.colorInvalid).to.equal(false);
      });

      it('should set colorInvalid true when color is invalid', function () {
        mockScope.sampleForm.color.$invalid = true;
        mockScope.submit_form();
        expect(mockScope.colorInvalid).to.equal(true);
      });

      it('should not call user.save if the form is not valid', function () {
        mockScope.sampleForm.$valid = false;
        mockScope.user.$save = sinon.spy();
        mockScope.submit_form();
        expect(mockScope.user.$save.called).to.equal(false);
      });

      it('should call user.save if the form is valid', function () {
        mockScope.sampleForm.$valid = true;
        mockScope.user.$save = sinon.stub().returns({ then: sinon.stub() });
        mockScope.submit_form();
        expect(mockScope.user.$save.called).to.equal(true);
      })
    });

    describe('myModalFormsCtrl', function () {

      mockController = function ($controller, $rootScope) {
        rootScope = $rootScope;
        mockScope = $rootScope.$new();

        mockUser = sinon.spy();
        mockUser.$save = sinon.spy();
        mockUser.get = stub().returns({ first_name: 'Derek',
                                        last_name: 'Sweet',
                                        $save: sinon.spy() });
        mockUser.query = stub().returns([{ first_name: 'Derek',
                                        last_name: 'Sweet',
                                        $save: sinon.spy() }]);
        mockDataStore = { User: mockUser };

        mockDataShareService = {
          colors: ['blue', 'red', 'green'],
          get_all_users: sinon.spy()
        };

        mock_$ = sinon.stub();
        mockModal = { foundation: sinon.spy() };
        mock_$.withArgs('#modal__form').returns(mockModal);
        global.$ = mock_$;

        controller = $controller("myModalFormsCtrl", {
          $scope: mockScope,
          dataStore: mockDataStore,
          dataShareService: mockDataShareService
        });
      };

      beforeEach(angular.mock.inject(mockController));

      it('should set form_template', function () {
        expect(mockScope.form_template).to.equal('pages/forms/form.html');
      });

      it('should set $scope.colors param to the dataShare services colors', function () {
        expect(mockScope.colors).to.include.members(mockDataShareService.colors);
      });

      it('should set the modal object through jQuery', function() {
        expect(modal).to.equal(mockModal);
      });

      it('should fire the get_all_users method when the "get_all_user" event fires', function () {
        getAllUsersSpy = sinon.spy(mockScope, 'get_all_users');
        rootScope.$broadcast('get_all_users');
        expect(getAllUsersSpy.called).to.equal(true);
      });

      describe('$scope.get_all_users()', function () {
        beforeEach(function () {
          mockScope.get_all_users();
        });

        it('should set users to the results of the dataStore User model', function () {
          expect(mockScope.users).to.equal(mockUser.query(mockModal));
        });
      });

      describe('$scope.openModal()', function () {
        beforeEach(function () {
          mockScope.openModal();
        });

        it('should tell foundation to open the modal', function () {
          expect(mockModal.foundation.calledWith('reveal', 'open')).to.equal(true);
        });
      });

      describe('$scope.closeModal()', function () {
        beforeEach(function () {
          mockScope.closeModal();
        });

        it('should tell foundation to close the modal', function () {
          expect(mockModal.foundation.calledWith('reveal', 'close')).to.equal(true);
        });
      });

      describe('$scope.edit_user()', function () {
        it('should call the dataStore.User.get for the first name passed in', function () {
          mockScope.edit_user('Derek');
          expect(mockUser.get.calledWith({ id: 'Derek' })).to.equal(true);
        });

        it('should call openModal()', function () {
          openModalSpy = sinon.spy(mockScope, 'openModal');
          mockScope.edit_user('Derek');
          expect(openModalSpy.called).to.equal(true);
        });
      });

      describe('$scope.update_user()', function () {
        it('should try to save the modal_user', function () {
          mockScope.modal_user = {};
          mockScope.modal_user.$save = sinon.stub().returns({ then: sinon.stub() });
          mockScope.update_user();
          expect(mockScope.modal_user.$save.called).to.equal(true);
        });
      });

      describe('$scope.delete_user()', function () {
        it('should try to remove the modal_user', function () {
          mockScope.modal_user = {};
          mockScope.modal_user.$remove = sinon.stub().returns({ then: sinon.stub() });
          mockScope.delete_user();
          expect(mockScope.modal_user.$remove.called).to.equal(true);
        });
      });
    });
  });
});
