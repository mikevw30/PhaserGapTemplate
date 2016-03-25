(function () {
	'use strict';
	
	angular.module('app').controller('SongUpdateController', SongUpdateController);
	
	SongUpdateController.$inject = ['SongService', '$routeParams', '$location'];
	function SongUpdateController(SongService, $routeParams, $location) {
		
		var vm = this;
		vm.song = null; 

		vm.updateSong = updateSong;

		initController();
	
	    function initController() {
	    	loadCurrentSong();
	    };
		
	    function loadCurrentSong() {
	    	SongService.getSongById($routeParams.id)
	    		.then(function(result){
	    			vm.song = result;
	    		}
	    	);
	    };
	    
	    function updateSong() {
			SongService.updateSong(vm.song)
				.then(function (data){
					vm.song = data;
				}
			);
		};
	};
})();
