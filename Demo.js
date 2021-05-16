var myGamePiece;
var myBackground;
var Bar;
var elem1;
var vid;
var text;


function startGame() {
	"use strict";
	loading();
    myGamePiece = new component(30, 30, "GamePiece.png", 10, 389, "image");              /* Javascript that controls the movment of the character and the background/when the game loads*/
	myBackground = new component1(1300, 601, "Background.png", 0, 0, "image");
	var button = document.getElementById("Clay");
	button.style.display = "none";
}

function loading() {
	"use strict";
	Bar = document.getElementById("Bar");
	elem1 = document.getElementById("Pro");
	vid = document.getElementById("video");                                   /* Loading Bar*/
	text = document.getElementById("tag");
  	var width = 0;
  	var id = setInterval(frame, 80);
	myGameArea.canvas.style.backgroundImage = "none";
	Bar.style.visibility = "visible";
	elem1.style.visibility = "visible";
	vid.style.visibility = "visible";
	text.style.visibility = "visible";
	vid.play();
	
  	function frame() {
    	if (width >= 100) {
      		clearInterval(id);
			setTimeout(function(){ myGameArea.start(); }, 3000);               /* Triggering the function 3 secondas after the game has loaded, to make it seem like an actual game*/
			
    	} else {
      		width++; 
      		Bar.style.width = width + '%'; 
      		Bar.innerHTML = width * 1  + '%';
		}
  	}
}

var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {
		"use strict";
		Bar.style.display = "none";
		elem1.style.display = "none";
		vid.style.display = "none";
		text.style.display = "none";
        this.canvas.width = 1300;
        this.canvas.height = 600;
		this.canvas.style.backgroundImage = "none";
		this.canvas.style.position = "absolute";
		this.canvas.style.top = "267px";
		this.canvas.style.left = "303px";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type === "keydown");                      /* Loading the Canvas and style for it to stay at the exact same position otherwise would go at the top left of the page*/
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type === "keydown");            
        });
    }, 
    clear : function(){
		"use strict";
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type === "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
	this.level = 0;
	this.gravity = 0.16;
    this.gravitySpeed = 0;
	this.jumping = 0;
	this.value = 1;
    this.update = function() {
        context = myGameArea.context;
        if (type === "image") {
            context.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);                                             /* makes variables for a specific component "GamePiece" */
        } else {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    };
    this.newPos = function() {
		this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
		this.hitBottom();
    };
    this.hitBottom = function() {
        var rockbottom = 389;
        if (this.y > rockbottom) {
            this.y = rockbottom;
			this.gravitySpeed = 0;
        }
    };
	this.lvl1 = function() {
		this.x = 0;
		this.y = 389;
	};
	this.backlvl1 = function() {
		this.x = 1290;
		this.y = 389;
	};
	this.block1 = function() {
		var toprock1 = 347;
		var siderock1 = 360;
		var othersiderock1 = 420;
		if (this.y > toprock1 && this.x > siderock1 && this.x < othersiderock1 && this.y < 355) {
			this.y = toprock1;
			this.gravitySpeed = 0;
		}
	};
	this.block2 = function() {
		var toprock2 = 347;
		var siderock2 = 700;
		var othersiderock2 = 760;
		if (this.y > toprock2 && this.x > siderock2 && this.x < othersiderock2 && this.y < 355) {
			this.y = toprock2;
			this.gravitySpeed = 0;
		}
	};
	this.block3 = function() {
		var toprock3 = 301;
		var siderock3 = 767;
		var othersiderock3 = 827;
		if (this.y > toprock3 && this.x > siderock3 && this.x < othersiderock3 && this.y < 309) {
			this.y = toprock3;
			this.gravitySpeed = 0;
		}
	};
	this.block11 = function() {
		var toprock11 = 338;                                                                                          /* 3.51 = 389 */
		var siderock11 = 109;
		var othersiderock11 = 170;
		if (this.y > toprock11 && this.x > siderock11 && this.x < othersiderock11 && this.y < 340) {
			this.y = toprock11;
			this.gravitySpeed = 0;
		}
	};
	this.block12 = function() {
		var toprock12 = 290;                                                                                          /* 3.51 = 389 */
		var siderock12 = 160;
		var othersiderock12 = 220;
		if (this.y > toprock12 && this.x > siderock12 && this.x < othersiderock12 && this.y < 292) {
			this.y = toprock12;
			this.gravitySpeed = 0;
		}
	};
	this.block13 = function() {
		var toprock13 = 242;                                                                                          /* 3.51 = 389 */
		var siderock13 = 211;
		var othersiderock13 = 270;
		if (this.y > toprock13 && this.x > siderock13 && this.x < othersiderock13 && this.y < 244) {
			this.y = toprock13;
			this.gravitySpeed = 0;
		}
	};
	this.something = function() {
		var img = document.getElementById("imgg");
		img.style.visibility = "visible";
		img.style.left = "310";
		img.style.width = "1300";
		img.style.height = "600";
		setTimeout(function(){ end(); }, 2000);  
		function end() {
		document.location.reload();
		}
	};
	this.some = function() {
		this.value = 0;
		if (this.value === 0) {
			{myGamePiece.lvl1(); myBackground.lvl0(); myGamePiece.level = 0; myGamePiece.endgame();}
		}
		
	};
	this.endgame = function() {
		if (this.value === 0 && this.level === 0 && this.x < 200){
			myGamePiece = new component(75, 75, "GamePieceClosed.png", 575, 389, "image");
			setTimeout(function(){ otherend(); }, 500); 
			otherend();
		}
	};
 }

