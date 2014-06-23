app.directive("categoryLinks", function(){
    return {
        restrict: 'E',
        templateUrl: '.html',
        controllerAs: 'categories',
        controller: function() {
            this.tab = 1;

            this.isSet = function(checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function(setTab) {
                this.tab = setTab;
            };
        }
    };
});