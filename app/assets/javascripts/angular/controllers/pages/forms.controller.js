var moduleName = "formsApp";

angular.module(moduleName, ['ngResource']);
angular.module(moduleName).controller('SimpleFormsController', SimpleFormsController);
angular.module(moduleName).controller('ModalFormsController', ModalFormsController);




function SimpleFormsController (dataStore, dataShare) {
  var vm = this;

  vm.user = new dataStore.User;
  vm.user.is_cool = false;
  vm.colors = dataShare.colors;
  vm.resetMessages = resetMessages;
  vm.getUser = getUser;
  vm.submitForm = submitForm;

  ///////////////////

  function resetMessages () {
    vm.showSubmitSuccessMessage = false;
    vm.showSubmitErrorMessage = false;
    vm.showLoadSuccessMessage = false;
    vm.showLoadErrorMessage = false;
  }

  function getUser () {
    vm.resetMessages();

    vm.user = dataStore.User.get( { id: vm.user.first_name} );

    vm.sampleForm.email.$setDirty();
    vm.sampleForm.color.$setDirty();
    vm.sampleForm.is_cool.$setDirty();

    vm.showLoadSuccessMessage = true;
  }

  function submitForm () {
    vm.resetMessages();

    vm.firstNameInvalid = false;
    vm.emailInvalid = false;
    vm.colorInvalid = false;

    if (vm.sampleForm.first_name.$invalid){
      vm.firstNameInvalid = true;
    }

    if (vm.sampleForm.email.$invalid){
      vm.emailInvalid = true;
    }

    if (vm.sampleForm.color.$invalid){
      vm.colorInvalid = true;
    }

    if (vm.sampleForm.$valid) {
      vm.user.$save().then(function() {
        vm.showSubmitSuccessMessage = true;
        dataShare.getAllUsers();
      });
    }
  }
}
SimpleFormsController.$inject = ['dataStore', 'dataShare'];


function ModalFormsController ($scope, dataStore, dataShare) {
  var vm = this;

  vm.form_template = asset_paths['pages/forms/form.html'];
  vm.colors = dataShare.colors;
  vm.getAllUsers = getAllUsers;
  vm.openModal = openModal;
  vm.closeModal = closeModal;
  vm.editUser = editUser;
  vm.updateUser = updateUser;
  vm.deleteUser = deleteUser;

  modal = $('#modal__form');

  ///////////////////////

  $scope.$on('getAllUsers', function() {
    vm.getAllUsers();
  });

  function getAllUsers () {
    vm.users = dataStore.User.query();
  }

  function openModal () {
    modal.foundation('reveal', 'open');
  }

  function closeModal () {
    modal.foundation('reveal', 'close');
  }

  function editUser (first_name) {
    vm.modal_user = dataStore.User.get( { id: first_name} );
    vm.openModal();
  }

  function updateUser () {
    vm.modal_user.$save().then(function() {
      vm.closeModal();
      vm.getAllUsers();
    });
  }

  function deleteUser () {
    vm.modal_user.$remove().then(function () {
      vm.closeModal();
      vm.getAllUsers();
    });
  }
}
ModalFormsController.$inject = ['$scope', 'dataStore', 'dataShare'];
