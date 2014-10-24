'use strict';

var slide =  ['$resource','apiUrl',function ($resource, apiUrl) {
  return $resource(apiUrl + 'slides/:id');
}];
