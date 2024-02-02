var myVal = "";
overAllpopup = 22;
var ContentHeight = 422;
var TimeToSlide = 250.0;
var flags;
for(i=1;i<overAllpopup;i++){
	window['flag'+i]=0;
	
}

var openAccordion = '';
var sPnumber = "";
holdBtnVal=0;
rs = 0;
setA = [];
netA = [];

cFlag = 0;
var Ids = "";
newFlags = [];
var myActLength = 0;
for (i = 0; i <= overAllpopup; i++) {
    newFlags[i] = 0
}
var jsArray = new Array("../script/source/jquery.fancybox.js?v=2.1.4", "../js/jquery-1.4.4.js", "jquery-ui.js", "../js/accordion.js");
var cssArray = new Array("../styles/ContentPage.css", "../styles/content-abc.css", "../styles/content-style.css");
var textName = new Array("WATCH AND LISTEN", "READING 1", "READING 2", "LANGUAGE DEVELOPMENT", "CRITICAL THINKING", "WRITING");
var hrefName = new Array("ULRWA02U01P002.html", "ULRWA02U01P008.html", "ULRWA02U01P015.html", "ULRWA02U01P020.html", "ULRWA02U01P023.html", "ULRWA02U01P028.html");
for (i = 0; i <= overAllpopup; i++) {
    setA[i] = rs
}
var widthGiven;
var heightGiven;
var flag = 0;
$(document).ready(function() {
    var a = document.getElementById("getcontent");
    for (j = 0; j <= overAllpopup; j++) {
        var f = "popupBtnId" + j;
		
        var d = document.getElementById(f);
        var e = $("#" + f + " img").attr("src");
        d.onclick = function(h) {
            h.preventDefault();
			resetFlag()
            var g = this.id.charAt(this.id.length - 1);
			
           holdBtnVal=g;
			
			gIds=document.getElementById(this.id).hasAttribute('data-popupBtn');
			
			if(gIds){
				gIds=document.getElementById(this.id).getAttribute('data-popupBtn');
				idHold='popupBtnId'+gIds;
				
			}else{
				idHold = this.id;
			}
			
            tempSplit = "popup" + idHold.charAt(idHold.length - 1);
			
            storedStorage = document.getElementById(tempSplit).hasAttribute("data-storedStorage");
            inputBox = document.getElementById(tempSplit).hasAttribute("data-inputBox");
            if (storedStorage == true) {
                setStorage = document.getElementById(tempSplit).getAttribute("data-storedStorage");
                setInput = document.getElementById(tempSplit).getAttribute("data-inputBox");
                inputString = document.getElementById(tempSplit).getAttribute("data-inputString");
                load_answer(setStorage, setInput, inputString)
            }
            rbStorage = document.getElementById(tempSplit).hasAttribute("data-rbStorage");
            if (rbStorage == true) {
                rb_answer(tempSplit)
            }
			
            cbStorage = document.getElementById(tempSplit).hasAttribute("data-cbStorage");
            if (cbStorage == true) {
                cb_answer(tempSplit)
            }
            taStorage = document.getElementById(tempSplit).hasAttribute("data-taStorage");
            if (taStorage == true) {
                ta_storage = document.getElementById(tempSplit).getAttribute("data-taStorage");
                ta_input = document.getElementById(tempSplit).getAttribute("data-taBox");
                ta_string = document.getElementById(tempSplit).getAttribute("data-taString");
                ta_answer(ta_storage, ta_input, ta_string)
            }
            thStorage = document.getElementById(tempSplit).hasAttribute("data-thStorage");
            if (thStorage == true) {
                th_answer(tempSplit)
            }
            getAct = document.getElementById(this.id).hasAttribute("data-activityType");
            if (getAct) {
                activityAvailable(this.id)
            }
            dualPlay = document.getElementById(this.id).hasAttribute("data-dualPlay");
            if (dualPlay) {
                dualPlay = document.getElementById(this.id).getAttribute("data-dualPlay");
                if (dualPlay == "yes") {
                    imageChange(this.id);
                    getAct = document.getElementById(this.id).hasAttribute("data-activityType");
                    if (getAct) {
                        activityAvailable(this.id)
                    }
                }
            }
			
            h.preventDefault();
            
			Ids = idHold;
			popupClicked(Ids,this.id)
        };
		
        var c = "popupCloseBtnId" + j;
        var b = document.getElementById(c);
        if (flag == 1) {
            b.onclick = function(h) {
                var g = this.id;
                getValue = g.charAt(g.length - 1);
                h.preventDefault();
                popupCloseBtnFunction(getValue, "event")
            }
        }
    }
	
	
});

