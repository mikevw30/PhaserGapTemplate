'use strict';

var AlienGroup = function(game, parent) {

  Phaser.Group.call(this, game, parent);
  
  var numOfHoles = 10;
	
  var arr = [];
  while(arr.length < 3){
    var randomnumber=Math.ceil(Math.random()*numOfHoles);
    var found=false;
    for(var i=0;i<arr.length;i++){
  	if(arr[i]==randomnumber){found=true;break;}
    }
    if(!found)arr[arr.length]=randomnumber;
  }
  this.add(new Alien(game, window.width, arr[0] * 60 + 10));   
  this.add(new Alien(game, window.width, arr[1] * 60 + 10));   
  this.add(new Alien(game, window.width, arr[2] * 60 + 10)); 

  this.setAll('body.velocity.x', -200);
};

AlienGroup.prototype = Object.create(Phaser.Group.prototype);
AlienGroup.prototype.constructor = AlienGroup;

AlienGroup.prototype.update = function() {
};
