(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext("2d"),
	width = 1000,
	height = 500,
	player = {
		x : 1,
		y : height-11,
		width : 10,
		height : 10,
		speed : 3,
		velY : 0,
		velX : 0,
		jumping : false,
		grounded : false,
		points:0
	},
    	
	keys = [],
	friction = 0.8,
	
	gravity = 0.3,
	playerTwo = {
		x : 1,
		y : height-11,
		width : 10,
		height : 10,
		speed : 3,
		velY : 0,
		velX : 0,
		jumping : false,
		grounded : false,
		points:0
	}
canvas.width = width;
canvas.height = height;

var background = document.getElementById('background');
var context = background.getContext('2d');



background.width = width;
background.height = height;

function checktext() {
	inputText = document.getElementById('input').value




	if (inputText == "you're mother was a murloc") {
		player.velX = 0;
		player.velY = 0;			
		player.x = 1;
		player.y = 489;	
		counter = 0;
		current_level = lsix;
	}
	if (inputText == 'clear') {
		context.clearRect(0,0,background.width,background.height)
	}
	if (inputText == 'sunnyday') {
		var gradient = context.createLinearGradient(0,0,1000,0)
		gradient.addColorStop(0,'yellow');
		gradient.addColorStop(1,'red');
		context.fillStyle = gradient
		context.fillRect(0,0,background.width,background.height);
	}
	if (inputText == 'rainyday') {
		var gradient = context.createLinearGradient(0,0,0,500)
		gradient.addColorStop(0,'#ADD8E6');
		gradient.addColorStop(1,'#76CCE8');
		context.fillStyle = gradient
		context.fillRect(0,0,background.width,background.height);
	}

	
	document.getElementById('input').value = '';
}

function colCheck(shapeA, shapeB) {
  
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
       
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
				if (shapeB.nonblocking == undefined) {
                shapeA.y += oY;
				}
            } else {
                colDir = "b";
				if (shapeB.nonblocking == undefined) {
                shapeA.y -= oY;
				}
            }
        } else {
            if (vX > 0) {
                colDir = "l";
				if (shapeB.nonblocking == undefined) {
                shapeA.x += oX;
				}
            } else {
                colDir = "r";
				if (shapeB.nonblocking == undefined) {
                shapeA.x -= oX;
				}
            }
        }
    }
    return colDir;
}
	