function resetFlag(){
	
	$("#loadContent").empty();
        gFlag = 0;
		openAccordion=null;
		var flags;
		for(i=1;i<overAllpopup;i++){
			window['flag'+i]=0;
		}
		if (document.getElementById("getcontent").hasAttribute("data-video")) {
            var a = document.getElementById("getcontent").getAttribute("data-videoPoster");
            var b = document.getElementById("getcontent").getAttribute("data-videoId");
            displayVideoPoster(a, "none", b, "block")
        }
}


function displayVideoPoster(b, d, c, a) {
    videoPosterSplit = b.split("|");
    videosSplit = c.split("|");
    for (j = 0; j < videoPosterSplit.length; j++) {
        document.getElementById(videoPosterSplit[j]).style.display = d
    }
    for (k = 0; k < videosSplit.length; k++) {
        document.getElementById(videosSplit[k]).style.display = a
    }
}
var gFlag = 0;
$("#getcontent").click(function(c) {
    c.preventDefault();
    if (document.getElementById("getcontent").hasAttribute("data-video")) {
        var a = document.getElementById("getcontent").getAttribute("data-videoPoster");
        var b = document.getElementById("getcontent").getAttribute("data-videoId");
        displayVideoPoster(a, "block", b, "none")
    }
    popupCloseAll();
    if (gFlag == 0) {
        gFlag = 1;
        allpopupCloseBtn();
        setZero();
        loadContent = document.getElementById("loadContent");
        loadContent.innerHTML = myVal;
        urlPage = document.getElementById(this.id).getAttribute("data-urlPage");
		runAccordion(urlPage,event);
		if (!document.getElementById("getcontent").hasAttribute("data-noClose")) {
        	createClose = document.createElement("img");
        	createClose.src = "../images/close.png";
        	createClose.id = "closeContentId";
        	createClose.setAttribute("style", "position:relative; top:-570px; left:807px; width:35px; height:35px; z-index=500");
        	createClose.setAttribute("onclick", "closeBtnContent(event)");
        	loadContent.appendChild(createClose);
		}
        loadContent.style.display = "block";

        doAll(urlPage)
    } else {
       resetFlag();
    }
});

function getId(a) {
    parent.document.location.href = a
}

function popupClicked(b,idBtn) {
	
    $("#cImg").remove();
    getValue = b.charAt(b.length - 1);
    allpopupCloseBtn();
    createPopups(getValue,idBtn);
	
    if (setA[getValue] == 0) {
        window.popupBtnFunction(getValue);
        setZero();
        setA[getValue] = 1
    } else {
        setA[getValue] = 0;
        var a = "#popupCloseBtnId" + getValue;
        $(a).remove();
        popupCloseBtnFunction(getValue, "event")
    }
	clearAllButton();
}

function setZero() {
    for (i = 0; i <= overAllpopup; i++) {
        setA[i] = 0
    }
}

function externalLink(id,e){
	
	 e.preventDefault();
	 links = document.getElementById(id).getAttribute("data-links");
	 parent.document.location.href = links;
}



