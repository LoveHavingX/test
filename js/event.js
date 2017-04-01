function popUp(winURL){
	window.open(winURL, "popup", "width=320,height=480")
}

window.onload = preparelinks;
function preparelinks(){
	var links = document.getElementsByClassName("popup");
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function() {
			popUp(this.getAttribute("href"));
			return false;
		}
		
	}
}
