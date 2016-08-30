'use strict';
var Menu = function(game){	
	this.height = window.innerHeight;
	this.width = window.innerWidth;
	this.ship = null;
};

Menu.prototype = {
  	create: function(){
	    var picHeight = this.game.cache.getImage('gametitle').height;
  		var title = game.add.sprite(this.width/2, this.height/2, 'gametitle');
  		title.anchor.setTo(0.5, 0.5);
  			
	    var playButton = this.game.add.button(this.width/2,(this.height/2)+picHeight,"play",this.playTheGame,this);
	    playButton.anchor.setTo(0.5,0.5);
		
	    this.ship = new Ship(this.game, (width/2)-16, -20);
	    
	    console.log("menu state");
	},
	update: function(){
		if(this.ship.body.y > (height/2)+200){
			this.ship.body.velocity.y = -350;
			this.game.add.tween(this.ship).to({angle: -20}, 100).start();
		}
	},
	playTheGame: function(){
		this.game.state.start("Play");
	}
};