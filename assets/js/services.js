angular.module('sikre.services', [])

  .factory('sikreAPIservice', function ($http) {
    //var mainAPIUrl = 'https://api.sikr.io/v1/';
    var sikreAPI = {};

    /* GROUPS */
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

    sikreAPI.createGroup = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'groups/',
        data: data
      });
    };

    sikreAPI.saveGroup = function (data, groupId) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'groups/' + groupId,
        data: data
      });
    };

    sikreAPI.deleteGroup = function (groupId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'groups/' + groupId
      });
    };

    /* ITEMS */
    sikreAPI.getItemsbyGroup = function (groupId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items?group=' + groupId
      });
    };

    sikreAPI.getItems = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/'
      });
    };

    sikreAPI.getItem = function (itemId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/' + itemId
      });
    };

    sikreAPI.createItem = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'items/',
        data: data
      });
    };

    sikreAPI.saveItem = function (data, itemId) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'items/' + itemId,
        data: data
      });
    };

    sikreAPI.deleteItem = function (itemId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'items/' + itemId,
      });
    };

    /* SERVICES */
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

    sikreAPI.createService = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'services/',
        data: data
      });
    };

    sikreAPI.saveService = function (data, serviceId) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'services/' + serviceId,
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
