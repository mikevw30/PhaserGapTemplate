(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope'];
    function HomeController($rootScope) {
        var vm = this;

        vm.exit = exit;
        
        initController();

        function initController() {
        }
        
        function exit(){
        	if(navigator.app){
                navigator.app.exitApp();
	        }else if(navigator.device){
	        	navigator.device.exitApp();
	        	window.close();
	        }
	    }
    }
})();