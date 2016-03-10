window.addEventListener("load", doFirst, false); /*called as soon our winodw loads*/

function doFirst(){
	var savebtn = document.getElementById("button");
	savebtn.addEventListener("click", saveCrap, false)
	display();
}

function saveCrap(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one, two); //Store on computer
	display();
	document.getElementById("one").value = "";
	document.getElementById("two").value = "";
}

function display(){
	var rightbox = document.getElementById("rightbox");
	rightbox.innerHTML = "";
	
	for(var i =0; i <sessionStorage.length; i++){
		var a = sessionStorage.key(i); /*a session is as long as the browser is open*/
		var b = sessionStorage.getItem(a);
		rightbox.innerHTML += a + "-" +b+"<br />";
	}
}


/*
function doFirst(){
	var savebtn = document.getElementById("button");
	savebtn.addEventListener("click", saveCrap, false)
}

function saveCrap(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one, two); //Store on computer
	
	display(one);
}

function display(one){
	var rightbox = document.getElementById("rightbox");
	var two = sessionStorage.getItem(one);
	rightbox.innerHTML = "Name of variable: "+one+"<br />Value: "+two;
}
*/