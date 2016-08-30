'use strict';
function Boot(game) {}

Boot.prototype = {
  create: function() {
	  console.log("boot state");
	  this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
	  this.scale.pageAlignHorizontally = true;
	  this.game.state.start("Preload");
  },
  update: function() {
  },
  init: function(){
  },
  preload: function() {
  }
};
