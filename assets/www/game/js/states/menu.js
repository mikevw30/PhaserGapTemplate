var Menu = function(game){	
	height = window.innerHeight;
	width = window.innerWidth;
	stars = [];

	xl = 0;
	yl = 0;

	cx = 0;
	cy = 0;
	ship = null;
};

Menu.prototype = {
  	create: function(){
//  		var picWidth = this.game.cache.getImage('gametitle').width;
	    var picHeight = this.game.cache.getImage('gametitle').height;
  		var title = game.add.sprite(width/2, height/2, 'gametitle');
  		title.anchor.setTo(0.5, 0.5);
//  		game.add.tween(title).to({angle: -20}, 150).to({angle: 0}, 400).start().loop(); 
  			
	    var playButton = this.game.add.button(width/2,(height/2)+picHeight,"play",this.playTheGame,this);
	    playButton.anchor.setTo(0.5,0.5);
		
	    ship = new Ship(this.game, (width/2)-16, 0);
	    
	    console.log("menu state");
	},
	update: function(){
		if(ship.body.y > (height/2)+200){
			ship.body.velocity.y = -350;
			game.add.tween(ship).to({angle: -20}, 100).start();
		}
	},
	playTheGame: function(){
		this.game.state.start("Play");
	}
};