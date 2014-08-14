'use strict';

angular.module('kleberApp')
  .factory('slide', ['$resource','apiUrl',function ($resource, apiUrl) {
    return $resource(apiUrl + 'slides/:id');
  }]);
