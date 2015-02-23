angular.module('sikre.controllers', [])

  .controller('itemsController', function ($scope, sikreAPIservice) {

  // We REALLY shouldn't be using rootScope for this...
  .controller('groupsController', function ($scope, $rootScope, sikreAPIservice) {

    sikreAPIservice.getGroups()
      .success(function (response) {
        $scope.groupList = response;
        $rootScope.groupName = response[0].name;
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
