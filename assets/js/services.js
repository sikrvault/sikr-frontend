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

    // Return the list of items tha the user has access to
    sikreAPI.getItems = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/'
      });
    };

    // Return the list of items tha the user has access to
    sikreAPI.getItemsPerGroup = function (groupId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items?group=' + groupId
      });
    };

    return sikreAPI;
  });
