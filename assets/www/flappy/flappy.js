// Create our 'main' state that will contain the game
var mainState = {
    preload: function() { 
        game.load.image('bird', 'flappy/assets/bird.png'); 
        game.load.image('pipe', 'flappy/assets/pipe.png');
    },

    create: function() { 
        // Change the background color of the game to blue
        game.stage.backgroundColor = '#71c5cf';

        // Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

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
        var pixelWidth = 3;
        var pixelHeight = 3;
        game.create.texture('ship', ship, pixelWidth, pixelHeight);  
        
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
                   
        game.create.texture('alien', alien, 3, 3);
        
        
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
                  
        game.create.texture('star', star, 3, 3);
        
        // Display the bird at the position x=100 and y=245
        this.bird = game.add.sprite(100, 245, 'ship');
        
        this.bird.anchor.setTo(-0.2, 0.5);
        
        this.pipes = game.add.group();
        this.stars = game.add.group();
        
        // Add physics to the bird
        // Needed for: movements, gravity, collisions, etc.
        game.physics.arcade.enable(this.bird);

        // Add gravity to the bird to make it fall
        this.bird.body.gravity.y = 1000;  

        // Call the 'jump' function when the spacekey is hit
        game.input.onDown.add(this.jump, this);
        
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        
        this.score = 0;
        this.labelScore = game.add.text(20, 20, "0",
                            { font: "30px Arial", fill: "#ffffff" });  
        
    },

    update: function() {  
        // If the bird is out of the screen (too high or too low)
        // Call the 'restartGame' function
        if (this.bird.y < 0 || this.bird.y > height){
            this.restartGame();
        }
        
        // collision detection between pipe and bird....
        game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);
        game.physics.arcade.overlap(this.bird, this.stars, this.collectStar, null, this);
        
        if (this.bird.angle < 20){
            this.bird.angle += 1; 
        }
    },
    
    // Make the bird jump 
    jump: function() {
        // Add a vertical velocity to the bird
        this.bird.body.velocity.y = -350;

        game.add.tween(this.bird).to({angle: -20}, 100).start(); 
    },
    
    // Restart the game
    restartGame: function() {
        // Start the 'main' state, which restarts the game
        game.state.start('main');
    },

    collectStar: function(_ship,_star) {
    	_star.kill();
        this.score += 1;
        this.labelScore.text = this.score;
    },
    
    addOnePipe: function(x, y) {
        // Create a pipe at the position x and y
        var pipe = game.add.sprite(x, y, 'alien');

        // Add the pipe to our previously created group
        this.pipes.add(pipe);

        // Enable physics on the pipe 
        game.physics.arcade.enable(pipe);

        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200; 

        // Automatically kill the pipe when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    addStar: function(x, y) {
        // Create a pipe at the position x and y
        var star = game.add.sprite(x, y, 'star');

        // Add the pipe to our previously created group
        this.stars.add(star);

        // Enable physics on the pipe 
        game.physics.arcade.enable(star);

        // Add velocity to the pipe to make it move left
        star.body.velocity.x = -200; 

        // Automatically kill the pipe when it's no longer visible 
        star.checkWorldBounds = true;
        star.outOfBoundsKill = true;
    },
    
    addRowOfPipes: function() {
        // Randomly pick a number between 1 and 5
        // This will be the hole position
    	
    	var numOfHoles = 14;
    	
//        var star = Math.floor(Math.random() * numOfHoles) + 1;
//        this.addStar(width, star * 60 + 10);  
//        
//        for(var i=0; i<3 ;i++){
//        	var pipe1 = Math.floor(Math.random() * numOfHoles) + 1;
//        	this.addOnePipe(width, pipe1 * 60 + 10);   
//        }
        
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


var highScore = 0;

var height = window.innerHeight;
//var height = window.innerHeight * window.devicePixelRatio;
var width = window.innerWidth;
//var width = window.innerWidth * window.devicePixelRatio;

// Initialize Phaser, and create a 400px by 490px game
//var game = new Phaser.Game(400, 490);
game = new Phaser.Game(width, height, Phaser.CANVAS, 'gameArea');

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState); 

// Start the state to actually start the game
game.state.start('main');