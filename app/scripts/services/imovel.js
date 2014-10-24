'use strict';



var imovel = ['$resource','apiUrl', function ($resource, apiUrl) {
  return $resource(apiUrl+'imoveis/:id');
}];
