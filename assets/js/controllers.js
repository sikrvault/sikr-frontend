angular.module('sikre.controllers', [])

  // We REALLY shouldn't be using rootScope for this...
  .controller('groupsController', function ($scope, sikreAPIservice) {

    sikreAPIservice.getGroups()
      .success(function (response) {
        $scope.groupList = response;
      })
      .error(function(data, status, headers, config) {
        $.notify("Can't access the API to get the groups.", "error");
      });
  })

  .controller('LoginCtrl', function($scope, $auth) {

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  });

  .controller('LogoutCtrl', function($auth) {
    if (!$auth.isAuthenticated()) {
        return;
    }
    $auth.logout()
      .then(function() {
        $.notify("You have been logged out", "error");
      });
  });