ctx.font="20px Georgia";
///////////////////////////////////////////////////////////
// level creator
///////////////////////////////////////////////////////////
var boxes = []
var finish = [boxes,[9700,10000,4700,4810,1,ltwo,'CONGRATULATION YOU WON SEE HOW YOU STACK UP BELOW']]
var ltwelve = [boxes,{x:width/3+330,y:20,width:30,height:450,nono:true},{x:width/3+330,y:20,width:170,height:30,nono:true},{x:width/3,y:20,width:30,height:450,nono:true},{x:width/3,y:470,width:500,height:30,nono:true},{x:width/6*5,y:240,width:180,height:30,nono:true},{x:width/2,y:240,width:30,height:30},{x:width/6,y:240,width:30,height:30},[970,1000,470,481,1,finish,'Level 12']]
var leleven = [boxes, {x:width/6,y:height/5,width:40,height:(height/5)*4},{x:0,y:(height)*(3/5),width:width/8,height:40}, {x:600,y:0,width:40,height:20}, {x:width/6,y:height-30,width:width-220,height:40, nono:true}, [970,1000,470,481,1,ltwelve,'Level 11'] ]
var lten = [boxes,{x:width/3,y:340,width:30,height:30},{x:2*width/3,y:200,width:30,height:300},{x:0,y:340,width:2*width/3,height:10, nonblocking:true},[970,1000,470,481,1,leleven,'Level 10']]
var lnine = [boxes,{x:width/3*2,y:270,width:30,height:265,nono:true},{x:width/3,y:270,width:30,height:265,nono:true},{x:width/3*2,y:0,width:30,height:250},{x:width/3,y:0,width:30,height:250},[970,1000,470,481,1,lten,'Level 9']]
var leight = [boxes,{x:width/3,y:-1000,width:30,height:1400},{x:width/3,y:400,width:100,height:10},{x:width/3,y:350,width:100,height:10},{x:width/3,y:300,width:100,height:10},{x:width/3,y:250,width:100,height:10},{x:width/3,y:200,width:100,height:10},{x:width/3,y:150,width:100,height:10},{x:800,y:100,width:30,height:400},[970,1000,470,481,1,lnine,'Level 8']]
var lseven = [boxes,{x:2*width/5-30,y:100,width:30,height:330},{x:2*width/5,y:200,width:60,height:30},{x:2*width/5,y:100,width:60,height:30},{x:4*width/5,y:0,width:30,height:500},{x:2*width/5,y:300,width:60,height:30},{x:2*width/5,y:400,width:60,height:30},[970,1000,470,481,1,leight,'Level 7']] 
var leight = [boxes,{x:width/3,y:-1000,width:30,height:1400},{x:width/3,y:400,width:100,height:10},{x:width/3,y:350,width:100,height:10},{x:width/3,y:300,width:100,height:10},{x:width/3,y:250,width:100,height:10},{x:width/3,y:200,width:100,height:10},{x:width/3,y:150,width:100,height:10},{x:800,y:100,width:30,height:400},[970,1000,470,481,1,lnine,'Level 8']]
var lsix = [boxes,{x:width/3,y:235,width:30,height:30},{x:2*width/3,y:0,width:30,height:500},[970,1000,470,481,1,lseven,'Level 6']]
var lfive = [boxes,{x:width/5-5,y:270,width:250,height:265},{x:2*width/5-5,y:380,width:255,height:265,nono:true},{x:3*width/5,y:270,width:250,height:265},{x:width/5-5,y:0,width:250,height:250},{x:3*width/5,y:0,width:250,height:250},[970,1000,470,481,1,lsix,'Level 5']]
var lfour = [boxes,{x:300,y:440,width:30,height:60},{x:width/2 + 50,y:175,width:30,height:450},[970,1000,470,481,1,lfive,'Level 4']] 
var lthree = [boxes,{x:150, y:250,width:30, height:250},{x:300, y:250,width:30,height:250},{x:450, y:250,width:30, height:250},{x:600, y:250,width:30, height:250},{x:750, y:250,width:30, height:250},{x:180, y:450,width:600, height:50,nono:true},[970,1000,470,481,1,lfour,'Level 3']]
var ltwo = [boxes,{x:width/3,y:235,width:30,height:265},{x:2*width/3,y:235,width:30,height:265},[970,1000,470,481,1,lthree,'Level 2']]
var lone = [boxes,{x:width/2,y:235,width:30,height:265},[970,1000,470,481,1,ltwo,'Level 1']]
var under = function(player,block) {
	var cl = {
		x: player.x,
		y: player.y + player.height + 1
	}
	var fl = {
		x: player.x + width,
		y: player.y + player.height + 1
	}
	var ca = {
		x:block.x,
		y:block.y
	}
	var fa = {
		x: block.x + block.width,
		y: block.y
	}
	if(fl.x < ca.x && cl.y == ca.y) {
		player.grounded = false;
		player.jumping = true;
	}
	if(cl.x >  fa.x && cl.y == ca.y){
		player.grounded = false;
		player.jumping = true;
	}
}
boxes.push({
	x:0,
	y:-1000,
	width:10,
	height:height + 1000
})
boxes.push({
	x:-1000,
	y:height-10,
	width:width+2000,
	height:10000
})
boxes.push({
	x:width-10,
	y:-1000,
	width:500,
	height:height + 1000
})

var counter = 0;
var counterTwo = 0;
var current_level = boxes;
boxes.push([970,1000,470,481,1,lone,'Welcome to bhoppers, proceed to the bottom right'])
function menu() {
	ctx.fillStyle = 'grey';
	ctx.fillRect(400,200,170,50);
	ctx.fillRect(400,300,170,50);
	for (var i = 0;i < items.length; i++) {
		ctx.font="30px Courier";
		ctx.fillStyle = 'red'
		ctx.fillText(items[i].word,items[i].x+4,items[i].y+30)
	
	}
	
}
var items = [{x:400,y:300,w:170,h:50,action:countDown,word:'2 Players not done; beta version'},{x:400,y:200,w:170,h:50,action:update,word:'1 Player'}]
var frictionTwo = 0.8

