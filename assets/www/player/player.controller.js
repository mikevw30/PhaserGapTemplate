(function () {
	'use strict';
	
	angular.module('app').controller('PlayerController', PlayerController);
	
	PlayerController.$inject = ['UserService', 'SongService', '$rootScope'];
	
	function PlayerController(UserService, SongService, $rootScope) {
		var vm = this;
		vm.user = null;
	    
		vm.songs = [];
		vm.currentSong = null;
		
		initController();
	
	    function initController() {
	        loadCurrentUser();
	        getNextSongFromPlayList();
	    }
		
	    function loadCurrentUser() {
	        UserService.GetByUsername($rootScope.globals.currentUser.username)
	            .then(function (user) {
	                vm.user = user;
	            });
	    }
	    
	    function getNextSongFromPlayList(){
	    	SongService.getSong().then(function (result) {
	    		vm.songs = result;
	    	});
	    }
	    
	    $rootScope.upVote = function(){
	    	vm.user.upVotes++;
	    	updateSongVotes();
	    };
	    
	    $rootScope.downVote = function(){
	    	vm.user.downVotes++;
	    	updateSongVotes();
	    };
	    
	    function updateSongVotes(){
	    	vm.user.songVotes++;
	    	UserService.Update(vm.user).then(function (user) {
	    		loadCurrentUser();
	    	});
	    }
	   
	}
})();