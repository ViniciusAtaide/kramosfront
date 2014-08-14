'use strict';

angular.module('kleberApp')
  .factory('imovel', ['$resource','apiUrl', function ($resource, apiUrl) {
      return $resource(apiUrl+'imoveis/:id');
  }]);
