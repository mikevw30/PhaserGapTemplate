'use strict';
function Boot(game) {}

Boot.prototype = {
  init: function(){
  },
  preload: function() {
      this.game.load.image("loading","game/assets/loading.png");
  },
  create: function() {
	  console.log("boot state");
	  this.game.state.start("Preload");
  },
  update: function() {
  }
};
