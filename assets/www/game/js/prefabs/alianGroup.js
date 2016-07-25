'use strict';

var AlienGroup = function(game, parent) {

  Phaser.Group.call(this, game, parent);
  
  var numOfHoles = window.height/(16*3) -1;
	
  var arr = [];
  while(arr.length < numOfHoles){
    var randomnumber=Math.ceil(Math.random()*numOfHoles);
    var found=false;
    for(var i=0;i<arr.length;i++){
  	if(arr[i]==randomnumber){found=true;break;}
    }
    if(!found)arr[arr.length]=randomnumber;
  }
  
  for(var i = 0;i<3;i++){
	  this.add(new Alien(game, window.width, arr[i] * (16*3)));   
  }

  this.setAll('body.velocity.x', -200);
};

AlienGroup.prototype = Object.create(Phaser.Group.prototype);
AlienGroup.prototype.constructor = AlienGroup;

AlienGroup.prototype.update = function() {
};
