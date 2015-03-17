angular.module('sikre.services', [])

  .factory('sikreAPIservice', function ($http) {
    //var mainAPIUrl = 'https://api.sikr.io/v1/';
    var sikreAPI = {};

    /* GROUPS */
    sikreAPI.getCategories = function () {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'categories/',
        cache: false
      });
    };

    sikreAPI.getCategory = function (categoryId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'categories/' + categoryId,
        cache: false
      });
    };

    sikreAPI.createCategory = function (data) {
      return $http({
        method: "POST",
        url: mainAPIUrl + 'categories/',
        data: data,
        cache: false
      });
    };

    sikreAPI.saveCategory = function (data, categoryId) {
      return $http({
        method: "PUT",
        url: mainAPIUrl + 'categories/' + categoryId,
        data: data,
        cache: false
      });
    };

    sikreAPI.deleteCategory = function (categoryId) {
      return $http({
        method: "DELETE",
        url: mainAPIUrl + 'categories/' + categoryId,
        cache: false
      });
    };

    /* ITEMS */
    sikreAPI.getItemsbyCategory = function (categoryId) {
      return $http({
        method: "GET",
        url: mainAPIUrl + 'items?category=' + categoryId,
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
