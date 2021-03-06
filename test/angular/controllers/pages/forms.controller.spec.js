require('test/test_helper');
require('angular-resource');
require('app/assets/javascripts/angular/controllers/pages/forms.controller.js');

describe('formsApp', function () {

  beforeEach(angular.mock.module("formsApp"));

  describe('SimpleFormsController', function () {

    mockController = function ($controller) {
      mockUser = sinon.spy();
      mockUser.$save = sinon.spy();
      mockUser.get = stub().returns({ first_name: 'Derek',
                                      last_name: 'Sweet',
                                      $save: sinon.spy() });
      mockDataStore = { User: mockUser };

      mockdataShare = { colors: ['blue', 'red', 'green'],
                               getAllUsers: sinon.spy() };

      controller = $controller("SimpleFormsController", {
        $scope: mockScope,
        dataStore: mockDataStore,
        dataShare: mockdataShare
      });

      controller.sampleForm = { first_name: { $setDirty: sinon.spy() },
        email: { $setDirty: sinon.spy() },
        color: { $setDirty: sinon.spy() },
        is_cool: { $setDirty: sinon.spy() } };
    };

    beforeEach(angular.mock.inject(mockController));

    it('should set $scope.user to an object', function () {
      expect(typeof(controller.user)).to.equal('object');
    });

    it('should set $scope.user.is_cool param to false', function () {
      expect(controller.user.is_cool).to.equal(false);
    });

    it('should set $scope.colors param to the dataShare services colors', function () {
      expect(controller.colors).to.include.members(mockdataShare.colors);
    });

    describe('$scope.getUser()', function () {
      beforeEach(function () {
        controller.getUser();
      });

      it('should set $scope.user to the dataStore.User.get', function () {
        expect(controller.user.first_name).to.equal('Derek');
        expect(controller.user.last_name).to.equal('Sweet');
      });

      it('should set the sampleForm fields dirty', function () {
        expect(controller.sampleForm.email.$setDirty.called).to.equal(true);
        expect(controller.sampleForm.color.$setDirty.called).to.equal(true);
        expect(controller.sampleForm.is_cool.$setDirty.called).to.equal(true);
      });

      it('should set showLoadSuccessMessage true', function () {
        expect(controller.showLoadSuccessMessage).to.equal(true);
      });
    });

    describe('$scope.submitForm()', function () {
      it('should set firstNameInvalid false when first name is valid', function () {
        controller.sampleForm.first_name.$invalid = false;
        controller.submitForm();
        expect(controller.firstNameInvalid).to.equal(false);
      });

      it('should set firstNameInvalid true when first name is invalid', function () {
        controller.sampleForm.first_name.$invalid = true;
        controller.submitForm();
        expect(controller.firstNameInvalid).to.equal(true);
      });

      it('should set emailInvalid false when email is valid', function () {
        controller.sampleForm.email.$invalid = false;
        controller.submitForm();
        expect(controller.emailInvalid).to.equal(false);
      });

      it('should set emailInvalid true when email is invalid', function () {
        controller.sampleForm.email.$invalid = true;
        controller.submitForm();
        expect(controller.emailInvalid).to.equal(true);
      });

      it('should set colorInvalid false when color is valid', function () {
        controller.sampleForm.color.$invalid = false;
        controller.submitForm();
        expect(controller.colorInvalid).to.equal(false);
      });

      it('should set colorInvalid true when color is invalid', function () {
        controller.sampleForm.color.$invalid = true;
        controller.submitForm();
        expect(controller.colorInvalid).to.equal(true);
      });

      it('should not call user.save if the form is not valid', function () {
        controller.sampleForm.$valid = false;
        controller.user.$save = sinon.spy();
        controller.submitForm();
        expect(controller.user.$save.called).to.equal(false);
      });

      it('should call user.save if the form is valid', function () {
        controller.sampleForm.$valid = true;
        controller.user.$save = sinon.stub().returns({ then: sinon.stub() });
        controller.submitForm();
        expect(controller.user.$save.called).to.equal(true);
      })
    });

    describe('ModalFormsController', function () {

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

        mockdataShare = {
          colors: ['blue', 'red', 'green'],
          getAllUsers: sinon.spy()
        };

        mock_$ = sinon.stub();
        mockModal = { foundation: sinon.spy() };
        mock_$.withArgs('#modal__form').returns(mockModal);
        global.$ = mock_$;

        controller = $controller("ModalFormsController", {
          $scope: mockScope,
          dataStore: mockDataStore,
          dataShare: mockdataShare
        });
      };

      beforeEach(angular.mock.inject(mockController));

      it('should set form_template', function () {
        expect(controller.form_template).to.equal('pages/forms/form.html');
      });

      it('should set $scope.colors param to the dataShare services colors', function () {
        expect(controller.colors).to.include.members(mockdataShare.colors);
      });

      it('should set the modal object through jQuery', function() {
        expect(modal).to.equal(mockModal);
      });

      it('should fire the getAllUsers method when the "getAllUsers" event fires', function () {
        getAllUsersSpy = sinon.spy(controller, 'getAllUsers');
        rootScope.$broadcast('getAllUsers');
        expect(getAllUsersSpy.called).to.equal(true);
      });

      describe('$scope.getAllUsers()', function () {
        beforeEach(function () {
          controller.getAllUsers();
        });

        it('should set users to the results of the dataStore User model', function () {
          expect(controller.users).to.equal(mockUser.query(mockModal));
        });
      });

      describe('$scope.openModal()', function () {
        beforeEach(function () {
          controller.openModal();
        });

        it('should tell foundation to open the modal', function () {
          expect(mockModal.foundation.calledWith('reveal', 'open')).to.equal(true);
        });
      });

      describe('$scope.closeModal()', function () {
        beforeEach(function () {
          controller.closeModal();
        });

        it('should tell foundation to close the modal', function () {
          expect(mockModal.foundation.calledWith('reveal', 'close')).to.equal(true);
        });
      });

      describe('$scope.editUser()', function () {
        it('should call the dataStore.User.get for the first name passed in', function () {
          controller.editUser('Derek');
          expect(mockUser.get.calledWith({ id: 'Derek' })).to.equal(true);
        });

        it('should call openModal()', function () {
          openModalSpy = sinon.spy(controller, 'openModal');
          controller.editUser('Derek');
          expect(openModalSpy.called).to.equal(true);
        });
      });

      describe('$scope.updateUser()', function () {
        it('should try to save the modal_user', function () {
          controller.modal_user = {};
          controller.modal_user.$save = sinon.stub().returns({ then: sinon.stub() });
          controller.updateUser();
          expect(controller.modal_user.$save.called).to.equal(true);
        });
      });

      describe('$scope.deleteUser()', function () {
        it('should try to remove the modal_user', function () {
          controller.modal_user = {};
          controller.modal_user.$remove = sinon.stub().returns({ then: sinon.stub() });
          controller.deleteUser();
          expect(controller.modal_user.$remove.called).to.equal(true);
        });
      });
    });
  });
});
