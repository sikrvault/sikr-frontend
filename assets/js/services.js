angular.module('sikre.services', [])

  .factory('sikreAPIservice', function ($http) {

    var mainAPIUrl = 'https://sikreapi.clione.io/v1/';
    var sikreAPI = {};

    // Return the service data for a specific service
    sikreAPI.getServices = function (serviceID) {
      return $http({
        method: "JSONP",
        url: mainAPIUrl + 'services/' + serviceID
      });
    };

    // Return the list of items tha the user has access to
    sikreAPI.getItems = function () {
      console.log('mine!');
      return $http({
        method: "JSONP",
        url: mainAPIUrl + 'items/'
      });
    };

    return sikreAPI;
  });
