angular.module('sikre.services', [])

  .factory('sikreAPIservice', function ($http) {
    //var mainAPIUrl = 'https://api.sikr.io/v1/';
    var sikreAPI = {};

    sikreAPI.getGroups = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'groups/'
      });
    };

    return sikreAPI;
  });
