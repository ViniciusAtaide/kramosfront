'use strict';

angular.module('kleberApp')
  .factory('bairro', ['$resource','apiUrl',function ($resource, apiUrl) {
    return $resource(apiUrl+'bairros/:id');
  }]);
