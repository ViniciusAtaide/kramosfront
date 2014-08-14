'use strict';

angular.module('kleberApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
]).

constant('apiUrl', '/api/').
constant('mediaUrl', '/media/')

.config(['$routeProvider',function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../static/front/views/main.html',
      controller: 'MainCtrl',
      resolve: {
        cidades: ['cidade','$q',function (cidade, $q) {
          var deferred = $q.defer();
          cidade.get(function(result) {
            deferred.resolve(result);
          });
          return deferred.promise;
        }],
        imoveis: ['imovel','$q',function (imovel, $q) {
          var deferred = $q.defer();
          imovel.get(function(result) {
            deferred.resolve(result);
          });
          return deferred.promise;
        }],
        slides: ['slide','$q',function (slide, $q) {
          var deferred = $q.defer();
          slide.get(function(result) {
            deferred.resolve(result);
          });
          return deferred.promise;
        }]
      }
    })
    .when('/lista', {
      templateUrl: '../static/front/views/lista.html',
      controller: 'ListaCtrl',
      resolve: {
        imoveis: ['imovel','$q',function(imovel, $q) {
          var deferred = $q.defer();
          imovel.get({'lancamento': ''}).$promise.then(function(result) {
            deferred.resolve(result);
          });
          return deferred.promise;
        }]
      }
    })
    .when('/completos', {
      templateUrl: '../static/front/views/lista.html',
      controller: 'ListaCtrl',
      resolve: {
        imoveis: ['imovel','$q',function(imovel, $q) {
          var deferred = $q.defer();
          imovel.get({'lancamento':true}).$promise.then(function(result) {
            deferred.resolve(result);
          });
          return deferred.promise;
        }]
      }
    })
    .when('/imovel/:id', {
      templateUrl: '../static/front/views/detalhe.html',
      controller: 'DetalheCtrl',
      resolve: {
        imovel: ['$route','imovel','$q',function($route, imovel, $q) {
          var deferred = $q.defer();
          imovel.get({id: $route.current.params.id}).$promise.then(function(result) {
            deferred.resolve(result);
          });
          return deferred.promise;
        }]
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}]);