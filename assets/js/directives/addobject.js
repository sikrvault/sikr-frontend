// This directive is meant to add the modal dialog and manage it

app.directive("modalDialog", function(){
    return {
        restrict: 'A',
        templateUrl: 'includes/add-object.html',
        controllerAs: 'addobject',
        controller: function($http, $scope) {
            $http.get('http://localhost:8080/v1/add')
            .success(function(data, status, headers, config) {
                alert("Data saved successfully.");
            })
            .error(function(data, status, headers, config) {
                alert("ERROR: Couldn't get the services list from the server.");
            });
        }
    };
});
