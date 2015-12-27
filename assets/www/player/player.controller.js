(function () {
	'use strict';
	
	angular.module('app').controller('PlayerController', PlayerController);
	
	PlayerController.$inject = ['UserService', '$rootScope'];
	
	function PlayerController(UserService, $rootScope) {
		var vm = this;
		vm.user = null;
	    
		initController();
	
	    function initController() {
	        loadCurrentUser();
	    }
		
	    function loadCurrentUser() {
	        UserService.GetByUsername($rootScope.globals.currentUser.username)
	            .then(function (user) {
	                vm.user = user;
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