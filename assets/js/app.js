// Load the angular application
var app = angular.module('sikre', []);

// Load foundation JS
$(document).foundation();

// Okay, this is a big pile of shit. Apparently foundation and angularjs don't
// get along very well, so we have to fire again foundation after the angular
// application is finished rendering. Otherwise the navigations and accordions
// will stop working inside ng-repeat
app.run(function($timeout){
    $timeout(function() {
        $(document).foundation();
    }, 500);
});
