var moduleName = "formsApp";

angular.module(moduleName, ['ngResource']);

var mySimpleFormsCtrl = function (dataStore, dataShareService) {
  var vm = this;
  vm.user = new dataStore.User;
  vm.user.is_cool = false;
  vm.colors = dataShareService.colors;

  vm.reset_messages = function () {
    vm.showSubmitSuccessMessage = false;
    vm.showSubmitErrorMessage = false;
    vm.showLoadSuccessMessage = false;
    vm.showLoadErrorMessage = false;
  };

  vm.get_user = function () {
    vm.reset_messages();

    vm.user = dataStore.User.get( { id: vm.user.first_name} );

    vm.sampleForm.email.$setDirty();
    vm.sampleForm.color.$setDirty();
    vm.sampleForm.is_cool.$setDirty();

    vm.showLoadSuccessMessage = true;
  };

  vm.submit_form = function() {
    vm.reset_messages();

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
        dataShareService.get_all_users();
      });
    }
  }
};
mySimpleFormsCtrl.$inject = ['dataStore', 'dataShareService'];
angular.module(moduleName).controller('mySimpleFormsCtrl', mySimpleFormsCtrl);


var myModalFormsCtrl = function ($scope, dataStore, dataShareService) {
  var vm = this;
  vm.form_template = asset_paths['pages/forms/form.html'];
  vm.colors = dataShareService.colors;
  modal = $('#modal__form');

  $scope.$on('get_all_users', function() {
    vm.get_all_users();
  });

  vm.get_all_users = function () {
    vm.users = dataStore.User.query();
  };

  vm.openModal = function() {
    modal.foundation('reveal', 'open');
  };

  vm.closeModal = function() {
    modal.foundation('reveal', 'close');
  };

  vm.edit_user = function(first_name) {
    vm.modal_user = dataStore.User.get( { id: first_name} );

    vm.openModal();
  };

  vm.update_user = function() {
    vm.modal_user.$save().then(function() {
      vm.closeModal();
      vm.get_all_users();
    });
  };

  vm.delete_user = function() {
    vm.modal_user.$remove().then(function () {
      vm.closeModal();
      vm.get_all_users();
    });
  };
};
myModalFormsCtrl.$inject = ['$scope', 'dataStore', 'dataShareService'];
angular.module(moduleName).controller('myModalFormsCtrl', myModalFormsCtrl);