'use strict';

var pgApp = {
	initialize : function() {
		this.bindEvents();
	},
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady : function() {
		$.support.cors=true;
		pgApp.receivedEvent('deviceready');
	},
	receivedEvent : function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	}
};
angular.module('app', [ 'ngRoute']).config(config);

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

	.otherwise({
		redirectTo : '/'
	});
}