angular.module('sikre.services', [])

  .factory('sikreAPIservice', function ($http) {
    //var mainAPIUrl = 'https://api.sikr.io/v1/';
    var sikreAPI = {};

    // Return the service data for a specific service
    // sikreAPI.getService = function (serviceID) {
    //   return $http({
    //     method: "GET",
    //     url: mainAPIUrl + 'services/' + serviceID
    //   });
    // };

    // Return the list of items tha the user has access to
    sikreAPI.getItems = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/'
      });
    };

    return sikreAPI;
  });
