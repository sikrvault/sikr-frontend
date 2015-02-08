angular.module('sikre.controllers', [])

  .controller('itemsController', function ($scope, sikreAPIservice) {

    sikreAPIservice.getItems().

      success(function (response) {
        $scope.itemList = response;
      }).

      error(function(data, status, headers, config) {
        $.notify("Can't access the API to get the items.", "error");
      });
  });
