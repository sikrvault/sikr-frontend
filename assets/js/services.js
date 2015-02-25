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

    sikreAPI.getGroup = function (groupId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'groups/' + groupId
      });
    };

    sikreAPI.saveGroup = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'groups/'
      });
    };

    sikreAPI.getItems = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/'
      })
    };

    sikreAPI.getItem = function (itemId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/' + itemId
      })
    };

    sikreAPI.saveItem = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'items/',
        data: data
      });
    };

    sikreAPI.getServices = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'services/'
      })
    };

    sikreAPI.getService = function (serviceId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'services/' + serviceId
      })
    };

    sikreAPI.saveService = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'services/',
        data: data
      });
    };

    return sikreAPI;
  });
