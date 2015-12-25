'use strict';

angular.module('app').controller('PlaylistController', PlaylistController);

PlaylistController.$inject = ['UserService', '$rootScope'];
function PlaylistController(UserService, $rootScope) {
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
    
    function upVote(){
    	window.alert("hi");
    }
    
    $rootScope.upVote = function(){
    	vm.user.songVotes++;
    	UserService.Update(vm.user)
        .then(function (user) {
        	loadCurrentUser();
        });
    };
};
