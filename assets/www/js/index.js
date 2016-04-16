'use strict';
var CordovaInit = function() {

	var onDeviceReady = function() {
		receivedEvent('deviceready');
	};

	var receivedEvent = function(event) {
		console.log('Start event received, bootstrapping application setup.');
		angular.bootstrap($('body'), ['app']);
	};

	this.bindEvents = function() {
		document.addEventListener('deviceready', onDeviceReady, false);
	};

	//If cordova is present, wait for it to initialize, otherwise just try to
	//bootstrap the application.
	if (window.cordova !== undefined) {
		console.log('Cordova found, wating for device.');
		this.bindEvents();
	} else {
		console.log('Cordova not found, booting application');
		receivedEvent('manual');
	}
};


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

	.otherwise({
		redirectTo : '/'
	});
}

$(function() {
	console.log('Bootstrapping!');
	new CordovaInit();
});