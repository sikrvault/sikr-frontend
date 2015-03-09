angular.module('sikre.services', [])

  .factory('sikreAPIservice', function ($http) {
    //var mainAPIUrl = 'https://api.sikr.io/v1/';
    var sikreAPI = {};

    /* GROUPS */
    sikreAPI.getGroups = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'groups/',
        cache: false
      });
    };

    sikreAPI.getGroup = function (groupId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'groups/' + groupId,
        cache: false
      });
    };

    sikreAPI.createGroup = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'groups/',
        data: data,
        cache: false
      });
    };

    sikreAPI.saveGroup = function (data, groupId) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'groups/' + groupId,
        data: data,
        cache: false
      });
    };

    sikreAPI.deleteGroup = function (groupId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'groups/' + groupId,
        cache: false
      });
    };

    /* ITEMS */
    sikreAPI.getItemsbyGroup = function (groupId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items?group=' + groupId,
        cache: false
      });
    };

    sikreAPI.getItems = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/',
        cache: false
      });
    };

    sikreAPI.getItem = function (itemId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items/' + itemId,
        cache: false
      });
    };

    sikreAPI.createItem = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'items/',
        data: data,
        cache: false
      });
    };

    sikreAPI.saveItem = function (data, itemId) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'items/' + itemId,
        data: data,
        cache: false
      });
    };

    sikreAPI.deleteItem = function (itemId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'items/' + itemId,
        cache: false
      });
    };

    /* SERVICES */
    sikreAPI.getServices = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'services/',
        cache: false
      });
    };

    sikreAPI.getService = function (serviceId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'services/' + serviceId,
        cache: false,
      });
    };

    sikreAPI.createService = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'services/',
        data: data,
        cache: false
      });
    };

    sikreAPI.saveService = function (data, serviceId) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'services/' + serviceId,
        data: data,
        cache: false
      });
    };

    sikreAPI.deleteService = function (serviceId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'services/' + serviceId,
        cache: false
      });
    };

    return sikreAPI;
  });
