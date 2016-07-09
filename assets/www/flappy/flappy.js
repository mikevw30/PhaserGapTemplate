// Create our 'main' state that will contain the game
var mainState = {
    preload: function() { 
        // Load the bird sprite
        game.load.image('bird', 'flappy/assets/bird.png'); 
        
        // Load the pipe sprite
        game.load.image('pipe', 'flappy/assets/pipe.png');
    },

    create: function() { 
        // Change the background color of the game to blue
        game.stage.backgroundColor = '#71c5cf';

        // Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Display the bird at the position x=100 and y=245
        this.bird = game.add.sprite(100, 245, 'bird');
        
        this.bird.anchor.setTo(-0.2, 0.5);
        
        this.pipes = game.add.group();
        
        // Add physics to the bird
        // Needed for: movements, gravity, collisions, etc.
        game.physics.arcade.enable(this.bird);

        // Add gravity to the bird to make it fall
        this.bird.body.gravity.y = 1000;  

        // Call the 'jump' function when the spacekey is hit
        game.input.onDown.add(this.jump, this);
//        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//        spaceKey.onDown.add(this.jump, this); 
        
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
    
    addOnePipe: function(x, y) {
        // Create a pipe at the position x and y
        var pipe = game.add.sprite(x, y, 'pipe');

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
    
    addRowOfPipes: function() {
        // Randomly pick a number between 1 and 5
        // This will be the hole position
    	
    	var numOfHoles = (7 * height) / 490;
    	
        var pipe1 = Math.floor(Math.random() * numOfHoles) + 1;
        var pipe2 = Math.floor(Math.random() * numOfHoles) + 1;
   
        
        this.addOnePipe(width, pipe1 * 60 + 10);   
        this.addOnePipe(width, pipe2 * 60 + 10);   
        
        this.score += 1;
        this.labelScore.text = this.score; 
    }

};


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