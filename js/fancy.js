function fancyCheckItems(e, l, m, g, b) {
    createElements();
    $("#msgbox").css("display", "block");
    $("#fancyCloseBtn").css("display", "block");
    $("#fancyCloseBtn").css("zIndex", 6);
    $("#bgFade").css("display", "block");
    var j = e;
    var f = l;
    var k = g;
    var i = m;

//    document.getElementById("msgbox").style.width = "530px";
//    document.getElementById("msgbox").style.height = "150px";
    document.getElementById("bgFade").style.width = j;
    document.getElementById("bgFade").style.height = f;
    $("#bgFade").css("zIndex", 3);
    document.getElementById("bgFade").style.left = k;
    document.getElementById("bgFade").style.top = i;
    var a = j.split("px");
    var h = f.split("px");
    var c = $("#msgbox").css("width");
    var d = $("#msgbox").css("height");
    $("#msgbox").css("zIndex", 6);
    msgWidthSplit = c.split("px");
    msgHeightSplit = d.split("px");
    msgW = msgWidthSplit[0] / 2;
    msgH = msgHeightSplit[0] / 2;
    finalWidth = a[0] / 2;
    finalHeight = h[0] / 2;
    applyWidth = finalWidth - msgW;
    applyHeight = finalHeight - msgH;
    changeHeight = applyHeight + b;
    changeWidth = finalWidth + msgW;
    document.getElementById("msgbox").style.left = applyWidth + "px";
    document.getElementById("msgbox").style.top = changeHeight + "px";
    document.getElementById("fancyCloseBtn").style.top = (changeHeight - 153) + "px";
    document.getElementById("fancyCloseBtn").style.left = (changeWidth - 120) + "px"
}



function createElements() {
    var e = document.getElementById("iframes");
    var c = document.createElement("span");
    var a = document.createElement("span");
    var b = document.createElement("span");
    var d = document.createElement("img");
    c.id = "bgFade";
    a.id = "msgbox";
    b.id = "fancyCloseBtn";
    c.setAttribute("style", "position:absolute; display:none; margin:0px; left:0px; top:0px;  background-color:#000; border-radius:0px; opacity:0.6");
    c.setAttribute("onclick", "bgCloseFunction(event)");
    a.setAttribute("style", "position:absolute; display:relative; background-color:#fff; border-radius:5px; text-shadow:#222");
    b.setAttribute("style", "position:absolute; left:580px; display:none;");
    b.setAttribute("onclick", "fancyCloseFunction(event)");
    d.src = "../images/closeu.png";
    d.setAttribute("style", "width:319px", "height:286px");
    b.appendChild(d);
    e.appendChild(c);
    e.appendChild(a);
    e.appendChild(b)
}



function bgCloseFunction(a) {
    a.preventDefault();
    $("#msgbox").css("display", "none");
    $("#fancyCloseBtn").css("display", "none");
    $("#bgFade").css("display", "none");
    $("#cDelete").remove()
}

function fancyCloseFunction(a) {
    a.preventDefault();
    $("#msgbox").css("display", "none");
    $("#fancyCloseBtn").css("display", "none");
    $("#bgFade").css("display", "none");
    $("#cDelete").remove()
}

function popUpCloseFunction(a) {
    a.preventDefault();
    popUpClicked = 0;
    $("#msgbox").css("display", "none");
    $("#fancyCloseBtn").css("display", "none");
    $("#bgFade").css("display", "none");
    $("#popUpCloseBtn").css("display", "none");
    $("#popupActivity").css("display", "none");
    $("#onPageDisable").css("display", "none");
    $("#popUpCloseBtn").remove();
    $("#onPageDisable").remove()
}

function bgFadeClick(a) {
    a.preventDefault()
};