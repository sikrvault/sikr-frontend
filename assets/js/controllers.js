angular.module('sikre.controllers', [])

  .controller('itemsController', function ($scope, sikreAPIservice) {

    sikreAPIservice.getItems()
      .success(function (response) {
        $scope.itemList = response;
        $scope.serviceList = response.services;
      })
      .error(function(data, status, headers, config) {
        $.notify("Can't access the API to get the items.", "error");
      });
  })

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
  });
