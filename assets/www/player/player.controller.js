(function () {
	'use strict';
	
	angular.module('app').controller('PlayerController', PlayerController);
	
	PlayerController.$inject = ['SongService', '$location'];
	
	function PlayerController(SongService, $location) {
		var vm = this;
	    
		vm.songs = [];
		vm.changeView = changeView;
		vm.deleteSong = deleteSong;
		
		initController();
	
	    function initController() {
	        getNextSongFromPlayList();
	    }
		
	    function getNextSongFromPlayList(){
	    	SongService.getAllSongs().then(function (result) {
	    		vm.songs = result;
	    	});
	    }
	    
	    function changeView(id){
	        $location.path('/songupdate/'+ id);
	    }
	    
	    function deleteSong(id){
	    	SongService.deleteSong(id).then(function (result) {
	    		getNextSongFromPlayList();
	    	});
	    	$location.path('/player');
	    }
	}
})();