function countDown() {
	var timer = 3
	ctx.clearRect(0,0,width,height);
	ctx.font="30px Courier";
	ctx.fillStyle = 'black';
	ctx.fillText(timer,width/2-30,height/2);
	var timeMe = setInterval(function(){
		ctx.clearRect(0,0,width,height);
		timer -= 1;
		
		if (timer != 0) {
		ctx.font="30px Courier";
		ctx.fillStyle = 'black';
		ctx.fillText(timer,width/2-30,height/2);
		} else {
			ctx.font="30px Courier";
			ctx.fillStyle = 'black';
			ctx.fillText('Go!',width/2-30,height/2);
		}
		if (timer<0) {
			clearInterval(timeMe);
			doubleUp()
		}
	}, 1000)
}
var timerup = 0
function countUp() {
	
	
	ctx.font="30px Courier";
	ctx.fillStyle = 'black';
	ctx.fillText(timerup,width-120,20);
	var timeMe = setInterval(function(){
		ctx.clearRect(0,0,width,height);
		timerup += 1;
		ctx.font="30px Courier";
		ctx.fillStyle = 'black';
		ctx.fillText(timerup,width-120,20);
		if (current_level === finish){
		clearInterval(timeMe);
	}
	}, 1000)
}

var keep = true

function doubleUp() {

	////////// 
	///Player 1
	//////////
	if (keys[39]) {
		if (player.velX < player.speed) {
			player.velX++;
		};
	}
	if (keys[37]) {
		if (player.velX > -player.speed) {
			player.velX--;
		};
	}
	if (keys[38]) {
		if (!player.jumping && player.grounded){
			player.jumping = true;
			player.velY = -player.speed*1.5;
			player.grounded = false;
			player.velY += gravity;
			friction = .99;
			player.speed = 3;
			
		} 
		if(counter < 670 && keys[39] || keys[37] && counter < 670 && player.velX != 0)
			counter += 20;
		player.speed += counter/10000;
	} else {
		counter = 0;
		player.speed = 3
	}
	
	//////////////////
	// Player 2
	//////////////////
	if (keys[68]) {
		if (playerTwo.velX < playerTwo.speed) {
			playerTwo.velX++;
		};
	}
	if (keys[65]) {
		if (playerTwo.velX > -playerTwo.speed) {
			playerTwo.velX--;
		};
	}
	if (keys[87]) {
		if (!playerTwo.jumping && playerTwo.grounded){
			playerTwo.jumping = true;
			playerTwo.velY = -playerTwo.speed*1.5;
			playerTwo.grounded = false;
			playerTwo.velY += gravity;
			frictionTwo = .99;
			playerTwo.speed = 3;
			
		} 
		if(counterTwo < 670 && keys[65] || keys[68] && counterTwo < 670 && playerTwo.velX != 0)
			counterTwo += 20;
		playerTwo.speed += counterTwo/10000;
	} else {
		counterTwo = 0;
		playerTwo.speed = 3
	}
	ctx.clearRect(0,0,width,height);
	player.velX *= friction;
	player.velY += gravity;
	player.grounded = false;
	playerTwo.velX *= frictionTwo;
	playerTwo.velY += gravity;
	playerTwo.grounded = false;
	ctx.beginPath();
	ctx.font="30px Courier";
	ctx.fillStyle = 'black';
	ctx.fillText(current_level[current_level.length-1][6],width/2-current_level[current_level.length-1][6].length*9,100);
	ctx.fillText("Player 1: " + player.points,40,40);
	ctx.fillText("Player 2: " + playerTwo.points,width-240,40);
	    for (var i = 0; i < current_level.length-1; i++) {
			if (current_level[i] != undefined){
			if (current_level[i].length > 1 && typeof current_level[i] == 'object' && current_level[i].length < 5){
				for (var a = 0; a < current_level[i].length; a++){
					if (current_level[i][a].nono != undefined){

						ctx.fillStyle = 'green';
						ctx.fillRect(current_level[i][a].x, current_level[i][a].y, current_level[i][a].width, current_level[i][a].height);
					} 
					
					else  {
						ctx.fillStyle = 'black';
						ctx.rect(current_level[i][a].x, current_level[i][a].y, current_level[i][a].width, current_level[i][a].height);
					}  
			
						var dir = colCheck(player, current_level[i][a])
						var dirTwo = colCheck(playerTwo, current_level[i][a])
					
					if (dirTwo === "l" || dirTwo === "r") {
					
					playerTwo.velX = 0;
					if (counter > 40) {
						counter -= 50;
					
					}
					if (counterTwo > 40) {
						counterTwo -= 50;
					}
					if(current_level[i].nono) {
						playerTwo.velX = 0;
						playerTwo.velY = 0;
						playerTwo.x = 1;
						playerTwo.y = 489;
					}
				} else if (dirTwo === "b") {
					if(current_level[i].nono) {
						playerTwo.velX = 0;
						playerTwo.velY = 0;
						playerTwo.x = 1;
						playerTwo.y = 489;
					}
		
					playerTwo.grounded = true;
					playerTwo.jumping = false;
					frictionTwo = 0.9
				} else if (dirTwo === "t") {
					if (current_level[i].nonblocking == undefined) {
							if (current_level[i].nonblocking == true) {
						playerTwo.velY *= -1;
				}
					}
					if(current_level[i].nono) {
						playerTwo.velX = 0;
						playerTwo.velY = 0;
						playerTwo.x = 1;
						playerTwo.y = 489;
						
					}
				}
					
				if (dir === "l" || dir === "r") {
					
					player.velX = 0;
					if (counter > 40) {
						counter -= 50;
				
					}
					if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
					}
				} else if (dir === "b") {
					if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
					}
					player.grounded = true;
					player.jumping = false;
					friction = 0.9
				} else if (dir === "t") {
					if (current_level[i].nonblocking == undefined) {
							if (current_level[i].nonblocking == true) {
					
						player.velY *= -1;
				}
					}
					if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
						
					}
				}
				
				}
			}
			}
				if (current_level[i].nono != undefined){

						ctx.fillStyle = 'green';
						ctx.fillRect(current_level[i].x, current_level[i].y, current_level[i].width, current_level[i].height);
						
					} else if (current_level[i].nonblocking != undefined){
						ctx.fillStyle = 'purple';
						ctx.fillRect(current_level[i].x, current_level[i].y, current_level[i].width, current_level[i].height);

					}
					
					else {
						ctx.fillStyle = 'black';
						ctx.rect(current_level[i].x, current_level[i].y, current_level[i].width, current_level[i].height);
					}

        
		if (current_level[i].length === undefined) {
			
					var dir = colCheck(player, current_level[i]);
					var dirTwo = colCheck(playerTwo, current_level[i]);
			}
		if (dirTwo === "l" || dirTwo === "r") {
			if (current_level[i].nonblocking != true) {
            playerTwo.velX = 0;
			if(current_level[i].nono) {
						playerTwo.velX = 0;
						playerTwo.velY = 0;
						playerTwo.x = 1;
						playerTwo.y = 489;
					}
					
			if (counterTwo > 40) {
			counterTwo -= 50;
			}
            }
        } else if (dirTwo === "b") {
			if(current_level[i].nono) {
				playerTwo.velX = 0;
				playerTwo.velY = 0;
				
				playerTwo.x = 1;
				playerTwo.y = 489;
			}
			if (current_level[i].nonblocking != true) {
            playerTwo.grounded = true;
            playerTwo.jumping = false;
			frictionTwo = 0.8
			}
			
        } else if (dirTwo === "t") {
			
			if(current_level[i].nono) {
						playerTwo.velX = 0;
						playerTwo.velY = 0;
						playerTwo.x = 1;
						playerTwo.y = 489;

					}
			if (current_level[i].nonblocking == true) {
				if (playerTwo.speed > 4.4){
					counterTwo -= 800;
				} else {
					counterTwo -= 300;
				}
			}
			if (playerTwo.velY < 0) {
				if (current_level[i].nonblocking != true) {
					playerTwo.velY *= -1;
				}
				
			}
        }
        if (dir === "l" || dir === "r") {
			if (current_level[i].nonblocking != true) {
            player.velX = 0;
			if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
					}
					
			if (counter > 40) {
			counter -= 50;
			}
            }
        } else if (dir === "b") {
			if(current_level[i].nono) {
				player.velX = 0;
				player.velY = 0;
				
				player.x = 1;
				player.y = 489;
			}
			if (current_level[i].nonblocking != true) {
            player.grounded = true;
            player.jumping = false;
			friction = 0.8
			}
			
        } else if (dir === "t") {
			
			if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
				
					}
			if (current_level[i].nonblocking == true) {
				if (player.speed > 4.4){
					counter -= 800;
				} else {
					counter -= 300;
				}
			}
			if (player.velY < 0) {
				if (current_level[i].nonblocking != true) {
					player.velY *= -1;
				}
				
			}
        }

    }
	ctx.fillStyle = 'black';
	ctx.fill();

	if(player.grounded){
     player.velY = 0;
	}	
	if(playerTwo.grounded){
     playerTwo.velY = 0;
	}	
	ctx.fillStyle = 'blue';
	ctx.fillRect(player.x,player.y,player.width,player.height);
	ctx.fillStyle = 'red';
	ctx.fillRect(playerTwo.x,playerTwo.y,playerTwo.width,playerTwo.height);

	if (player.x >= width-player.width) {
    player.x = width-player.width;
	} else if (player.x <= 0) {
    player.x = 0;
	};
	if (current_level[current_level.length-1][5] != undefined && player.x > current_level[current_level.length-1][0] && player.x < current_level[current_level.length-1][1] && player.y > current_level[current_level.length-1][2] && player.y < current_level[current_level.length-1][3]){
		if (current_level[current_level.length-1][5] != 'undefined'){
		current_level= current_level[current_level.length-1][5]
	}
		player.x = current_level[current_level.length-1][4]
		player.y = current_level[current_level.length-1][3]
		playerTwo.x = current_level[current_level.length-1][4]
		playerTwo.y = current_level[current_level.length-1][3]
		counterTwo = 0;
		counter = 0;
		player.velX = 0;
		player.velY = 0;
		playerTwo.velX = 0;
		playerTwo.velY = 0;
		player.speed = 3;
		playerTwo.speed = 3;
		if (current_level != lone){
			player.points += 1;
		}
		
	}
	if (current_level[current_level.length-1][5] != undefined && playerTwo.x > current_level[current_level.length-1][0] && playerTwo.x < current_level[current_level.length-1][1] && playerTwo.y > current_level[current_level.length-1][2] && playerTwo.y < current_level[current_level.length-1][3]){
		if (current_level[current_level.length-1][5] != 'undefined'){
		current_level= current_level[current_level.length-1][5]
	}
		player.x = current_level[current_level.length-1][4]
		player.y = current_level[current_level.length-1][3]
		playerTwo.x = current_level[current_level.length-1][4]
		playerTwo.y = current_level[current_level.length-1][3]
		counterTwo = 0;
		counter = 0;
		player.velX = 0;
		player.velY = 0;
		playerTwo.velX = 0;
		playerTwo.velY = 0;
		player.speed = 3;
		playerTwo.speed = 3;
		if (current_level != lone){
			playerTwo.points += 1;
		}
	}
	if (counter < -400) {
		counter += 20;
	}

	player.x += player.velX;
	player.y += player.velY;
	playerTwo.x += playerTwo.velX;
	playerTwo.y += playerTwo.velY;
	if (keep) {
		requestAnimationFrame(doubleUp);
	}	
}


















































