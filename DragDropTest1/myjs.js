window.addEventListener("load", doFirst, false); /*called as soon our winodw loads*/

//functions
function doFirst(){
	mypic = document.getElementById('dragonpic');
	mypic.addEventListener("dragstart", startDrag, false);
	mypic.addEventListener("dragend", endDrag, false);
	
	myleftbox = document.getElementById('leftbox');
	myleftbox.addEventListener("dragenter", dragEnter, false);
	myleftbox.addEventListener("dragleave", dragLeave, false);
	myleftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	myleftbox.addEventListener("drop", dropped, false);
}

function endDrag(e){
	pic = e.target; /*the pic is the target*/
	pic.style.visibility= 'hidden'; /*hiding by css*/

}

function dragEnter(e){
	e.preventDefault();
	myleftbox.style.background="SkyBlue";
	myleftbox.style.border="3px solid red";
}

function dragLeave(e){
	e.preventDefault();
	myleftbox.style.background="White";
	myleftbox.style.border="3px solid blue";
}

function startDrag(e){
	var code = '<img id="dragonpic" src="images/dragon.jpg">'; /*now we have a reference to the image*/
	e.dataTransfer.setData('Text', code); /*textinfo stores in code*/
}

function dropped(e){
	e.preventDefault();
	myleftbox.innerHTML = e.dataTransfer.getData('Text');
}

