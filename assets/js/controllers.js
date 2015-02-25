angular.module('sikre.controllers', [])

  // We REALLY shouldn't be using rootScope for this...
  .controller('groupsController', function ($scope, sikreAPIservice) {

    sikreAPIservice.getGroups()
      .success(function (response) {
        $scope.groupList = response;
      })
      .error(function () {
        $.notify("Can't access the API to get the groups.", "error");
      });
  })

  .controller('LoginCtrl', function ($scope, $auth) {

    $scope.authenticate = function (provider) {
      $auth.authenticate(provider);
    };
  })

  .controller('LogoutCtrl', function ($scope, $auth) {

    $scope.logout = function () {
      $auth.logout();
      $.notify("You have been logged out", "error");
    };
  })

  .controller('addItem', function ($scope, sikreAPIservice) {

    /*
      Get the groups that belong to the user and populate the groupList
      variable so we can populate the dropdown.
    */
    sikreAPIservice.getGroups()
      .success(function (response) {
        $scope.groupList = response;
      })
      .error(function () {
        $.notify("Can't access the API to get the groups.", "error");
      });

    /*
      Create an update function that will post the form data back to the API.
      If successful notify the user and close the modal dialog, otherwise
      show an error message
    */
    $scope.update = function (item) {
      sikreAPIservice.saveItem(item)
        .success(function () {
          $.notify("Item saved successfully", "success");
          $('#addItem').foundation('reveal', 'close');
        })
        .error(function () {
          $.notify("Can't save the item", "error");
        });
    };

    /*
      Reset the contents of the form
    */
    $scope.reset = function () {
      $scope.item = {};
    };
  });
