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

    $scope.getgroups = function () {
      sikreAPIservice.getGroups()
        .success(function (response) {
          $scope.groupList = response;
        })
        .error(function () {
          $.notify("Can't access the API to get the groups.", "error");
        });
    };

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
          $('#addItem').foundation('reveal', 'close');
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
          $('#confirmGroupDelete').foundation('reveal', 'close');
        })
        .error(function () {
          $.notify("Can't delete group", "error");
        });
    };
  })

  .controller('ItemsCtrl', function ($scope, sikreAPIservice) {

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
          $.notify("Item created", "success");
          $scope.item = null;
          $('#addItem').foundation('reveal', 'close');
        })
        .error(function () {
          $.notify("Can't save the item", "error");
        });
    };

    $scope.saveitem = function (item) {
      sikreAPIservice.saveItem(item)
        .success(function () {
          $.notify("Item updated", "success");
        })
        .error(function () {
          $.notify("Can't save the item", "error");
        });
    };

    $scope.confirmdeleteitem = function (item) {
      $('#confirmItemDelete').foundation('reveal', 'open');
      $("#deleteitem").attr("ng-click", "deleteitem(" + item + ")");
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

  .controller('ServiceCtrl', function ($scope, sikreAPIservice) {

    $scope.getservices = function () {
      sikreAPIservice.getServices()
        .success(function (response) {
          $scope.serviceList = response;
        })
        .error(function () {
          $.notify("Can't access the API to get the services.", "error");
        });
    };

    $scope.getservice = function (service) {
      sikreAPIservice.getService(service)
        .success(function (response) {
          $scope.service = response;
        })
        .error(function () {
          $.notify("Can't get the service", "error");
        });
    };

    $scope.createservice = function (itemId) {
      $('#addObject').foundation('reveal', 'open');
    };

    $scope.addservice = function (service) {
      sikreAPIservice.createService(service)
        .success(function () {
          $.notify("Service created", "success");
          $scope.service = null;
          $('#addService').foundation('reveal', 'close');
        })
        .error(function () {
          $.notify("Can't save the service", "error");
        });
    };

    $scope.saveservice = function (service) {
      sikreAPIservice.saveService(service)
        .success(function () {
          $.notify("Service updated", "success");
        })
        .error(function () {
          $.notify("Can't save the service", "error");
        });
    };

    $scope.confirmdeleteservice = function (service) {
      $('#confirmServiceDelete').foundation('reveal', 'open', {
          success: function(data, item) {
              $("#deleteitem").attr("ng-click", "deleteitem(" + item + ")");
          },
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
  });
