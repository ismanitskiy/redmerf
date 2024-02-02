

var ch_save = document.querySelectorAll('[data-ch-button="save"]');
var ch_show = document.querySelectorAll('[data-ch-button="show"]');
var ch_clear = document.querySelectorAll('[data-ch-button="clear"]');
var ch_reload = document.querySelectorAll('[data-ch-button="reload"]');

var ch_saveBtn = new Array(ch_save.length);
var ch_showBtn = new Array(ch_show.length);
var ch_clearBtn = new Array(ch_clear.length);
var ch_reloadBtn = new Array(ch_reload.length);
var ch_curBtn = new Array(ch_save.length);	//Current Button

var ch_lsexist = new Array(ch_save.length);	//ls Exist Status
var ch_preBtn = new Array(ch_save.length);	//Previous Button
var ch_curBtn = new Array(ch_save.length);	//Current Button
var ch_savedStatus = new Array(ch_save.length);	//Save Status
var ch_checkedStatus = new Array(ch_save.length);	//Check Status


var ch_disableClick = 0;
for(a=0;a<ch_save.length;a++){
	var ch_highlights = document.querySelectorAll('[data-ch-items="' + a + '"]');
	ch_saveBtn[a] = ch_save[a].getAttribute("id");
	var dbid = ch_save[a].getAttribute("data-ch-ls");


    var actNo = a;
    ch_lsexist[actNo] = "no"
    if(localStorage[dbid]){
        ch_lsexist[actNo] = "yes"
    }
    
    var mix = ch_lsexist[actNo] + "|" + ch_curBtn[actNo] + "|" + ch_preBtn[actNo] + "|" + ch_savedStatus[actNo];
    button4("data-ch-button","data-ch-order","data-ch-ls",mix,ch_saveBtn[actNo],actNo,"refresh");

    for(b=0;b<ch_highlights.length;b++){
		var ch_items = ch_highlights[a].querySelectorAll('[data-ch-options]');
			for(c=0;c<ch_items.length;c++){
				var grpIds = ch_items[c].getAttribute('data-ch-options');
				var grpIdsSplit = grpIds.split('|');

				for(d=0;d<grpIdsSplit.length;d++){
                $("#" + grpIdsSplit[d]).click(function (e) {
		            e.preventDefault();
					var grpName = document.getElementById(this.id).getAttribute("data-ch-grp");
					var actNo = document.getElementById(this.id).getAttribute("data-ch-itmOrd");
					var getGroup = document.querySelectorAll('[data-ch-grp="' + grpName + '"]');


                    if(ch_disableClick == 1){
                        return;
                    }else{
					if(document.getElementById(this.id).style.backgroundColor == ""){
						for(e=0;e<getGroup.length;e++){
						getGroup[e].style.backgroundColor = "";
							document.getElementById(this.id).style.backgroundColor = "orange";
						}

						}else{
							document.getElementById(this.id).style.backgroundColor = "";
							}
                    }
                    var mix = ch_lsexist[actNo] + "|" + ch_curBtn[actNo] + "|" + ch_preBtn[actNo] + "|" + ch_savedStatus[actNo];
                    button4("data-ch-button","data-ch-order","data-ch-ls",mix,ch_saveBtn[actNo],actNo,"blur");
                    ch_preBtn[actNo] = "blur";

                    });
					}
				}
		}
}

for(a=0;a<ch_save.length;a++){
	ch_saveBtn[a] = ch_save[a].getAttribute("id");




		$("#" + ch_saveBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-ch-order");
			if($("#" + ch_saveBtn[dataOrder]).attr("class") == "saveOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = ch_lsexist[actNo] + "|" + ch_curBtn[actNo] + "|" + ch_preBtn[actNo] + "|" + ch_savedStatus[actNo];
            button4("data-ch-button","data-ch-order","data-ch-ls",mix,ch_saveBtn[actNo],dataOrder,"save")
            ch_preBtn[actNo] = "save";
            ch_savedStatus[actNo] = "yes";
			ch_Save(Id);
		});
}



for(a=0;a<ch_show.length;a++){
	ch_showBtn[a] = ch_show[a].getAttribute("id");
		$("#" + ch_showBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-ch-order");
			if($("#" + ch_showBtn[dataOrder]).attr("class") == "showOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = ch_lsexist[actNo] + "|" + ch_curBtn[actNo] + "|" + ch_preBtn[actNo] + "|" + ch_savedStatus[actNo];
            button4("data-ch-button","data-ch-order","data-ch-ls",mix,ch_saveBtn[actNo],dataOrder,"show")
            ch_preBtn[actNo] = "show";
			ch_Show(Id);
            ch_disableClick = 1;
   });
}

