angular.module('sikre.services', [])
    .factory('sikreAPIservice', function($http) {

        var mainAPIUrl = 'https://sikreapi.clione.io/v1/'
        var sikreAPI = {};

        sikreAPI.getServices = function(serviceID) {
            return $http({
                method: "JSONP",
                url: mainAPIUrl + 'services/' + serviceID
            })

            $http.get(mainAPIUrl + 'services/' + serviceId)
            .success(function(data, status, headers, config) {
                $scope.services = data.services;
            })
            .error(function(data, status, headers, config) {
                $.notify("Couldn't get the service data", "error");
            });
        }

        sikreAPI.getItems = function(itemID) {
            $http.get('http://localhost:8080/v1/services/' + serviceId)
            .success(function(data, status, headers, config) {
                $scope.services = data.services;
            })
            .error(function(data, status, headers, config) {
                $.notify("Couldn't get the service data", "error");
            });
        }


        ergastAPI.getDrivers = function() {
          return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
          });
        }

        ergastAPI.getDriverDetails = function(id) {
          return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
          });
        }

        ergastAPI.getDriverRaces = function(id) {
          return $http({
            method: 'JSONP',
            url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
          });
        }

        return ergastAPI;
    });
