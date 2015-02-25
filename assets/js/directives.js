angular.module('sikre.directives', [])
  .directive("serviceList", function ($timeout) {
    return {
      restrict: 'A',
      template: "<ng-include src='getTemplateUrl()'/>",
      replace: true,
      controllerAs: 'services',
      controller: function ($http, $scope) {

        $scope.getService = function (serviceId) {
          $http.get(mainAPIUrl + 'services/' + serviceId)
            .success(function (data, status) {
              $scope.services = data;
              $scope.lockedService = false;
              $timeout(function () {
                $scope.lockedService = true;
                $.notify("View time expired. Locking...", "info");
                $scope.getTemplateUrl();
              }, serviceTimeout);
            })
            .error(function (data, status) {
              $.notify("Couldn't get the service data", "error");
            });
        };

        $scope.getTemplateUrl = function () {
          if ($scope.lockedService) {
            return '';
          } else {
            return 'includes/services.html';
          }
        };
      },
    };
  })

  .directive("itemList", function ($timeout) {
    return {
      restrict: 'A',
      template: "<ng-include src='getTemplateUrl()'/>",
      replace: true,
      controllerAs: 'items',
      controller: function ($http, $scope, sikreAPIservice) {

        $scope.getItems = function (groupId) {
          sikreAPIservice.getItemsbyGroup(groupId)
            .success(function (data, status) {
              $scope.items = data;
              $scope.lockedItem = false;
              $timeout(function () {
                $scope.lockedItem = true;
                $.notify("View time expired. Locking...", "info");
                $scope.getTemplateUrl();
              }, itemTimeout);
            })
            .error(function (data, status) {
              $.notify("Couldn't get the item data", "error");
            });
        };

        $scope.getTemplateUrl = function () {
          if ($scope.lockedItem) {
            return '';
          } else {
            return 'includes/items.html';
          }
        };
      },
    };
  });
