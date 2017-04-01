function addLoadEvent (func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		oldonload();
		func();
	}
}

addLoadEvent(prepareGallery);

function prepareGallery(){
	console.log("in prepareGallery");
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++){
		links[i].onclick = function() {
			return showPic(this) ? false:true;
		}
	}
}

function showPic(whichpic){
	console.log("in showPic");
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	
	if(document.getElementById("description")){
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if(description.firstChild.nodeType == 3){
			description.childNodes[0].nodeValue = text;
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

//显示body里面有多少个子元素
//function countBodyChildren(){
//	var body_element = document.getElementsByTagName("body")[0];
//	alert(body_element.childNodes.length);
//}
//
//window.onload = countBodyChildren();