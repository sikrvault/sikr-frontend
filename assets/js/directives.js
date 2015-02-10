angular.module('sikre.directives', [])
  .directive("serviceList", function(){
    return {
      restrict: 'A',
      templateUrl: 'includes/services.html',
      controllerAs: 'services',
      controller: function($http, $scope) {
        $scope.getService = function(serviceId) {
          $http.get(mainAPIUrl + 'services/' + serviceId)
          .success(function(data, status, headers, config) {
              $scope.services = data;
          })
          .error(function(data, status, headers, config) {
              $.notify("Couldn't get the service data", "error");
          });
        };
      }
    };
});
