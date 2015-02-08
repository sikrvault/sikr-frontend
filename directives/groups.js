// This directive is meant to control the content that shows up in the left
// sidebar, in this case the groups and the tags

app.directive("groupTags", function(){
    return {
        restrict: 'E',
        templateUrl: 'includes/groups-tags.html',
        controllerAs: 'groupstags',
        controller: function($http, $scope) {
            $http.get('/test.json')
            .success(function(data, status, headers, config) {
                $scope.groups = data.groups;
                $scope.tags = data.tags;
            })
            .error(function(data, status, headers, config) {
                alert("something happened");
            });
        }
    };
});
