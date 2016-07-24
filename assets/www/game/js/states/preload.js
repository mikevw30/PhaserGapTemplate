var Preload = function(game){
	 this.ready = false;
};

Preload.prototype = {
	preload: function(){ 
		var loadingBar = this.add.sprite(160,240,"loading");
		loadingBar.anchor.setTo(0.5,0.5);
		this.load.setPreloadSprite(loadingBar);
		
		this.load.setPreloadSprite(loadingBar);
		
	    this.game.time.events.add(Phaser.Timer.SECOND * 4,this);
		
		this.game.load.spritesheet("numbers","game/assets/numbers.png",100,100);
		this.game.load.image("gametitle","game/assets/gametitle.png");
		this.game.load.image("play","game/assets/play.png");
		this.game.load.image("higher","game/assets/higher.png");
		this.game.load.image("lower","game/assets/lower.png");
		this.game.load.image("gameover","game/assets/gameover.png");
        
        // Set the physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var ship = [
                    '.......EEEE...',
                    '......EEEFFE....',
                    '.....EEEDDFFE...',
                    '334..EEDDDDEE...',
                    '3333.EEDDDDEE...',
                    '33333EEDDDDEE...',
                    '.FF2222222222F..',
                    '.F222222222222F.',
                    '.22222222222222F',
                    '4443322222222222',
                    '44433FFFFFFFFFFF',
                    '.111FFFFFFFFFFF.',
                    '.11FFFFFFFFFFF..',
                    '.1FFFFFFFFFF1...',
                    '...3333.........',
                    '...333..........'
                  ]; 
        this.game.create.texture('ship', ship, 3, 3);  
        
        var alien = [
                     '....DDDDDDDD....',
                     '...DDEEDDDDDD...',
                     '..DDDEEDDDDDDD..',
                     '..DDDDDDDDDDDD..',
                     '..DDDD5555DDDD..',
                     '..DDD555555DDD..',
                     '..DDD555555DDD..',
                     '..DDD555555DDD..',
                     '..334244333333..',
                     '.33344443333333.',
                     '3333444433333333',
                     '....5...5..5....',
                     '...5....5...5...',
                     '.66....66....66.',
                     '.66....66....66.'
                   ];
        this.game.create.texture('alien', alien, 3, 3);
        
        var star = [
                    '.....828.....',
                    '....72227....',
                    '....82228....',
                    '...7222227...',
                    '2222222222222',
                    '8222222222228',
                    '.72222222227.',
                    '..787777787..',
                    '..877777778..',
                    '.78778887787.',
                    '.27887.78872.',
                    '.787.....787.'
                  ];
        this.game.create.texture('star', star, 3, 3);
        
        this.onLoadComplete();
	},
	update: function(){
      if(!!this.ready) {
    	  console.log("preloader state");
          this.game.state.start('Menu');
        }
	},
    onLoadComplete: function() {
        this.ready = true;
    }
};