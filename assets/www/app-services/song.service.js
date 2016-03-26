(function () {
    'use strict';

    angular
        .module('app')
        .factory('SongService', SongService);

    function SongService($http) {
    	
        var service = {};
        var baseURI = 'http://ec2-54-201-58-219.us-west-2.compute.amazonaws.com:3000';
        var addSongURI = baseURI+'/songs/create';
        var getAllSongsURI = baseURI+'/songs/readAll';
        var getSongURI = baseURI+'/songs/read';
        var songUpdateURI = baseURI+'/songs/update';
        var songDeleteURI = baseURI+'/songs/destroy';

        service.addSong = addSong;
        service.getAllSongs = getAllSongs;
        service.getSongById = getSongById;
        service.updateSong = updateSong;
        service.deleteSong = deleteSong;
        
        return service;
        
        function addSong(song) {
        	var promise = $http({
                url: addSongURI,
                method: "POST",
                data: $.param({song:song}),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			  })
                .then(function (response){
        			console.log('rs: '+JSON.stringify(response.data));
        			return response.data;
        		}
            );
        	return promise;
        }
        
        function getAllSongs() {
        	var promise = $http.get(getAllSongsURI).then(function (response){
        			console.log(response);
        			return response.data;
        		});
        	return promise;
        }
        
        function getSongById(id) {
        	var promise = $http.get(getSongURI+'?id='+id).then(function (response){
        		console.log(response);
        		return response.data;
        	});
        	return promise;
        }

        //returns the updated obj.
        function updateSong(song) {
        	var promise = $http({
			                url: songUpdateURI+'?id='+song._id,
			                method: "POST",
			                data: $.param({song:song}),
			                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        				  })
			                .then(function (response){
			        			console.log('rs: '+JSON.stringify(response.data));
			        			return response.data;
			        		}	
        	);
        	return promise;
		};
		
		function deleteSong(id) {
			console.log(songDeleteURI+'?id='+id);
			var promise = $http({
				url: songDeleteURI+'?id='+id,
				method: "GET",
				data: $.param({id:id}),
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			})
			.then(function (response){
				console.log('rs: '+JSON.stringify(response.data));
				return response.data;
			}	
			);
			return promise;
		};
    }
})();
