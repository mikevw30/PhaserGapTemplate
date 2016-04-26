(function () {
	'use strict';
	
	angular.module('app').controller('PlaylistController', PlaylistController);
	
	PlaylistController.$inject = ['UserService', '$location'];
	function PlaylistController(UserService, $location) {
		var vm = this;
		vm.user = null;
	    
		vm.updatePlayList = updatePlayList; 
		vm.toggleActive = toggleActive; 
		vm.getClass = getClass; 

		initController();
	
	    function initController() {
	        loadUser();
	    }
		
	    function loadUser() {
	        vm.user = UserService.getUser();
	    }
	    
	    function toggleActive(index){
	    	if (vm.user.playlist[index].active == 'true'){
	    		vm.user.playlist[index].active = 'false';
	    		$(this.target).removeClass('active');
	    	}
	    	else {
	    		vm.user.playlist[index].active = 'true';
	    		$(this.target).addClass('active');
	    	}
	    }
	    
	    function getClass(index){
	    	if (vm.user.playlist[index].active == 'true'){
	    		return 'list-group-item active';
	    	}
	    	else{
	    		return 'list-group-item';
	    	}
	    }
	    
	   function updatePlayList(){
		   UserService.updateUser(vm.user);
		   $location.path('/');
	   }; 
	};
})();
