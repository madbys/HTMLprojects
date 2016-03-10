window.addEventListener("load", doFirst, false);


function doFirst(){
	var x = document.getElementById('canvasX');
	_canvas7 = x.getContext('2d');
	
	//Images on the canvas
	var pic = new Image();
	pic.src = "images/dragon.jpg"
	
	//image need to load before putting it on the canvas
	pic.addEventListener("load", function(){_canvas7.drawImage(pic, 0, 0, x.width, x.height)}, false);
}

function old6(){
	
	//save and restore the canvas
	var x = document.getElementById('canvasX');
	_canvas6 = x.getContext('2d');
	
	//text
	_canvas6.font = "bold 22px Tahoma";
	_canvas6.textAlign = "start";
	
	_canvas6.save(); //save all before this
	_canvas6.fillText("let's begin", 10, 30);
	
	_canvas6.rotate(1);
	_canvas6.fillText("after rotation", 60, 10);
	
	//back to normal = before save
	_canvas6.restore();
	_canvas6.fillText("let's restore", 10, 30);
}

function old5(){
	var x = document.getElementById('canvasX');
	_canvas5 = x.getContext('2d');

		//text
		_canvas5.font = "bold 22px Tahoma";
		_canvas5.textAlign = "start";
		_canvas5.fillText("Start", 10, 30);
		
		//transformations
		_canvas5.translate(150,150); //move the canvas
		_canvas5.fillText("After translate", 0, 0);
		
		_canvas5.rotate(1); //value in rad! 360degree = 2pi rad 
		_canvas5.fillText("After rotate", 0, 0);
		
		_canvas5.scale(1.5,4);
		_canvas5.strokeText("After scale + stroke", 0, 20); //It's the canvas that rotates!
}

function old4(){
	var x = document.getElementById('canvasX');
	_canvas4 = x.getContext('2d');

	//DRAW SHADOW -before text!
	_canvas4.shadowOffsetX = 4; //a property
	_canvas4.shadowOffsetY = 4;
	_canvas4.shadowBlur = 6;
	_canvas4.shadowColor = 'rgba(0,0,255,.5)'; //red, green, blue, alfa/transparent
	
	//DRAW TEXT
	_canvas4.font = "bold 36px Tahoma";
	_canvas4.textAlign = "end";
	_canvas4.fillText("omgwtfbbq?!", 300, 100); /* what text, x, y */
	//_canvas4.strokeText("omgwtfbbq?!", 300, 500); /* what text, x, y */
}
function old3(){
	var x = document.getElementById('canvasX');
	_canvas3 = x.getContext('2d');
	
	//Draw a line from moveto to lineto's
	_canvas3.beginPath();
	_canvas3.moveTo(50,50);
	_canvas3.lineTo(70,250);
	_canvas3.lineTo(300,200);
	_canvas3.closePath(); //back to "moveto"
	_canvas3.stroke(); //DRAW!
}
function old2(){
	var x = document.getElementById('canvasX');
	_canvas2 = x.getContext('2d');
	
	//gradient
	var g = _canvas.createLinearGradient(0,0,100,100); /*four param: x, y , tox, toy*/
	g.addColorStop(.0,"blue"); /*two param: where add? what color?*/
	g.addColorStop(.5,"green");
	g.addColorStop(1,"red");
	_canvas2.fillStyle = g;
	_canvas2.fillRect(0,0,100,100);
}

function old1(){
	var x = document.getElementById('canvasX');
	can1 = x.getContext('2d');
	
	can1.strokeStyle="blue";
	can1.strokeRect(10, 10, 100, 100); /*x-start,y-start, width, height*/
	
	can1.fillStyle="blue";
	can1.fillRect(10, 120, 100, 100); /*x-start,y-start, width, height*/
	can1.clearRect(20,130,45,65);
}