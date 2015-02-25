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

    sikreAPI.saveItem = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'items/',
        data: data
      });
    };

    return sikreAPI;
  });
