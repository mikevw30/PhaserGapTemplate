var gameTitle = function(game){
	height = window.innerHeight;
	width = window.innerWidth;
};

gameTitle.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(width/2,height/2,"gametitle");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(width/2,(height/2)+gameTitle.height,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
};