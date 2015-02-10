angular.module('sikre.controllers', [])

  .controller('itemsController', function ($scope, sikreAPIservice) {

    sikreAPIservice.getItems().

      success(function (response) {
        $scope.itemList = response;
        $scope.serviceList = response.services;
      }).

      error(function(data, status, headers, config) {
        $.notify("Can't access the API to get the items.", "error");
      });

    // sikreAPIservice.getService().

    //   success(function (response) {
    //     $scope.services = response;
    //   }).

    //   error(function(data, status, headers, config) {
    //     $.notify("Can't access the API to get the items.", "error");
    //   });
  });
