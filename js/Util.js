/**
 * Created by Administrator on 2017/4/2.
 */
//在一个元素节点后面插入新的元素节点
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

//标记文档加载结束事件
function addLoadEvent (func) {
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        oldonload();
        func();
    }
}