function createPopups(f,getidBtn) {
	
    var b = "popup" + f;
    var c = "#popup" + f;
    var a = a + "gVs";
    var d = d + "gVs";
    var b = document.getElementById(b);
    var e = ".bgimg" + f;
    var g = parseInt($(e).css("width"));
    a = document.createElement("div");
    d = document.createElement("img");
    a.id = "popupCloseBtnId" + f;
    a.setAttribute("onclick", "popupCloseBtnFunction(" + f + ",event)");
    a.setAttribute("style", "display:none");
    d.src = "../images/pop-close.png";
    widthGiven = $(c).is("[data-left]");
    heightGiven = $(c).is("[data-top]");
    clsBtnW = $(c).is("[data-width]");
    clsBtnH = $(c).is("[data-height]");
    if (clsBtnW) {
        clsBtnW = parseInt($(c).attr("data-width"))
    } else {
        clsBtnW = 30
    } if (clsBtnH) {
        clsBtnH = parseInt($(c).attr("data-height"))
    } else {
        clsBtnH = 30
    } if (widthGiven) {
        closeWidth = parseInt($(c).attr("data-left"))
    } else {
        closeWidth = parseInt($(c).css("width"));
        closeWidth = g - 133
    } if (heightGiven) {
        closeHeight = parseInt($(c).attr("data-top"))
    } else {
        closeHeight = parseInt($(c).css("height"));
        closeHeight = closeHeight - (closeHeight - 15)
    }
    d.setAttribute("style", "position:absolute;  left:" + closeWidth + "px; top:" + closeHeight + "px; width:" + clsBtnW + "px; height:" + clsBtnH + "px;");
    a.appendChild(d);
    b.appendChild(a);
	insideActivity=b.hasAttribute('data-insideActivity');
	
	if(insideActivity){
		insideActivity=b.getAttribute('data-insideActivity');
		splitidBtn=getidBtn.charAt(getidBtn.length - 1);
		hidePopup(f);
		
		getInsideAct= document.querySelectorAll('[data-displayAct="' + f + '"][data-act="' + splitidBtn + '"]');
		
		
		gIA=getInsideAct[f].getAttribute('id');
		
		document.getElementById(gIA).style.display='block';
		
		
		
	}
}

function hidePopup(f){
	dataAct = document.querySelectorAll('[data-act]');
	for(i=0;i<dataAct.length;i++){
		hideId=dataAct[i].getAttribute('id');
		document.getElementById(hideId).style.display='none'
	}
}

function popupBtnFunction(c) {
    cFlag = 0;
    $("#cImg").remove();
    var a = "#popup" + c;
    var b = "#popupCloseBtnId" + c;
    $(a).css("display", "block");
    $(b).css("display", "block")
}

function popupCloseBtnFunction(a, b) {
    b.preventDefault();
    for (i = 0; i <= overAllpopup; i++) {
        setA[i] = 0
    }
    window.popupCloseBtnEnhance(a)
	clearAllButton();
}

function popupCloseBtnEnhance(g) {
    cFlag = 0;
    dualPlay = document.getElementById(Ids).hasAttribute("data-dualPlay");
    if (dualPlay) {
        dualPlay = document.getElementById(Ids).getAttribute("data-dualPlay");
        if (dualPlay == "yes") {
            var f = document.getElementById(Ids).getAttribute("data-firstImage");
            var b = document.getElementById(Ids).getAttribute("data-anotherImage");
            $("#" + Ids + " img").attr("src", f);
            flag = 0;
            for (i = 0; i < myActLength; i++) {
                newFlags[i] = 0;
                var a = "popupBtnId" + i;
                var f = document.getElementById(a).getAttribute("data-firstImage")
            }
        }
    }
    var e = "#popup" + g;
    var d = "#popupCloseBtnId" + g;
    var c = "#popupFade" + g;
    $(e).css("display", "none");
    $(d).remove();
    $(c).css("display", "none")
}

function allpopupCloseBtn() {
    clearContent();
    $("#msgbox").css("display", "none");
    $("#fancyCloseBtn").css("display", "none");
    $("#bgFade").css("display", "none");
    for (i = 0; i <= overAllpopup; i++) {
        var c = "#popup" + i;
        var b = "#popupCloseBtnId" + i;
        var a = "#popupFade" + i;
        $(c).css("display", "none");
        $(b).remove();
        $(a).css("display", "none")
    }
}

