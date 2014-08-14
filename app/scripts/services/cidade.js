'use strict';

angular.module('kleberApp')
  .factory('cidade', ['$resource','apiUrl', function ($resource, apiUrl) {
      return $resource(apiUrl+'cidades/:id');
  }]);
