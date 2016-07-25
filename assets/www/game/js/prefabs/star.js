'use strict';

var Star = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'star', frame);
  this.game.physics.arcade.enableBody(this);
  this.name = 'star';

  this.body.allowGravity = false;
  this.game.add.existing(this);
  
  var speed = .1;
  
  var topDistance = y; 
  var t1time = topDistance/speed;
  
  var bottomDistance = (height-50);
  var t2time = bottomDistance/speed;

  var spawnDistance = (height-50) - y;
  var t3time = spawnDistance/speed;
  
  var tween1 = game.add.tween(this).to({y:0},t1time,Phaser.Easing.Linear.NONE)
  								  .to({y:height-50},t2time,Phaser.Easing.Linear.NONE)
  								  .to({y:y},t3time,Phaser.Easing.Linear.NONE).loop(true);
  tween1.start();
};

Star.prototype = Object.create(Phaser.Sprite.prototype);
Star.prototype.constructor = Star;

Star.prototype.update = function() {
	
};