function closeContentFunction(a) {
    cFlag = 0;
    $("#cImg").remove();
    a.preventDefault();
    clearContent()
}

function clearContent() {
    $("#stylesheets").remove();
    $("#scripts").remove();
    $("#accordion").remove();
    $("ul").remove();
    $("#line").remove();
    $("div#helpDiv").remove();
    $("#contents").remove();
    $("div#cImg").css("display", "none");
    $("#contentClsBtn").remove()
}

function popupCloseAll() {
    for (i = 0; i < myActLength; i++) {
        var a = "popupBtnId" + i;
        dualPlay = document.getElementById(a).getAttribute("data-dualPlay");
        firstImage = document.getElementById(a).getAttribute("data-firstImage");
        $("#" + a + " img").attr("src", firstImage)
    }
    for (i = 0; i <= overAllpopup; i++) {
        newFlags[i] = 0
    }
}

function load_answer(a, g, d) {
    var f = localStorage[a];
    if (f == undefined) {
        c = "          "
    } else {
        var c = f.split("|")
    }
    for (i = 0; i < g; i++) {
        var b = d + i;
        input = document.getElementById(b);
        if (c[i] != undefined) {
            input.innerHTML = c[i]
        }
    }
    anotherStringCheck = document.getElementById(tempSplit).hasAttribute("data-anotherString");
    if (anotherStringCheck) {
        dataAnotherBox = document.getElementById(tempSplit).getAttribute("data-anotherBox");
        for (i = 0; i < dataAnotherBox; i++) {
            anotherString = document.getElementById(tempSplit).getAttribute("data-anotherString");
            output = document.getElementById(anotherString + i);
            output.innerHTML = c[i]
        }
    }
}

function activityAvailable(f) {
    myAct = document.getElementById(f).getAttribute("data-activityType");
    myNumber = document.getElementById(f).getAttribute("data-activityNumber");
    var l = "data-" + myAct + '-order="0"';
    var a = document.querySelectorAll("[" + l + "]")[1].getAttribute("id");
    var p = "[data-" + myAct + "-button='save']";
    var c = "[data-" + myAct + "-button='clear']";
    var m = "[data-" + myAct + "-button='reload']";
    var d = "[data-" + myAct + "-order]";
    var h = "data-" + myAct + "-order";
    var s = "data-" + myAct + "-ls";
    var r = document.getElementById(a).querySelectorAll(p);
    var o = document.getElementById(a).querySelectorAll(c);
    var t = document.getElementById(a).querySelectorAll(m);
    var b = document.querySelectorAll(d)[0].getAttribute(h);
    var e = document.querySelectorAll(d)[0].getAttribute(s);
    var q = document.querySelectorAll(d)[0].getAttribute("id");
    if (myAct == "tt") {
        var n = document.querySelectorAll('[data-tt-drag="' + myNumber + '"]');
        for (i = 0; i < n.length; i++) {
            ttId = n[i].getAttribute("id");
            document.getElementById(ttId).style.backgroundColor = ""
        }
    }
    if (myAct == "ta") {
        var g = document.querySelectorAll('[data-ta-input="' + myNumber + '"]');
        for (j = 0; j < g.length; j++) {
            taInput = g[j].getAttribute("id");
            document.getElementById(taInput).innerHTML = ""
        }
    }
    if (localStorage[e] == "undefined") {
        window[myAct + "_button"](q, b, "Refresh")
    } else {
        window[myAct + "_button"](q, b, "clear")
    }
    window[myAct + "_Clear"](a)
}

