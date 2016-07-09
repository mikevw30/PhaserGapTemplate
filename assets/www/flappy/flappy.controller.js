(function () {
	'use strict';
	
	angular.module('app').controller('FlappyController', FlappyController);
	
	FlappyController.$inject = [];
	
	function FlappyController() {
		var vm = this;
        initController();

        function initController() {
        }
	}
})();