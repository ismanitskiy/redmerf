function button(btn,ord,ls,mix,id,pos,cur){
	var actposition = document.getElementById(id).getAttribute(ord);
	var dbid = document.getElementById(id).getAttribute(ls);
	var saveB = $( "img[" + btn + "$='save'][" + ord + "$='" + actposition + "']");
	var checkB = $( "img[" + btn + "$='check'][" + ord + "$='" + actposition + "']");
	var showB = $( "img[" + btn + "$='show'][" + ord + "$='" + actposition + "']");
	var clearB = $( "img[" + btn + "$='clear'][" + ord + "$='" + actposition + "']");
	var reloadB = $( "img[" + btn + "$='reload'][" + ord + "$='" + actposition + "']");

	saveB.removeAttr("src");
	checkB.removeAttr("src");
	showB.removeAttr("src");
	clearB.removeAttr("src");
	reloadB.removeAttr("src");

	var arrs;
	arrs = mix.split("|");
	var lsexist = arrs[0];
	var curBtn = arrs[1];
	var preBtn = arrs[2];
	var savedStatus = arrs[3];
	var checkedStatus = arrs[4];
    
	curBtn = cur;
	

        //Change Button:
        //Special for Typeanswer
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "changed"
              && preBtn == "load"
              && savedStatus == "yes"
              && checkedStatus == "yes"
              && saveB.attr("class") == "saveOn"
              && checkB.attr("class") == "checkOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        //Special for Typeanswer
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "changed"
              && preBtn == "load"
              && savedStatus == "yes"
              && checkedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && checkB.attr("class") == "checkOn"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        //Special for Typeanswer
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "changed"
              && preBtn == "load"
              && savedStatus == "yes"
              && checkedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && checkB.attr("class") == "checkOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        //Special for Typeanswer
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "changed"
              && preBtn == "changed"
              && savedStatus == "yes"
              && checkedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && checkB.attr("class") == "checkOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }
        //Special for Typeanswer
        if (localStorage[dbid]
              && lsexist == "no"
              && curBtn == "changed"
              && preBtn == "load"
              && savedStatus == "yes"
              && checkedStatus == "yes"
              && saveB.attr("class") == "saveOn"
              && checkB.attr("class") == "checkOn"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        
        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "changed"
              && preBtn == "load"
              && savedStatus == "undefined"
              && checkedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && checkB.attr("class") == "checkOn"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOff") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "changed"
              && preBtn == "clear"
              && savedStatus == "undefined"
              && checkedStatus == "undefined"
              && saveB.attr("class") == "saveOff"
              && checkB.attr("class") == "checkOff"
              && showB.attr("class") == "showOff"
              && clearB.attr("class") == "clearOff"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
              && lsexist == "yes"
              && curBtn == "changed"
              && preBtn == "check"
              && savedStatus == "undefined"
              && checkedStatus == "yes"
              && saveB.attr("class") == "saveOff"
              && checkB.attr("class") == "checkOff"
              && showB.attr("class") == "showOn"
              && clearB.attr("class") == "clearOn"
              && reloadB.attr("class") == "reloadOn") {
            saveB.attr("class", "saveOn");
            checkB.attr("class", "checkOn");
            showB.attr("class", "showOff");
            clearB.attr("class", "clearOn");
            reloadB.attr("class", "reloadOn");
        }

        if (localStorage[dbid]
						  && lsexist == "no"
                          && curBtn == "changed"
                          && preBtn == "show"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "save"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "show"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "show"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }
                        if (!localStorage[dbid]
                              && lsexist == "no"
                              && curBtn == "changed"
                              && preBtn == "show"
                              && savedStatus == "undefined"
                              && checkedStatus == "yes"
                              && saveB.attr("class") == "saveOff"
                              && checkB.attr("class") == "checkOff"
                              && showB.attr("class") == "showOff"
                              && clearB.attr("class") == "clearOn"
                              && reloadB.attr("class") == "reloadOff") {
                            saveB.attr("class", "saveOn");
                            checkB.attr("class", "checkOn");
                            showB.attr("class", "showOff");
                            clearB.attr("class", "clearOn");
                            reloadB.attr("class", "reloadOff");
                        }

                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (!localStorage[dbid]
                              && lsexist == "no"
                              && curBtn == "changed"
                              && preBtn == "check"
                              && savedStatus == "undefined"
                              && checkedStatus == "yes"
                              && saveB.attr("class") == "saveOn"
                              && checkB.attr("class") == "checkOff"
                              && showB.attr("class") == "showOn"
                              && clearB.attr("class") == "clearOn"
                              && reloadB.attr("class") == "reloadOff") {
                            saveB.attr("class", "saveOn");
                            checkB.attr("class", "checkOn");
                            showB.attr("class", "showOff");
                            clearB.attr("class", "clearOn");
                            reloadB.attr("class", "reloadOff");
                        }
                        
                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
						  && lsexist == "yes"
                          && curBtn == "changed"
                          && preBtn == "undefined"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (!localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "undefined"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                        if (localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "save"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "save"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }


                        if (localStorage[dbid]
                          && curBtn == "changed"
                          && preBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                        if (!localStorage[dbid]
                          && curBtn == "changed"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    //Save Button

                        if (localStorage[dbid]
                              && lsexist == "no"
                              && preBtn == "changed"
                              && curBtn == "save"
                              && savedStatus == "yes"
                              && checkedStatus == "undefined"
                              && saveB.attr("class") == "saveOn"
                              && checkB.attr("class") == "checkOn"
                              && showB.attr("class") == "showOff"
                              && clearB.attr("class") == "clearOn"
                              && reloadB.attr("class") == "reloadOn") {
                            saveB.attr("class", "saveOff");
                            checkB.attr("class", "checkOn");
                            showB.attr("class", "showOff");
                            clearB.attr("class", "clearOn");
                            reloadB.attr("class", "reloadOn");
                        }

                        if (localStorage[dbid]
                              && lsexist == "yes"
                              && preBtn == "changed"
                              && curBtn == "save"
                              && savedStatus == "yes"
                              && checkedStatus == "undefined"
                              && saveB.attr("class") == "saveOn"
                              && checkB.attr("class") == "checkOn"
                              && showB.attr("class") == "showOff"
                              && clearB.attr("class") == "clearOn"
                              && reloadB.attr("class") == "reloadOn") {
                            saveB.attr("class", "saveOff");
                            checkB.attr("class", "checkOn");
                            showB.attr("class", "showOff");
                            clearB.attr("class", "clearOn");
                            reloadB.attr("class", "reloadOn");
                        }

                        if (localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "save"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "save"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "save"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "save"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (!localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "save"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (!localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "save"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (!localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "save"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "save"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    //Check Button
                    //Specially for Typeanswer
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "load"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "save"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "save"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (!localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "save"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "load"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }
                    
                    if (localStorage[dbid]
                          && preBtn == "load"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }


                    if (!localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "check"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "check"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    //Show Button
                    //Specially for Typeanswer
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "changed"
                          && curBtn == "show"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }
                    if (localStorage[dbid]
                          && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "show"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "check"
                          && curBtn == "show"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "check"
                          && curBtn == "show"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "show"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (!localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "show"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "save"
                          && curBtn == "show"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "show"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }


                    if (localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "show"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "load"
                          && curBtn == "show"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }



                    //Clear Button
                    //Specially for Typeanswer
                    if (localStorage[dbid]
                          && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }
                    //Specially for Typeanswer
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "changed"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }
                    if (!localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "changed"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOff");
                    }
                    if (localStorage[dbid]
						  && lsexist == "no"
                          && preBtn == "check"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "check"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "check"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "show"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (!localStorage[dbid]
                          && preBtn == "show"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "show"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (!localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && lsexist == "yes"
                          && preBtn == "save"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "save"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "load"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }
                    if (localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }


                    if (!localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "clear"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "save"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "save"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    if (localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "clear"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

                    //Reload Button
                    //Specially for Typeanswer lowercase
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "save"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }
                    //Specially for Typeanswer
                    if (localStorage[dbid]
                          && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOff") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOn");
                    }
                    //Specially for Typeanswer
                    if (localStorage[dbid]
                          && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }
                    //Specially for Typeanswer
                    if (localStorage[dbid]
                          && lsexist == "no"
                          && preBtn == "changed"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }
                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "changed"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "check"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "show"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "check"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "clear"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
						  && lsexist == "yes"
                          && preBtn == "undefined"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "show"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "clear"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "clear"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "save"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "check"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }



                    if (localStorage[dbid]
                          && preBtn == "clear"
                          && curBtn == "load"
                          && savedStatus == "undefined"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOff"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "save"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "clear"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOff"
                          && checkB.attr("class") == "checkOff"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOn");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && preBtn == "changed"
                          && curBtn == "load"
                          && savedStatus == "yes"
                          && checkedStatus == "yes"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOff"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOn");
                        checkB.attr("class", "checkOn");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOn");
                        reloadB.attr("class", "reloadOff");
                    }


					//On load                    
                    if ( !localStorage[dbid]
						  && preBtn == "undefined"
                          && curBtn == "refresh"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOff");
                    }

                    if (localStorage[dbid]
                          && lsexist == "yes"
                          && curBtn == "refresh"
                          && savedStatus == "undefined"
                          && checkedStatus == "undefined"
                          && saveB.attr("class") == "saveOn"
                          && checkB.attr("class") == "checkOn"
                          && showB.attr("class") == "showOn"
                          && clearB.attr("class") == "clearOn"
                          && reloadB.attr("class") == "reloadOn") {
                        saveB.attr("class", "saveOff");
                        checkB.attr("class", "checkOff");
                        showB.attr("class", "showOff");
                        clearB.attr("class", "clearOff");
                        reloadB.attr("class", "reloadOn");
                    }

	}