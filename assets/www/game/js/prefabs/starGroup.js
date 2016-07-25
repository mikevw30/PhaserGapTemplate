'use strict';

var StarGroup = function(game, parent) {

  Phaser.Group.call(this, game, parent);
  this.add(new Star(game, window.width, Math.ceil(Math.random()*10) * 60 + 10));   
  this.setAll('body.velocity.x', -200);
};

StarGroup.prototype = Object.create(Phaser.Group.prototype);
StarGroup.prototype.constructor = StarGroup;

StarGroup.prototype.update = function() {
};
