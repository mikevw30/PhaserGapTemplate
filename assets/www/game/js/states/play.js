var Play = function(game){
	spriteNumber = null;
	number = 0;
	workingButtons = true;
	higher = true;
	score = 0;
	this.starfield;
};

Play.prototype = {
	create: function() { 
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		starfield = game.add.tileSprite(0, 0, width, height, "stars");

        this.ship = new Ship(this.game, 100, 245);
        
        this.game.input.onDown.add(this.ship.jump, this.ship);

        this.aliens = this.game.add.group();
        this.stars = this.game.add.group();
        
        score = 0;
        this.labelScore = this.game.add.text(20, 20, "0",{ font: "30px Arial", fill: "#ffffff" }); 
        
        this.timer = this.game.time.events.loop(1500, this.addRow, this);
    },

    update: function() {
    	starfield.tilePosition.x -= 1;
    	
        if (this.ship.y < 0 || this.ship.y > height){
        	this.endGame();
        }    	
        this.aliens.forEach(function(pipeGroup) {
            this.game.physics.arcade.overlap(this.ship, pipeGroup, this.endGame, null, this);
        }, this);
        this.stars.forEach(function(starGroup) {
        	this.game.physics.arcade.overlap(this.ship, starGroup, this.collectStar, null, this);
        }, this);
    },
    
    endGame: function() {
        this.game.state.start('GameOver',true,false,score);
    },

    collectStar: function(_ship,_star) {
    	_star.kill();
        score += 1;
        this.labelScore.text = score;
    },
    
    addRow: function() {
    	var pipeGroup = this.aliens.getFirstExists(false);
    	if(!pipeGroup) {
    		pipeGroup = new AlienGroup(this.game, this.aliens);  
    	}
    	var starGroup = this.stars.getFirstExists(false);
    	if(!starGroup) {
    		starGroup = new StarGroup(this.game, this.stars);  
    	}
    }
};