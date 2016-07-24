var Menu = function(game){	height = window.innerHeight;
	width = window.innerWidth;
	stars = [];

	xl = 0;
	yl = 0;

	cx = 0;
	cy = 0;
};

Menu.prototype = {
  	create: function(){
	    var sprite = { x: 0, y: 1 };
	    //tween function def.
	    //this.game.add.tween(object).to(properties, duration, ease, autoStart, delay, repeat, yoyo);  
	    var tween = this.game.add.tween(sprite).to( { x: (1/3)*width, y: 0 }, 2000, "Elastic.easeInOut", true, 0, -1, true);
	    waveform = tween.generateData(60);

	    xl = waveform.length - 1;
	    yl = waveform.length - 1;

	    var sprites = this.game.add.spriteBatch();

	    var picWidth = this.game.cache.getImage('gametitle').width;
	    var picHeight = this.game.cache.getImage('gametitle').height;

	    var ys = 4;

	    for (var y = 0; y < Math.floor(picHeight/ys); y++)
	    {
	        var star = this.game.make.sprite(width/3, height/4 + (y * ys), 'gametitle');

	        star.crop(new Phaser.Rectangle(0, y * ys, picWidth, ys));

	        star.ox = star.x;
	        star.oy = star.y;

	        star.cx = this.game.math.wrap(y, 0, xl);
	        star.cy = y;

	        star.anchor.set(0.5);
	        sprites.addChild(star);
	        stars.push(star);
	    }

	    var playButton = this.game.add.button(width/2,(height/2)+star.height,"play",this.playTheGame,this);
	    playButton.anchor.setTo(0.5,0.5);
		
	    console.log("menu state");
	},
	update: function(){
		for (var i = 0, len = stars.length; i < len; i++)
	    {
	        stars[i].x = stars[i].ox + waveform[stars[i].cx].x;
	        stars[i].y = stars[i].oy + waveform[stars[i].cy].y;

	        stars[i].cx++;

	        if (stars[i].cx > xl)
	        {
	            stars[i].cx = 0;
	        }

	        stars[i].cy++;

	        if (stars[i].cy > yl)
	        {
	            stars[i].cy = 0;
	        }
	    }
	},
	playTheGame: function(){
		this.game.state.start("Play");
	}
};