(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    function UserService() {
    	
        var service = {};
        
        service.getUser = getUser;
        service.updateUser = updateUser;
        
        return service;
             
        function getUser(){
        	var user = JSON.parse(localStorage.getItem('user'));

        	if (typeof user === 'undefined' && user === null){
	        	user = {
	        			'playlist' :[
	        			             {'genre': 'rap',
	        			            	 'active': 'false'
	        			             }, 
	        			             {'genre': 'country',
	        			            	 'active': 'true'
	        			             }, 
	        			             {'genre': 'rock',
	        			            	 'active': 'true'
	        			             } 
	        			             ]
	        	};
	        	// Put the object into storage
	        	localStorage.setItem('user', JSON.stringify(user));
        	}
        	
        	console.log('[UserService] :- user: '+JSON.stringify(user));
    		return user;
        }
        function updateUser(user){
        	localStorage.setItem('user', JSON.stringify(user));
        	console.log('[UserService.updateUser(user)] :- user: '+JSON.stringify(user));
        }
    }
})();

