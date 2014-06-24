// This directive is meant to return the tab data that was clicked

app.directive("services", function(){
    return {
        restrict: 'A',
        templateUrl: 'includes/services.html',
        controllerAs: 'service',
        controller: function($http, $scope) {
            $http.get('/services.json')
            .success(function(data, status, headers, config) {
                $scope.services = data.services;
            })
            .error(function(data, status, headers, config) {
                alert("something happened");
            });
        }
    };
});