function otherend() {
	"use strict";
	myBackground.lvl00();
	setTimeout(function() {alert("Next Level In Progress");}, 1000);
}

function updateGameArea() {
	"use strict";                                                /* Updating the game are when ever a change is made certain times per second*/
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -2; }
	if (myGamePiece.y > 389) {myGamePiece.y = 389; }
	if (myGamePiece.x < -16) {myGamePiece.x = -16; }
	if (myGamePiece.level === 2 && myGamePiece.x > 1200 && myGamePiece.x < 1300) {myGamePiece.some();}
	if (myGamePiece.level ===1) {myGamePiece.block1(); myGamePiece.block2(); myGamePiece.block3();}
	if (myGamePiece.level === 2) {myGamePiece.block11(); myGamePiece.block12(); myGamePiece.block13();}
	if (myGamePiece.x >= 1300 && myGamePiece.level === 0) {myGamePiece.lvl1(); myBackground.lvl1(); myGamePiece.level = 1;}
	if (myGamePiece.level === 1 && myGamePiece.x > 1300) { myGamePiece.lvl1(); myBackground.lvl2(); myGamePiece.level = 2;}
	if (myGamePiece.level === 1 && myGamePiece.x <= -15) {myGamePiece.backlvl1(); myBackground.lvl0(); myGamePiece.level = 0;}
	if (myGamePiece.level === 2 && myGamePiece.x <= -13) {myGamePiece.backlvl1(); myBackground.lvl1(); myGamePiece.level = 1;}
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 2; }
	if (myGamePiece.x > 260 && myGamePiece.x < 360 && myGamePiece.y >= 389 && myGamePiece.level === 2) {myGamePiece.something();}
    if (myGamePiece.jumping <= 0 && myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY -= 40; myGamePiece.jumping = 1;}
	if (myGamePiece.y >= 389 || myGamePiece.y === 347 && myGamePiece.level === 1 || myGamePiece. y === 338 && myGamePiece.level === 2 || myGamePiece.y === 290 && myGamePiece.level === 2|| myGamePiece.y === 242 && myGamePiece.level === 2) {myGamePiece.jumping = 0; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 2; }
	myBackground.newPos();
	myBackground.update();
    myGamePiece.newPos();    
    myGamePiece.update();
	
}
function component1(width, height, color, x, y, type) {
    this.type = type;
    if (type === "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.update = function() {
        context = myGameArea.context;
        if (type === "image") {
            context.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);                                             /* makes variables for a specific component "Background" */
        } else {
            context.fillStyle = color;
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
	};
	this.lvl1 = function() {
		myBackground = new component1(1300, 601, "Background1.png", 0, 0, "image");
	};
	this.lvl2 = function() {
		myBackground = new component1(1300, 601, "Background2.png", 0, 0, "image");

	};
	this.lvl0 = function() {
		myBackground = new component1(1300, 601, "Background.png", 0, 0, "image");

	};
	this.lvl00 = function() {
		myBackground = new component1(1300, 601, "Start.png", 0, 0, "image");

	};
}

