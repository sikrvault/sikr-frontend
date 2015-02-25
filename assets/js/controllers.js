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

    sikreAPIservice.getGroups()
      .success(function (response) {
        $scope.groupList = response;
      })
      .error(function () {
        $.notify("Can't access the API to get the groups.", "error");
      });

    $scope.update = function (item) {
      sikreAPIservice.saveItem(item)
        .success(function () {
          $.notify("Item saved successfully", "success");
        })
        .error(function () {
          $.notify("Can't save the item", "error");
        });
    };

    $scope.reset = function () {
      $scope.user = angular.copy($scope.master);
    };
  });
