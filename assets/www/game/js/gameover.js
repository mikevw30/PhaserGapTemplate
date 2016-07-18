var gameOver = function(game){
	height = window.innerHeight;
	width = window.innerWidth;
	
};

gameOver.prototype = {
	init: function(score){
		alert("You scored: "+score);
	},
  	create: function(){
  		var gameOverTitle = this.game.add.sprite(width/2,height/2,"gameover");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(width/2,(height/2)+gameOverTitle.height,"play",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
		this.game.stage.backgroundColor = '#000000';
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
};