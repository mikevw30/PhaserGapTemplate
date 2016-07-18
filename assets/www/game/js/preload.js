var preload = function(game){}

preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(160,240,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","game/assets/numbers.png",100,100);
		this.game.load.image("gametitle","game/assets/gametitle.png");
		this.game.load.image("play","game/assets/play.png");
		this.game.load.image("higher","game/assets/higher.png");
		this.game.load.image("lower","game/assets/lower.png");
		this.game.load.image("gameover","game/assets/gameover.png");
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}