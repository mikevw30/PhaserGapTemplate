'use strict';

angular.module('app', [ 'ngRoute']).config(config);

//angular.element(document).ready(function() {
//    angular.bootstrap(document, ['app']);
//  });

config.$inject = [ '$routeProvider', '$locationProvider' ];
function config($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller : 'HomeController',
		templateUrl : 'home/home.view.html',
		controllerAs : 'vm'
	})

	.when('/player', {
		controller : 'PlayerController',
		templateUrl : 'player/player.view.html',
		controllerAs : 'vm'
	})

	.when('/playlist', {
		controller : 'PlaylistController',
		templateUrl : 'playlist/playlist.view.html',
		controllerAs : 'vm'
	})
	
	.when('/songupdate/:id', {
		controller : 'SongUpdateController',
		templateUrl : 'songupdate/songupdate.view.html',
		controllerAs : 'vm'
	})

	.when('/addsong', {
		controller : 'AddSongController',
		templateUrl : 'addsong/addsong.view.html',
		controllerAs : 'vm'
	})
	
	.when('/flappy', {
		templateUrl : 'flappy/flappy.view.html',
	})
	
	.when('/tilemap', {
		templateUrl : 'tilemap/tilemap.view.html',
	})

	.otherwise({
		redirectTo : '/'
	});
}
