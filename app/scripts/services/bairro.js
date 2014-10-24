'use strict';

var bairro = ['$resource','apiUrl',function ($resource, apiUrl) {
  return $resource(apiUrl+'bairros/:id');
}];
