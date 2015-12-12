var myApp = angular.module('myApp', [ 'ngRoute' ]);

myApp.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(false);
	$routeProvider.when('/view1', {
		controller : 'mainController',
		templateUrl : 'frags/view1.html'
	}).when('/view2', {
		controller : 'mainController',
		templateUrl : 'frags/view2.html'
	}).otherwise({
		redirectTo : '/view1'
	});
});

var controllers = {};

controllers.mainController = function($scope) {
	$scope.customers = [ {
		name : 'Kyle Two',
		city : 'interlachen'
	}, {
		name : 'Andrew Three',
		city : 'keystone'
	}, {
		name : 'Mike One',
		city : 'gainesville'
	} ];
};

controllers.mainController2 = function($scope) {
	$scope.customers = [ {
		name : 'Kyle Two',
		city : 'interlachen'
	}, {
		name : 'Andrew Three',
		city : 'keystone'
	}, {
		name : 'Mike One',
		city : 'gainesville'
	} ];
};

myApp.controller(controllers);