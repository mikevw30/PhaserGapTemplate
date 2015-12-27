'use strict';

var pgApp = {
	initialize : function() {
		this.bindEvents();
	},
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady : function() {
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
angular.module('app', [ 'ngRoute', 'ngCookies' ]).config(config).run(run);

config.$inject = [ '$routeProvider', '$locationProvider' ];
function config($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller : 'HomeController',
		templateUrl : 'home/home.view.html',
		controllerAs : 'vm'
	})

	.when('/login', {
		controller : 'LoginController',
		templateUrl : 'login/login.view.html',
		controllerAs : 'vm'
	})

	.when('/register', {
		controller : 'RegisterController',
		templateUrl : 'register/register.view.html',
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

	.otherwise({
		redirectTo : '/login'
	});
}

run.$inject = [ '$rootScope', '$location', '$cookieStore', '$http' ];
function run($rootScope, $location, $cookieStore, $http) {
	// keep user logged in after page refresh
	$rootScope.globals = $cookieStore.get('globals') || {};
	if ($rootScope.globals.currentUser) {
		$http.defaults.headers.common['Authorization'] = 'Basic '
				+ $rootScope.globals.currentUser.authdata; // jshint
															// ignore:line
	}

	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		// redirect to login page if not logged in and trying to access a
		// restricted page
		var restrictedPage = $.inArray($location.path(), [ '/login', '/register', '/player', 'playlist' ]) === -1;
		var loggedIn = $rootScope.globals.currentUser;
		if (restrictedPage && !loggedIn) {
			$location.path('/login');
		}
	});
}