for(a=0;a<ch_clear.length;a++){
	ch_clearBtn[a] = ch_clear[a].getAttribute("id");
		$("#" + ch_clearBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-ch-order");
			if($("#" + ch_clearBtn[dataOrder]).attr("class") == "clearOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = ch_lsexist[actNo] + "|" + ch_curBtn[actNo] + "|" + ch_preBtn[actNo] + "|" + ch_savedStatus[actNo];
            button4("data-ch-button","data-ch-order","data-ch-ls",mix,ch_saveBtn[actNo],dataOrder,"clear")
            ch_preBtn[actNo] = "clear";
            ch_disableClick = 0;
			ch_Clear(Id);
		
		});
}

for(a=0;a<ch_reload.length;a++){
	ch_reloadBtn[a] = ch_reload[a].getAttribute("id");
		$("#" + ch_reloadBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-ch-order");
			if($("#" + ch_reloadBtn[dataOrder]).attr("class") == "reloadOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = ch_lsexist[actNo] + "|" + ch_curBtn[actNo] + "|" + ch_preBtn[actNo] + "|" + ch_savedStatus[actNo];
            button4("data-ch-button","data-ch-order","data-ch-ls",mix,ch_saveBtn[actNo],dataOrder,"load")
            ch_preBtn[actNo] = "load";
            ch_disableClick = 0;
			ch_Clear(Id);
			ch_Reload(Id);
		});
}


function ch_Save(id){
		var dataInput = document.getElementById(id).getAttribute("data-ch-order");
		var ch_input = document.querySelectorAll('[data-ch-items="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-ch-ls");
        var className = document.getElementById(id).getAttribute("data-ch-className");

				var ans = "";
	for(a=0;a<ch_input.length;a++){
		var ch_items = ch_input[a].querySelectorAll('[data-ch-options]');
			for(b=0;b<ch_items.length;b++){
				var grpIds = ch_items[b].getAttribute('data-ch-options');
				var grpIdsSplit = grpIds.split('|');
				for(c=0;c<grpIdsSplit.length;c++){
					var ch_clicks = document.getElementById(grpIdsSplit[c]);
					if(ch_clicks.style.backgroundColor == "orange"){
							ans += grpIdsSplit[c] + "|";
						}
				}
			}
	}

            localStorage[dataLs] = ans;

            var getWidth= $('.'+className).css('width')
            var getHeight= $('.'+className).css('height')
            var getTop=$('.'+className).css('top')
            var getLeft=$('.'+className).css('left')
            var getTemp=-10;
            fancyCheckItems(getWidth,getHeight,getTop,getLeft,getTemp);
//            document.getElementById("msgbox").innerHTML = "<div style='font-family: ACaslonPro-Bold; font-size:38px; padding-top:48px; padding-left:16px; color:#444444; line-height:130%;'>Your answers have been saved.</div>";

}



function ch_Show(id){
		var dataInput = document.getElementById(id).getAttribute("data-ch-order");
		var ch_input = document.querySelectorAll('[data-ch-items="' + dataInput + '"]');
		var ch_answer = document.querySelectorAll('[data-ch-answer="' + dataInput + '"]');
		var ch_Options = ch_input[0].querySelectorAll('[data-ch-options]');
//	ch_Clear(id);		
		for(b=0;b<ch_answer.length;b++){
			ch_answer[b].style.display="block";
			}

}


function ch_Clear(id){
		var dataInput = document.getElementById(id).getAttribute("data-ch-order");
		var ch_input = document.querySelectorAll('[data-ch-items="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-ch-ls");
		var ch_answer = document.querySelectorAll('[data-ch-answer="' + dataInput + '"]');
		
	for(a=0;a<ch_input.length;a++){
		var ch_items = ch_input[a].querySelectorAll('[data-ch-options]');
			for(b=0;b<ch_items.length;b++){
				var grpIds = ch_items[b].getAttribute('data-ch-options');
				var grpIdsSplit = grpIds.split('|');
				for(c=0;c<grpIdsSplit.length;c++){
					var ch_clicks = document.getElementById(grpIdsSplit[c]);
					ch_clicks.style.backgroundColor = "";
				}
			}
	}
			for(b=0;b<ch_answer.length;b++){
			ch_answer[b].style.display="none";
			}
}

function ch_Reload(id){
		var dataInput = document.getElementById(id).getAttribute("data-ch-order");
		var ch_input = document.querySelectorAll('[data-ch-items="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-ch-ls");
            var ch_ans = localStorage[dataLs];
            var s_ans = ch_ans.split("|");
            var acount = 0;
            for (a=0;a<s_ans.length;a++) {
				document.getElementById(s_ans[a]).style.backgroundColor = "orange";
			}
}


