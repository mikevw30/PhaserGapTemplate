(function () {
    'use strict';

    angular
        .module('app')
        .factory('SongService', SongService);

    function SongService($http) {
    	
        var service = {};
        var getAllSongsURI = 'http://ec2-54-201-58-219.us-west-2.compute.amazonaws.com:3000/songs/readAll';
        var getSongURI = 'http://ec2-54-201-58-219.us-west-2.compute.amazonaws.com:3000/songs/read';

        service.getSong = getSong;
        
        return service;
        
        function getSong() {
        	var promise = $http.get(getAllSongsURI).then(function (response){
        			console.log(response);
        			return response.data;
        		});
        	return promise;
        }
    }
})();
