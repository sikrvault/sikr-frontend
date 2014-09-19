// This directive is meant to add the modal dialog and manage it

app.directive("modalDialog", function(){
    return {
        restrict: 'A',
        templateUrl: 'includes/add-item.html',
        controllerAs: 'additem',
        controller: function($http, $scope) {
            $http.get('http://localhost:8080/v1/add')
            .success(function(data, status, headers, config) {
                //$.notify("Data saved successfully", "success");
            })
            .error(function(data, status, headers, config) {
                $.notify("Can't access the API. Adding items is disabled", "error");
                // TODO: Decide if disabling the button or remove it completely
                $(".additem").addClass("disabled");
                $(".additem").prop("disabled", true);
                // This removes the button
                //$(".additem").remove();
            });
        }
    };
});

app.directive("addService", function(){
    return {
        restrict: 'A',
        templateUrl: 'includes/add-service.html',
        controllerAs: 'addobject',
        controller: function($http, $scope) {
            $http.get('http://localhost:8080/v1/add')
            .success(function(data, status, headers, config) {
                //$.notify("Data saved successfully", "success");
            })
            .error(function(data, status, headers, config) {
                $.notify("Can't access the API. Adding services is disabled", "error");
                // TODO: Decide if disabling the button or remove it completely
                $(".addobject").addClass("disabled");
                $(".addobject").prop("disabled", true);
                // This removes the button
                $(".addobject").remove();
            });
        }
    };
});
