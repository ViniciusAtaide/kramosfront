'use strict';

var cidade = ['$resource','apiUrl', function ($resource, apiUrl) {
  return $resource(apiUrl+'cidades/:id');
}];
