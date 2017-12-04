let navbutton = document.getElementById("navBtn");
let navmenu = document.getElementById("nav-menu");

navbutton.addEventListener("click", showhidemenu);

function showhidemenu() {
	console.log("t1" + navmenu.style.display);
	if (navmenu.style.display == "none"){
	console.log("t2" + navmenu.style.display);
	navmenu.style.display = "inline";
	}
	else if (navmenu.style.display == ""){
		navmenu.style.display = "inline";
	}
	else {
		navmenu.style.display = "none";
	}
	
}