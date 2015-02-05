angular.module('sikre.controllers', [])
  .controller('itemsController', function ($scope, sikreAPI) {
    console.log("asdfasdf");
    sikreAPI.getItems().success(function (response) {
      console.log(response);
      console.log(response.items);
      $scope.itemList = response.items;
    });
  });
