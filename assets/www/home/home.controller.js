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
        	 document.addEventListener("backbutton", function () { 
                 if (confirm('Afsluiten?')){
                     setTimeout( function() { navigator.app.exitApp(); });
                 }
                 else {
                     '';
                 }
             }, true);
	    }
    }
})();