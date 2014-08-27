// This directive is meant to control the rendering of the items in the group

app.directive("itemList", function(){
    return {
        restrict: 'A',
        templateUrl: 'includes/items.html',
        controllerAs: 'items',
        controller: function($http, $scope) {
            //$http.get('/items.json')
            $http.get('http://127.0.0.1:8080/v1/items/')
            .success(function(data, status, headers, config) {
                $scope.items = data.items;
            })
            .error(function(data, status, headers, config) {
                $.notify("Can't access the API to get the items.", "error");
            });
        }
    };
});
