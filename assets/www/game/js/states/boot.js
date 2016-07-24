'use strict';
function Boot(game) {}

Boot.prototype = {
  preload: function() {
	  this.game.load.image("loading","game/assets/loading.png");
  },
  create: function() {
	  console.log("boot state");
	  this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
	  this.scale.pageAlignHorizontally = true;
	  this.game.state.start("Preload");
  },
  update: function() {
  }
};
//module.exports = Boot;