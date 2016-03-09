function doFirst(){
	/*get my variables*/
		barSize = 600; 
		myMovie = document.getElementById('myMovie'); /*get myMovie from htmlfile*/
		playButton = document.getElementById('playButton');
		bar = document.getElementById('defaultBar');
		progressBar = document.getElementById('progressBar');
		
	/*event listeners*/
	playButton.addEventListener('click', playOrPause, false); /*three variables: what, todo, ?*/
	bar.addEventListener('click', clickedBar, false);
}

function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){ /*is paused or endeded? otherwise is playing*/
		myMovie.pause(); /*pause if playing*/
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
	}else{
		myMovie.play(); /*play to start or if paused*/
		playButton.innerHTML='Pause';
		updateBar = setInterval(update, 500);	/*called every half a second*/
	}
}

function update(){
	if(!myMovie.ended){
		var size = parseInt(myMovie.currentTime*barSize/myMovie.duration); /*bar size*/
		progressBar.style.width = size+'px'; /*change width in pixel size*/
	}else{
		progressBar.style.width='0px';
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
	}
}

function clickedBar(e){ /*e is position of the mouse*/
	if(!myMovie.paused && !myMovie.ended){
		var mouseX = e.pageX-bar.offsetLeft; /*how far from the left... the x-pos of the mouse*/
		var newtime = mouseX*myMovie.duration/barSize;
		myMovie.currentTime = newtime;
		progressBar.style.width = mouseX+'px'; /*change width in pixel size*/
	}
}

window.addEventListener('load', doFirst, false); /*called as soon our winodw loads*/
