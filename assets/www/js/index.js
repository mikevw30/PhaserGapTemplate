'use strict';

angular.module('app', [ 'ngRoute']).config(config);

config.$inject = [ '$routeProvider', '$locationProvider' ];
function config($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl : 'game/guess.html',
		controllerAs : 'vm'
	})
	.otherwise({
		redirectTo : '/'
	});
}
