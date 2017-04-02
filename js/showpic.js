addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

function addLoadEvent (func) {
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function (){
            oldonload();
        	func();
		}
	}
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "img/52325380_p0_master1200.jpg");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	desctest = document.createTextNode("choose a image");
	description.appendChild(desctest);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder, gallery);
	insertAfter(description, placeholder);

}


function prepareGallery(){
	console.log("in prepareGallery");
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++){
		links[i].onclick = function() {
			return !showPic;
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