function imageChange(c) {
    var a = c.charAt(c.length - 1, 0)[0];
    myAct = document.querySelectorAll("[data-popupButton]");
    myActLength = myAct[0].getAttribute("data-popupButton");
    var e = $("#" + c + " img").attr("src");
    var d = document.getElementById(c).getAttribute("data-firstImage");
    var b = document.getElementById(c).getAttribute("data-anotherImage");
    if (newFlags[a] == 0) {
        popupCloseAll();
        newFlags[a] = 1;
        $("#" + c + " img").attr("src", b);
        flag = 1
    } else {
        popupCloseAll();
        newFlags[a] = 0;
        $("#" + c + " img").attr("src", d);
        flag = 0
    }
}

function rb_answer(c) {
    rbstored = document.getElementById(c).getAttribute("data-rbStorage");
    var b = new Array();
    var a = rbstored.split("|");
    for (i = 0; i < a.length; i++) {
        if (localStorage[a[i]] != undefined) {
            rblastCharRemoved = localStorage[a[i]].substring(0, localStorage[a[i]].length - 1);
            b[i] = rblastCharRemoved.split("|");
            for (j = 0; j < b[i].length; j++) {
                if (b[i][j] != "null") {
                    document.getElementById(b[i][j]).setAttribute("class", "grayOn")
                }
            }
        }
    }
}

function cb_answer(a) {
    cbstored = document.getElementById(a).getAttribute("data-cbStorage");
    var c = new Array();
    var b = cbstored.split("|");
    for (i = 0; i < b.length; i++) {
        if (localStorage[b[i]] != undefined) {
            cblastCharRemoved = localStorage[b[i]].substring(0, localStorage[b[i]].length - 1);
            c[i] = cblastCharRemoved.split("|");
            for (j = 0; j < c[i].length; j++) {
                if (c[i][j] != "null") {
                    document.getElementById(c[i][j]).setAttribute("class", "checkboxOn")
                }
            }
        }
    }
}

function ta_answer(m, d, l) {
    var g = new Array();
    var b = new Array();
    var e = new Array();
    var h = m.split("|");
    var f = l.split("|");
    var c = d.split("|");
    for (k = 0; k < h.length; k++) {
        if (localStorage[h[k]] != undefined) {
            g[k] = localStorage[h[k]].split("|");
            b[k] = c[k].split("|");
            e[k] = f[k].split("|");
            for (i = 0; i < b[k]; i++) {
                var a = e[k] + i;
                document.getElementById(a).innerHTML = g[k][i]
            }
        }
    }
}

function th_answer(c) {
    thstored = document.getElementById(c).getAttribute("data-thStorage");
    var b = new Array();
    var a = thstored.split("|");
    for (i = 0; i < a.length; i++) {
        if (localStorage[a[i]] != undefined) {
            thlastCharRemoved = localStorage[a[i]].substring(0, localStorage[a[i]].length - 1);
            b[i] = thlastCharRemoved.split("|");
            for (j = 0; j < b[i].length; j++) {
                if (b[i][j] != "null") {
                    document.getElementById(b[i][j]).style.backgroundColor = "yellow"
                }
            }
        }
    }
}

function closeBtnContent(c) {
    c.preventDefault();
    gFlag = 0;
    setZero();
    allpopupCloseBtn();
    loadContent = document.getElementById("loadContent");
    loadContent.style.display = "none";
    $("#closeContentId").remove();
    $("#loadContent").empty();
    if (document.getElementById("getcontent").hasAttribute("data-video")) {
        var a = document.getElementById("getcontent").getAttribute("data-videoPoster");
        var b = document.getElementById("getcontent").getAttribute("data-videoId");
        displayVideoPoster(a, "none", b, "block")
    }
    popupCloseAll()
}

function getData(a, b) {
    b.preventDefault();
    removeAllsubClass();
    linkPage = document.getElementById(a).getAttribute("data-linkPage");
    $("#" + a).removeClass("subtopic").addClass("changesubtopic");
    $("#" + a + " img").css("display", "none");
    parent.document.location.href = linkPage
}

