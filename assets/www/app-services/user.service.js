(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    function UserService() {
    	
        var service = {};
        
        service.getUser = getUser;
        
        return service;
             
        function getUser(){
        	var user = {
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

        	// Retrieve the object from storage
        	var savedUser = localStorage.getItem('user');

        	console.log('savedUser: ', JSON.parse(savedUser));
    		return user;
        }
    }
})();

