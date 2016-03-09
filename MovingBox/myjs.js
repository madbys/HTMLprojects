window.addEventListener("load", doFirst, false);

function doFirst(){
	var x = document.getElementById('canvasX');
	_canvas = x.getContext('2d');
	
	//animation for games
	window.addEventListener("mousemove", myFunction, false);
}

function myFunction(e){
	//follows the mousepointer
	
	_canvas.clearRect(0,0,600,400);
	var xPos = e.clientX;
	var yPos = e.clientY;
	
	//draw rectangle
	_canvas.fillRect(xPos-50, yPos-50, 100, 100); //x-50 center the mouse
}