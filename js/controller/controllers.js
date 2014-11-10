
(function (){


angular.module("topMusic").controller("listCtrl", function ($log, $firebase){

	var vm = this;
	$log.info(vm);
	vm.loaded = false;



	var ref = new Firebase("https://incandescent-heat-3004.firebaseio.com/songList");
	var sync = $firebase(ref);


	// Init the list order by default 
	vm.predicate = "votes";
	vm.reverse = true;


	// Get song list
	vm.songList = sync.$asArray();
	vm.songList.$loaded().then(function(){
		vm.loaded = true;
		console.log("Loaded");
	});



	// Change order
	vm.changeReverse = function(predicate){
		if (predicate == vm.predicate) {
			vm.reverse = !vm.reverse;
		}		
		vm.predicate = predicate;
	}


	// Add song
	vm.addSong = function(){
		var songObj = {
			author: vm.author,
			title: vm.title
		};
		var song = new Song(songObj);

		vm.songList.$add(song);
	}


	
	// Delete song from list
	vm.deleteSong = function(song){
		vm.songList.$remove(song);
	}


	// Change votes
	vm.voteUp = function(song){
		song.votes++;
		vm.songList.$save(song);
	}
	vm.voteDown = function(song){
		if(song.votes>0) song.votes--;
		vm.songList.$save(song);
	}



});



}());