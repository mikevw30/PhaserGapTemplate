(function () {
	'use strict';
	
	angular.module('app').controller('AddSongController', AddSongController);
	
	AddSongController.$inject = ['SongService', '$location'];
	
	function AddSongController(SongService, $location) {
		var vm = this;
		
		vm.song = null;
		vm.addSong = addSong;
		
		initController();
	
	    function initController() {
	    	vm.song = {
						name : '',
						artist : '',
						album : '',
						year : '',
						upvotes : 0, 
						downvotes : 0
				  	  };
	    }
	    
	    function addSong(song){
	    	SongService.addSong(song).then(function () {
	    		console.log('addSong: '+song);
	    		window.alert('Song Added');
	    		changeView();
	    	});
	    }
	    
	    function changeView(){
	        $location.path('/');
	    }
	}
})();