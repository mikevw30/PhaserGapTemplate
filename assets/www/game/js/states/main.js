'use strict';

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "game");
game.state.add("Boot",Boot);
game.state.add("Preload",Preload);
game.state.add("Menu",Menu);
game.state.add("Play",Play);
game.state.add("GameOver",gameOver);

game.state.start("Boot");