function removeAllClass() {
    tpLen = $("#topicId li").size();
    for (i = 0; i < tpLen; i++) {
        cEvent = "li#li_" + i;
        $(cEvent + " a").removeClass("changeColor");
        $(cEvent + " span").removeClass("changeTextColor").addClass("textColor");
        $(cEvent + " div img").removeClass("changeTextColor");
        $(cEvent + " div").removeClass("changeheadingText").addClass("headingText");
        $("#img" + i).attr("src", "../images/WordlistArrowOff.svg");
        $("#open_" + i).css("display", "none");
        $(cEvent).removeClass("changetopic").addClass("topic")
    }
}

function removeAllsubClass() {
    stLen = $("li").size();
    for (i = 0; i < stLen; i++) {
        clearEvent = "#link_" + i;
        $(clearEvent).removeClass("changesubtopic").addClass("subtopic");
        $(clearEvent + " img").css("display", "block")
    }
}

function doAll(a) {
    removeAllClass();
    removeAllsubClass();
    var b = setTimeout(function() {
        setIntervalClosed(a)
    }, 200);
    cEvs = "li_" + a;
    cEvent = "li#" + cEvs;
    $(cEvent + " a").addClass("changeColor");
    $(cEvent + " span").removeClass("textColor").addClass("changeTextColor");
    $(cEvent + " div").removeClass("headingText").addClass("changeheadingText");
    $(cEvent).removeClass("topic").addClass("changetopic");
    $("#img" + a).attr("src", "../images/WordlistArrowOn.svg")
}

function setIntervalClosed(a) {
    $("#open_" + a).fadeIn(300);
    $("#open_" + a).css("display", "block");
    window.clearTimeout(myVar)
}

function pageOpen(b, a) {
    a.preventDefault();
    updateLink = document.getElementById(b).hasAttribute("data-updateLink");
    if (updateLink) {
        updateLink = document.getElementById(b).getAttribute("data-updateLink");
        parent.document.location.href = updateLink
    }
    idSplit = b.split("_")[1];
    doAll(idSplit)
}
$("#noBtn").click(function(a) {
    a.preventDefault();
    $("#popup0").css("display", "none");
    setZero()
});
$("#yesBtn").click(function(g) {
    g.preventDefault();
    $("#popup0").css("display", "none");
    localStorage.removeItem('ULRWA02_ULRWA02U01P002Q01');
    localStorage.removeItem('ULRWA02_ULRWA02U10P039Q01');
    setZero();
    var e = document.createElement("div");
    e.id = "cDelete";
    className = "bgimg";
    e.setAttribute("style", "position:absolute; margin-top:0px; margin-left:0px; width:1024px; height:768px; background-color:black; opacity:0.3");
    document.body.appendChild(e);
    var a = $("." + className).css("width");
    var f = $("." + className).css("height");
    var d = $("." + className).css("top");
    var b = $("." + className).css("left");
    var c = -10;
    fancyCheckItems1(a, f, d, b, c);
    document.getElementById("msgbox").innerHTML = "<div style='font-size:23px; padding-top:23px; padding-left:20px; font-family: ACaslonPro-Bold; color:#444444; '>All your saved answers have been deleted</div>"
});

function previous(gId){
	$('#iframes').empty();
	pBtn=document.getElementById(gId);
	previousBtn= pBtn.getAttribute('data-previousBtn')
	hidePopup(previousBtn);
	dAct=document.querySelectorAll('[data-popupBtn]');
	dataAct = document.querySelectorAll('[data-popupBtn]')[0].getAttribute('data-popupBtn');
	typeAct= document.querySelectorAll('[data-displayAct="' + dataAct + '"][data-act="' + holdBtnVal + '"]');
	typeId=typeAct[0].getAttribute('id');

    getIdAct=document.getElementById(typeId);
	tAct=getIdAct.getAttribute('data-typeAct');
	
	
	ta_ClearInput(tAct);
    
	holdBtnVal=parseInt(holdBtnVal)-1;
	if(holdBtnVal<0){
		holdBtnVal=dAct.length-1;
	}
	getInsideAct= document.querySelectorAll('[data-displayAct="' + dataAct + '"][data-act="' + holdBtnVal + '"]');
	displayId=getInsideAct[0].getAttribute('id');
	document.getElementById(displayId).style.display="block"
	clearAllButton();
}

