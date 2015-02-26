angular.module('sikre.controllers', [])

  .controller('AuthCtrl', function ($scope, $auth) {

    $scope.authenticate = function (provider) {
      $auth.authenticate(provider);
    };

    $scope.logout = function () {
      $auth.logout();
      $.notify("You have been logged out", "error");
    };
  })

  .controller('GroupsCtrl', function ($scope, sikreAPIservice) {

    sikreAPIservice.getGroups()
      .success(function (response) {
        $scope.groupList = response;
      })
      .error(function () {
        $.notify("Can't access the API to get the groups.", "error");
      });

    $scope.update = function () {
      sikreAPIservice.getGroups()
        .success(function (response) {
          $scope.groupList = response;
        })
        .error(function () {
          $.notify("Can't access the API to get the groups.", "error");
        });
    };

    $scope.getgroup = function (group) {
      sikreAPIservice.getGroup(group)
        .success(function (response) {
          $scope.group = response;
        })
        .error(function () {
          $.notify("Can't get the group", "error");
        });
    };

    $scope.addgroup = function (group) {
      sikreAPIservice.createGroup(group)
        .success(function () {
          $.notify("Group saved", "success");
          $scope.group = null;
        })
        .error(function () {
          $.notify("Can't save the group", "error");
        });
    };

    $scope.savegroup = function (group) {
      sikreAPIservice.saveGroup(group)
        .success(function () {
          $.notify("Group saved", "success");
        })
        .error(function () {
          $.notify("Can't save the group", "error");
        });
    };

    $scope.deletegroup = function (group) {
      sikreAPIservice.deleteGroup(group)
        .success(function () {
          $.notify("Group deleted", "success");
        })
        .error(function () {
          $.notify("Can't delete group", "error");
        });
    };
  })

  .controller('ItemsCtrl', function ($scope, sikreAPIservice) {

    // sikreAPIservice.getItems()
    //   .success(function (response) {
    //     $scope.itemList = response;
    //   })
    //   .error(function () {
    //     $.notify("Can't access the API to get the items.", "error");
    //   });

    $scope.getitemgroups = function () {
      sikreAPIservice.getGroups()
        .success(function (response) {
          $scope.groupList = response;
        })
        .error(function () {
          $.notify("Can't access the API to get the groups.", "error");
        });
    };

    $scope.getitem = function (item) {
      sikreAPIservice.getItem(item)
        .success(function (response) {
          $scope.item = response;
        })
        .error(function () {
          $.notify("Can't get the item", "error");
        });
    };

    $scope.additem = function (item) {
      sikreAPIservice.createItem(item)
        .success(function () {
          $.notify("Item saved", "success");
          $scope.item = null;
        })
        .error(function () {
          $.notify("Can't save the item", "error");
        });
    };

    $scope.saveitem = function (item) {
      sikreAPIservice.saveItem(item)
        .success(function () {
          $.notify("Item saved", "success");
        })
        .error(function () {
          $.notify("Can't save the item", "error");
        });
    };

    $scope.deleteitem = function (item) {
      sikreAPIservice.deleteItem(item)
        .success(function () {
          $.notify("Item deleted", "success");
        })
        .error(function () {
          $.notify("Can't delete item", "error");
        });
    };
  })

  .controller('groupsController', function ($scope, sikreAPIservice) {

    sikreAPIservice.getGroups()
      .success(function (response) {
        $scope.groupList = response;
      })
      .error(function () {
        $.notify("Can't access the API to get the groups.", "error");
      });
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
