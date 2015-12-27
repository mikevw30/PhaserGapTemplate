(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;
        
        vm.register = register;

        function register() {
            vm.dataLoading = true;
            
            //this is temp. until the backend sets this data.
            vm.user.songVotes = 0;
            vm.user.upVotes = 0;
            vm.user.downVotes = 0;
            vm.user.playList = [
               {
                  "name": "pop", 
                  "title": "Pop", 
                  "active": "false"
               },
               {
                  "name": "rock", 
                  "title": "Rock", 
                  "active": "true"
               },
               {
                  "name": "rap", 
                  "title": "Rap", 
                  "active": "false"
               },
               {
                  "name": "alternative", 
                  "title": "Alternative", 
                  "active": "false"
               },
               {
            	  "name": "blues", 
            	  "title": "Blues", 
            	  "active": "false"
               }];
            
            UserService.Create(vm.user).then(function (response) {
	            if (response.success) {
	                FlashService.Success('Registration successful', true);
	                $location.path('/login');
	            } else {
	                FlashService.Error(response.message);
	                vm.dataLoading = false;
	            }
            });
        }
    }

})();
