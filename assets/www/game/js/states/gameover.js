var gameOver = function(game){
	height = window.innerHeight;
	width = window.innerWidth;
	this.starfield;
};

gameOver.prototype = {
//	init: function(score){
//	},
  	create: function(){
  		starfield = game.add.tileSprite(0, 0, width, height, "stars");
  		
  		var style = { font: "65px Arial", fill: "#FFF", align: "center" };
  		var gameOverText = game.add.text(game.world.centerX, game.world.centerY, "Your Score: "+score+"\nPlay Again", style);
  		gameOverText.inputEnabled = true;
  		gameOverText.events.onInputDown.add(this.playTheGame, this);
  		gameOverText.anchor.set(0.5);
	},
	update: function(){
		starfield.tilePosition.x -= 1;
	},
	playTheGame: function(){
		this.game.state.start("Play");
	}
};