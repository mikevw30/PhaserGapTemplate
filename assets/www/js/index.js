'use strict';

angular.module('app', [ 'ngRoute']).config(config);

//angular.element(document).ready(function() {
//    angular.bootstrap(document, ['app']);
//  });

config.$inject = [ '$routeProvider', '$locationProvider' ];
function config($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl : 'game/game.view.html',
		controllerAs : 'vm'
	})
	.otherwise({
		redirectTo : '/'
	});
}
