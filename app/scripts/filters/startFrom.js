'use strict';

angular.module('kleberApp')
	.filter('startFrom', function () {
		return function (input, start) {
			return input.slice(start);
		};
	});
