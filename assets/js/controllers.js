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
    $scope.master = {};

    $scope.update = function (item) {
      $scope.master = angular.copy(item);
      sikreAPIservice.saveItem($scope.master)
        .success(function (response) {
          $.notify("Data saved successfully", "success");
        });
    };

    $scope.reset = function () {
      $scope.user = angular.copy($scope.master);
    };
  });
