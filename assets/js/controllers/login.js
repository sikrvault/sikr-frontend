// Login
app.controller('LoginCtrl', function($scope, $auth) {
    $scope.login = function() {
      $auth.login({ email: $scope.email, password: $scope.password });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
});