var asdfasdf = 0




function update() {
	if (asdfasdf === 0){
		countUp();
		asdfasdf += 1;
	}
	if (keys[39]) {
		if (player.velX < player.speed) {
			player.velX++;
		};
	}
	if (keys[37]) {
		if (player.velX > -player.speed) {
			player.velX--;
		};
	}
	if (keys[38] || keys[32]) {
		if (!player.jumping && player.grounded){
			player.jumping = true;
			player.velY = -player.speed*1.5;
			player.grounded = false;
			player.velY += gravity;
			friction = .99;
			player.speed = 3;
			
		} 
		if(counter < 670 && keys[39] || keys[37] && counter < 670 && player.velX != 0)
			counter += 20;
		player.speed += counter/10000;
	} else {
		counter = 0;
		player.speed = 3
	}

	ctx.clearRect(0,0,width,height);
	player.velX *= friction;
	player.velY += gravity;
	player.grounded = false;

	ctx.beginPath();
	ctx.font="30px Courier";
	ctx.fillStyle = 'black';
	ctx.fillText(current_level[current_level.length-1][6],width/2-current_level[current_level.length-1][6].length*9,100);
	    for (var i = 0; i < current_level.length-1; i++) {
			if (current_level[i] != undefined){
			if (current_level[i].length > 1 && typeof current_level[i] == 'object' && current_level[i].length < 5){
				for (var a = 0; a < current_level[i].length; a++){
					if (current_level[i][a].nono != undefined){

						ctx.fillStyle = 'green';
						ctx.fillRect(current_level[i][a].x, current_level[i][a].y, current_level[i][a].width, current_level[i][a].height);
					} 
					
					else  {
						ctx.fillStyle = 'black';
						ctx.rect(current_level[i][a].x, current_level[i][a].y, current_level[i][a].width, current_level[i][a].height);
					}  
			
						var dir = colCheck(player, current_level[i][a])
					
					
					
				if (dir === "l" || dir === "r") {
					player.velX = 0;
					
					if (counter > 40) {
						counter -= 50;
						console.log(counter)
					}
					if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
					}
				} else if (dir === "b") {
					if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
					}
					player.grounded = true;
					player.jumping = false;
					friction = 0.9
				} else if (dir === "t") {
					if (current_level[i].nonblocking == undefined) {
							if (current_level[i].nonblocking == true) {
						console.log(current_level[i].nonblocking)
						player.velY *= -1;
				}
					}
					if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
						
					}
				}
				
				}
			}
			}
				if (current_level[i].nono != undefined){

						ctx.fillStyle = 'green';
						ctx.fillRect(current_level[i].x, current_level[i].y, current_level[i].width, current_level[i].height);
						
					} else if (current_level[i].nonblocking != undefined){
						ctx.fillStyle = 'purple';
						ctx.fillRect(current_level[i].x, current_level[i].y, current_level[i].width, current_level[i].height);

					}
					
					else {
						ctx.fillStyle = 'black';
						ctx.rect(current_level[i].x, current_level[i].y, current_level[i].width, current_level[i].height);
					}

        
		if (current_level[i].length === undefined) {
			
					var dir = colCheck(player, current_level[i]);
				
			}

        if (dir === "l" || dir === "r") {
			if (current_level[i].nonblocking != true) {
            		player.velX = 0;
			if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
					}
					
			if (counter > 40) {
			counter -= 50;
			}
            }
        } else if (dir === "b") {
			if(current_level[i].nono) {
				player.velX = 0;
				player.velY = 0;
				
				player.x = 1;
				player.y = 489;
			}
			if (current_level[i].nonblocking != true) {
            player.grounded = true;
            player.jumping = false;
			friction = 0.8
			}
			
        } else if (dir === "t") {
			
			if(current_level[i].nono) {
						player.velX = 0;
						player.velY = 0;
						player.x = 1;
						player.y = 489;
					console.log(current_level.nono)
					}
			if (current_level[i].nonblocking == true) {
				if (player.speed > 4.4){
					counter -= 800;
				} else {
					counter -= 300;
				}
			}
			if (player.velY < 0) {
				if (current_level[i].nonblocking != true) {
					player.velY *= -1;
				}
				
			}
        }

    }
	ctx.fillStyle = 'black';
	ctx.fill();

	if(player.grounded){
     player.velY = 0;
	}	
	ctx.fillStyle = 'blue';
	ctx.fillRect(player.x,player.y,player.width,player.height);

	if (player.x >= width-player.width) {
    player.x = width-player.width;
	} else if (player.x <= 0) {
    player.x = 0;
	};
	if (current_level[current_level.length-1][5] != undefined && player.x > current_level[current_level.length-1][0] && player.x < current_level[current_level.length-1][1] && player.y > current_level[current_level.length-1][2] && player.y < current_level[current_level.length-1][3]){
		if (current_level[current_level.length-1][5] != 'undefined'){
		current_level= current_level[current_level.length-1][5]
	}
		player.x = current_level[current_level.length-1][4]
		
	}
	if (counter < -400) {
		counter += 20;
	}
	player.x += player.velX;
	player.y += player.velY;
	
	requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function(e){
	if (e.srcElement.nodeName !== 'INPUT') {
    e.preventDefault();
    keys[e.keyCode] = true; 
  }
});
document.body.addEventListener("keyup", function(e){
	if (e.srcElement.nodeName !== 'INPUT') {
    e.preventDefault();
    keys[e.keyCode] = false;    
  }
});
document.body.addEventListener("keydown", function(e){
	if (e.keyCode === 82){
	player.velX = 0;
	player.velY = 0;			
	player.x = 1;
	player.y = 489;	
	}
});
document.body.addEventListener("keydown", function(e){
	if (e.keyCode === 81){
	player.velX = 0;
	player.velY = 0;			
	player.x = 1;
	player.y = 489;	
	current_level = boxes;
	}
	if (e.keyCode === 13) {
		
		checktext();
	}
	
});
var selected = false;
window.addEventListener("click", function(e) {
	var x = e.pageX,
		y = e.pageY;
	for (var i = 0;i < items.length; i++) {
		if (x > items[i].x && x < items[i].x + items[i].w && y > items[i].y && y < items[i].y + items[i].h) {
			if (selected == false) {
				items[i].action();
				selected = true
			}
		}
	
	
	}
});
window.addEventListener("load", function() {
	menu();
});
