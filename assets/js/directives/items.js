// This directive is meant to control the rendering of the items in the group

app.directive("itemList", function(){
    return {
        restrict: 'A',
        templateUrl: 'includes/items.html',
        controllerAs: 'items',
        controller: function($http, $scope) {
            $http.get('/items.json')
            .success(function(data, status, headers, config) {
                $scope.items = data.items;
            })
            .error(function(data, status, headers, config) {
                alert("something happened");
            });
        }
    };
});
