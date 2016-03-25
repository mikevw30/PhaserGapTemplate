(function () {
	'use strict';
	
	angular.module('app').controller('PlaylistController', PlaylistController);
	
	PlaylistController.$inject = ['UserService', '$rootScope'];
	function PlaylistController(UserService, $rootScope) {
		var vm = this;
		vm.user = null;
	    
		vm.updatePlayList = updatePlayList; 
		vm.toggleActive = toggleActive; 
		vm.getClass = getClass; 

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
	    
	    function toggleActive(index){
	    	if (vm.user.playList[index].active == 'true'){
	    		vm.user.playList[index].active = 'false';
	    		$(this.target).removeClass('active');
	    	}
	    	else {
	    		vm.user.playList[index].active = 'true';
	    		$(this.target).addClass('active');
	    	}
	    }
	    
	    function getClass(index){
	    	if (vm.user.playList[index].active == 'true'){
	    		return 'list-group-item active';
	    	}
	    	else{
	    		return 'list-group-item';
	    	}
	    }
	    
	   function updatePlayList(){
		   UserService.Update(vm.user)
		   		.then(function (user) {
		   			loadCurrentUser();
		   		});
	   }; 
	};
})();
