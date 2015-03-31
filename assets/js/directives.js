angular.module('sikre.directives', [])
  .directive("serviceList", function ($timeout) {
    /*
      serviceList [directive] - This directive populates the list of services
      inside an item, sunch as SSH keys, SSL certificates and service passwords.
      It works under the same premise as items. It shows the content with a
      timeout and then it removes it from the DOM
    */
    return {
      restrict: 'A',
      template: "<ng-include src='getTemplateUrl()'/>",
      replace: true,
      controllerAs: 'services',
      controller: function ($scope, sikreAPIservice) {

        $scope.getService = function (serviceId) {
          sikreAPIservice.getService(serviceId)
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
          $(document).foundation('reflow');
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

    /*
      itemsList [directive] - This directive populates the items list in the
      main content of the site, it contains a function called getTemplateUrl()
      that defines if the view is locked or not. After the itemTimeout timeout
      is expired the elements are removed from the DOM until the directive
      is called again.

      This function connects with two rootScope broadcasts, one for when the
      user creates a new item, and one for when the user deletes content,
      both are necessary to update the content, since the scopes are different.
    */
    return {
      restrict: 'A',
      template: "<ng-include src='getTemplateUrl()'/>",
      replace: true,
      controllerAs: 'items',
      controller: function ($http, $scope, $rootScope, sikreAPIservice) {

        $scope.getItems = function (categoryId) {
          /*
            getItems [directive scope] - This function queries the API through
            the sikreAPIservice and returns the necessary data to show the
            information, based on the category that the user wants to filter.
          */
          sikreAPIservice.getItemsbyCategory(categoryId)
            .success(function (data, status) {
              $scope.category_name = data.category_name;
              $scope.category_id = data.category_id;
              $scope.items = data.items;
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

        $scope.getAllItems = function () {
          /*
            getAllItems [directive scope] - This function is a copy of getItems
            but for when the user triggers the search. Instead of calling the
            category filter, we get all the items and return them to the user.
          */
          sikreAPIservice.getItems()
            .success(function (data) {
              $scope.category_name = data.category_name;
              $scope.category_id = data.category_id;
              $scope.items = data.items;
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
          /*
            getTemplateUrl [directive scope] - This funnction changes the
            template being loaded in the DOM based on the lockedItem variable
            that is set on the getItems and getAllItems timeout function.
          */
          if ($scope.lockedItem) {
            return '';
          } else {
            return 'includes/items.html';
          }
          $(document).foundation('reflow');
        };

        /* BROADCASTS */
        $scope.$on('updateItems', function (event, data) {
          $scope.getItems(data);
        });

        $scope.$on('deleteItem', function (event, data) {
          $scope.getItems(data);
        });
      },
    };
  });
