// This directive is meant to add the modal dialog and manage it

app.directive("modalDialog", function(){
    return {
        restrict: 'A',
        templateUrl: 'includes/add-item.html',
        controllerAs: 'addobject',
        controller: function($http, $scope) {
            $http.get('http://localhost:8080/v1/add')
            .success(function(data, status, headers, config) {
                //$.notify("Data saved successfully", "success");
            })
            .error(function(data, status, headers, config) {
                $.notify("Can't access the API. We will disable the add functionality", "error");
                // TODO: Decide if disabling the button or remove it completely
                $(".additem").addClass("disabled");
                $(".additem").prop("disabled", true);
                // This removes the button
                //$(".additem").remove();
            });
        }
    };
});
