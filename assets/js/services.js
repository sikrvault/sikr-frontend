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
        method: "PUT",
        url: mainAPIUrl + 'groups/'
      });
    };

    sikreAPI.deleteGroup = function (groupId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'groups/' + groupId
      });
    };

    sikreAPI.getItems = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/'
      });
    };

    sikreAPI.getItemsbyGroup = function (groupId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items?group=' + groupId
      });
    };

    sikreAPI.getItem = function (itemId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/' + itemId
      });
    };

    sikreAPI.saveItem = function (data) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'items/',
        data: data
      });
    };

    sikreAPI.deleteItem = function (itemId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'items/' + itemId,
      });
    };

    sikreAPI.getServices = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'services/'
      });
    };

    sikreAPI.getService = function (serviceId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'services/' + serviceId
      });
    };

    sikreAPI.saveService = function (data) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'services/',
        data: data
      });
    };

    sikreAPI.deleteService = function (serviceId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'services/' + serviceId
      });
    };

    return sikreAPI;
  });
