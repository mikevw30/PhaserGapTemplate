'use strict';

var StarGroup = function(game, parent) {

  Phaser.Group.call(this, game, parent);
  this.add(new Star(game, window.width, game.rnd.integerInRange(0, window.height/(16*3)-1) *(16*3)-(16*3)/2));   
  this.setAll('body.velocity.x', -200);
};

StarGroup.prototype = Object.create(Phaser.Group.prototype);
StarGroup.prototype.constructor = StarGroup;

StarGroup.prototype.update = function() {
};
