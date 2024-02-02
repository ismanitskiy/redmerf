function button4(btn,ord,ls,mix,id,pos,cur){
	//alert(btn+' '+ord+' '+ls+' '+mix+' '+id+' '+pos+' '+cur);
    var actposition = document.getElementById(id).getAttribute(ord);
    var dbid = document.getElementById(id).getAttribute(ls);
    var saveB = $( "img[" + btn + "$='save'][" + ord + "$='" + actposition + "']");
    var showB = $( "img[" + btn + "$='show'][" + ord + "$='" + actposition + "']");
    var clearB = $( "img[" + btn + "$='clear'][" + ord + "$='" + actposition + "']");
    var reloadB = $( "img[" + btn + "$='reload'][" + ord + "$='" + actposition + "']");
    saveB.removeAttr("src");
    showB.removeAttr("src");
    clearB.removeAttr("src");
    reloadB.removeAttr("src");

    var arrs;
    arrs = mix.split("|");
    var lsexist = arrs[0];
    var curBtn = arrs[1];
    var preBtn = arrs[2];
    var savedStatus = arrs[3];

    curBtn = cur;

/*    console.log("*****************BEFORE********************")
    console.log(lsexist);
    console.log(curBtn);
    console.log(preBtn);
    console.log(savedStatus);
    console.log(localStorage[dbid]);
    console.log(saveB.attr("class"));
    console.log(showB.attr("class"));
    console.log(clearB.attr("class"));
    console.log(reloadB.attr("class"));*/

    //for EssGram project Special

    if (localStorage[dbid]
          && lsexist == "yes"
          && curBtn == "refresh"
          && preBtn == "save"
          && savedStatus == "yes"
          && saveB.attr("class") == "saveOff"
          && showB.attr("class") == "showOn"
          && clearB.attr("class") == "clearOn"
          && reloadB.attr("class") == "reloadOn") {
        saveB.attr("class", "saveOff");
        showB.attr("class", "showOff");
        clearB.attr("class", "clearOff");
        reloadB.attr("class", "reloadOn");
    }

    if (localStorage[dbid]
          && lsexist == "yes"
          && curBtn == "refresh"
          && preBtn == "show"
          && savedStatus == "yes"
          && saveB.attr("class") == "saveOff"
          && showB.attr("class") == "showOff"
          && clearB.attr("class") == "clearOn"
          && reloadB.attr("class") == "reloadOn") {
        saveB.attr("class", "saveOff");
        showB.attr("class", "showOff");
        clearB.attr("class", "clearOff");
        reloadB.attr("class", "reloadOn");
    }

    if (localStorage[dbid]
          && lsexist == "yes"
          && curBtn == "refresh"
          && preBtn == "load"
          && savedStatus == "yes"
          && saveB.attr("class") == "saveOff"
          && showB.attr("class") == "showOn"
          && clearB.attr("class") == "clearOn"
          && reloadB.attr("class") == "reloadOff") {
        saveB.attr("class", "saveOff");
        showB.attr("class", "showOff");
        clearB.attr("class", "clearOff");
        reloadB.attr("class", "reloadOn");
    }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "show"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "load"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "blur"
              && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "load"
              && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "blur"
              && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "show"
              && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "save"
              && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "show"
              && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        
    //for EssGram project Special Ends here

    //Refresh Button
    if (!localStorage[dbid]
              && lsexist == "no"
              && curBtn == "refresh"
              && preBtn == "undefined"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "refresh"
              && preBtn == "undefined"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }

		//Blur Button
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "blur"
              && preBtn == "show"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "blur"
              && preBtn == "clear"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "show"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "show"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "clear"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "load"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "clear"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "load"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "blur"
              && preBtn == "undefined"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "blur"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "blur"
              && preBtn == "load"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (!localStorage[dbid]
              && lsexist == "no"
              && curBtn == "blur"
              && preBtn == "undefined"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }

        if (!localStorage[dbid]
              && lsexist == "no"
              && curBtn == "blur"
              && preBtn == "clear"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }

		//Save Button
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "save"
              && preBtn == "blur"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "save"
              && preBtn == "blur"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "save"
              && preBtn == "blur"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (!localStorage[dbid]
              && lsexist == "no"
              && curBtn == "save"
              && preBtn == "blur"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

		//Show Button
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "show"
              && preBtn == "load"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "show"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "show"
              && preBtn == "load"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "show"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "show"
              && preBtn == "load"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }



		//Clear Button
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "blur"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "blur"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "load"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "load"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "show"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "blur"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "clear"
              && preBtn == "show"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "clear"
              && preBtn == "blur"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "clear"
              && preBtn == "load"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }
        if (!localStorage[dbid]
              && lsexist == "no"
              && curBtn == "clear"
              && preBtn == "blur"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOff");
        }

        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "clear"
              && preBtn == "show"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "clear"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOff");
            reloadB.attr("class", "reloadOn");
        }

		//Reload Button
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "load"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "blur"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "save"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "clear"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "clear"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "show"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "show"
              && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "blur"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "load"
              && preBtn == "undefined"
			  && savedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "load"
              && preBtn == "show"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "load"
              && preBtn == "clear"
			  && savedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOff");
            showB.attr("class", "showOn");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOff");
        }

/*        console.log("*****************AFTER********************")
        console.log(lsexist);
        console.log(curBtn);
        console.log(preBtn);
        console.log(savedStatus);
        console.log(localStorage[dbid]);
        console.log(saveB.attr("class"));
        console.log(showB.attr("class"));
        console.log(clearB.attr("class"));
        console.log(reloadB.attr("class"));
*/
        
}
        