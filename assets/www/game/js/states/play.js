var Play = function(game){
	spriteNumber = null;
	number = 0;
	workingButtons = true;
	higher = true;
	score = 0;
	height = window.innerHeight;
	width = window.innerWidth;
};

Play.prototype = {
	create: function() { 
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bird = new Bird(this.game, 100, 245);
//        this.game.add.existing(this.bird);
        
        this.game.input.onDown.add(this.bird.jump, this.bird);

        //add alien group
        this.pipes = this.game.add.group();
        //add stars group
        this.stars = this.game.add.group();
        
        //scores lable
        score = 0;
        this.labelScore = this.game.add.text(20, 20, "0",{ font: "30px Arial", fill: "#ffffff" }); 
        
        this.game.stage.backgroundColor = '#71c5cf';

        this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);
    },

    update: function() {  
        if (this.bird.y < 0 || this.bird.y > height){
        	this.endGame();
        }    	
        this.game.physics.arcade.overlap(this.bird, this.pipes, this.endGame, null, this);
        this.game.physics.arcade.overlap(this.bird, this.stars, this.collectStar, null, this);     
    },
    
    // Restart the game
    endGame: function() {
    			   //...start(state, clearWorld,clearCache,vars)
    	console.log("game over");
        this.game.state.start('GameOver',true,false,score);
        score = 0;
    },

    collectStar: function(_ship,_star) {
    	_star.kill();
        score += 1;
        this.labelScore.text = score;
    },
    
    addOnePipe: function(x, y) {
        // Create a pipe at the position x and y
        var pipe = this.game.add.sprite(x, y, 'alien');

        // Add the pipe to our previously created group
        this.pipes.add(pipe);

        // Enable physics on the pipe 
        this.game.physics.arcade.enable(pipe);

        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200; 

        // Automatically kill the pipe when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    addStar: function(x, y) {
        // Create a pipe at the position x and y
        var star = this.game.add.sprite(x, y, 'star');

        var speed = .1;
        
        var t1distance = y; 
        var t1time = t1distance/speed;
        
        var t2distance = (height-50);
        var t2time = t2distance/speed;

        var t3distance = (height-50) - y;
        var t3time = t3distance/speed;
        
        tween1 = this.game.add.tween(star).to({y:0},t1time,Phaser.Easing.Linear.NONE)
        								  .to({y:height-50},t2time,Phaser.Easing.Linear.NONE)
        								  .to({y:y},t3time,Phaser.Easing.Linear.NONE).loop(true);
        
        tween1.start();
        
        // Add the pipe to our previously created group
        this.stars.add(star);

        // Enable physics on the pipe 
        this.game.physics.arcade.enable(star);

        // Add velocity to the pipe to make it move left
        star.body.velocity.x = -200; 

        // Automatically kill the pipe when it's no longer visible 
        star.checkWorldBounds = true;
        star.outOfBoundsKill = true;
    },
    
    addRowOfPipes: function() {
    	var numOfHoles = 10;
    	
        var arr = [];
        while(arr.length < 4){
          var randomnumber=Math.ceil(Math.random()*numOfHoles);
          var found=false;
          for(var i=0;i<arr.length;i++){
        	if(arr[i]==randomnumber){found=true;break;}
          }
          if(!found)arr[arr.length]=randomnumber;
        }
        this.addStar(width, arr[0] * 60 + 10);  
        this.addOnePipe(width, arr[1] * 60 + 10);   
        this.addOnePipe(width, arr[2] * 60 + 10);   
        this.addOnePipe(width, arr[3] * 60 + 10);   
    }
};