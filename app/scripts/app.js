'use strict';

var config = ['$routeProvider',function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../static/front/views/main.html',
      controller: 'MainCtrl',
      resolve: MainCtrl.resolve
    })
    .when('/lista', {
      templateUrl: '../static/front/views/lista.html',
      controller: 'ListaCtrl',
      resolve: {
        imoveis: ListaCtrl.resolve.imoveis
      }
    })
    .when('/completos', {
      templateUrl: '../static/front/views/lista.html',
      controller: 'ListaCtrl',
      resolve: {
        imoveis: ListaCtrl.resolve.completos
      }
    })
    .when('/imovel/:id', {
      templateUrl: '../static/front/views/detalhe.html',
      controller: 'DetalheCtrl',
      resolve: {
        imovel: DetalheCtrl.resolve.imovel
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}];

// Angular loading modules
angular.module('kleberApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate'
]).
constant('apiUrl', '/api/').
constant('mediaUrl', '/media/').
factory('cidade', cidade).
factory('bairro', bairro).
factory('imovel', imovel).
factory('slide', slide).
controller('MainCtrl', MainCtrl).
controller('ListaCtrl', ListaCtrl).
controller('DetalheCtrl', DetalheCtrl).
controller('PaginacaoCtrl', PaginacaoCtrl).
controller('ModalInstanceCtrl', ModalInstanceCtrl).
filter('startFrom', startFrom).
config(config);