function next(gId){
	$('#iframes').empty();
	nBtn=document.getElementById(gId);
	nextBtn= nBtn.getAttribute('data-nextBtn')
	hidePopup(nextBtn);
	dAct=document.querySelectorAll('[data-popupBtn]');
	dataAct = document.querySelectorAll('[data-popupBtn]')[0].getAttribute('data-popupBtn');
	typeAct= document.querySelectorAll('[data-displayAct="' + dataAct + '"][data-act="' + holdBtnVal + '"]');
	typeId=typeAct[0].getAttribute('id');
	
	getIdAct=document.getElementById(typeId);
	tAct=getIdAct.getAttribute('data-typeAct');

	
	ta_ClearInput(tAct);
	
	holdBtnVal=parseInt(holdBtnVal)+1;
	if(holdBtnVal>dAct.length-1){
		holdBtnVal=0;
	}
	getInsideAct= document.querySelectorAll('[data-displayAct="' + dataAct + '"][data-act="' + holdBtnVal + '"]');
	
	displayId=getInsideAct[0].getAttribute('id');
	document.getElementById(displayId).style.display="block";
	clearAllButton();
}

function imgOriginalPosition(){
	
	
	for(i=1;i<5;i++){
		images='img_'+i;
  		images=document.getElementById(images);
  		images.src="../images/down.png";
		 window['flag'+i]=0;
	}
	
	
}

function imgOverwritePosition(index){
	
	for(i=1;i<5;i++){
		images='img_'+i;
  		images=document.getElementById(images);
  		images.src="../images/down.png";
		 window['flag'+i]=0;
	}
	images='img_'+index;
  	images=document.getElementById(images);
  	images.src="../images/up.png";
	window['flag'+index]=1;
	
}

function runAccordion(index,e)
{
	var hasContents=document.getElementsByClassName('contents')[index-1].hasAttribute("data-sheight")
					if(hasContents){
		getContents=document.getElementsByClassName('contents')[index-1].getAttribute("data-sheight");
		ContentHeight=getContents;
	}
  e.preventDefault();
  images='img_'+index;
  images=document.getElementById(images);

  if (window['flag'+index]==0){
	
	  window['flag'+index]=1;
	  
	  images.src="../images/up.png";
	  imgOverwritePosition(index);
	  
  }else{
	  window['flag'+index]=0;
	 
	  images.src="../images/down.png";
	   imgOriginalPosition();
	
  }
 
  var nID = "Accordion" + index + "Content";
 
  if(openAccordion == nID){
    nID = '';
  }
  setTimeout("animate(" + new Date().getTime() + "," + TimeToSlide + ",'" 
      + openAccordion + "','" + nID + "')", 33);

  openAccordion = nID;
}

function animate(lastTick, timeLeft, closingId, openingId)
{  

  var curTick = new Date().getTime();
  var elapsedTicks = curTick - lastTick;

  var opening = (openingId == '') ? null : document.getElementById(openingId);
  var closing = (closingId == '') ? null : document.getElementById(closingId);

  if(timeLeft <= elapsedTicks)
  {
    if(opening != null)
      opening.style.height = ContentHeight + 'px';

    if(closing != null)
    {
      closing.style.display = 'none';
      closing.style.height = '0px';
    }
    return;
  }

  timeLeft -= elapsedTicks;
  var newClosedHeight = Math.round((timeLeft/TimeToSlide) * ContentHeight);

  if(opening != null)
  {
    if(opening.style.display != 'block')
      opening.style.display = 'block';
    opening.style.height = (ContentHeight - newClosedHeight) + 'px';
  }

  if(closing != null)
    closing.style.height = newClosedHeight + 'px';

  setTimeout("animate(" + curTick + "," + timeLeft + ",'" 
      + closingId + "','" + openingId + "')", 33);


}
