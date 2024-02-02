//localStorage.removeItem("ESSU001P002Q02")
var tt_save = document.querySelectorAll('[data-tt-button="save"]');
var tt_clear = document.querySelectorAll('[data-tt-button="clear"]');
var tt_reload = document.querySelectorAll('[data-tt-button="reload"]');
var tt_show = document.querySelectorAll('[data-tt-button="show"]');


var tt_saveBtn = new Array(tt_save.length);
var tt_clearBtn = new Array(tt_clear.length);
var tt_reloadBtn = new Array(tt_reload.length);
var tt_showBtn = new Array(tt_show.length);

var tt_curBtn = new Array(tt_save.length);	//Current Button

var tt_lsexist = new Array(tt_save.length);	//ls Exist Status
var tt_preBtn = new Array(tt_save.length);	//Previous Button
var tt_savedStatus = new Array(tt_save.length);	//Save Status


var tt_CurSelected = new Array(tt_save.length);
var tt_CurDragId = new Array(tt_save.length);
var tt_draggedIds = new Array(tt_save.length);
var tt_CurItems = new Array(tt_save.length);

var saveValue=new Array();
var curSel = ""
for(a=0;a<tt_save.length;a++){
	var tt_drag = document.querySelectorAll('[data-tt-drag="' + a + '"]');
	var tt_drop = document.querySelectorAll('[data-tt-drop="' + a + '"]');
    var dbid = tt_save[a].getAttribute("data-tt-ls");
	tt_saveBtn[a] = tt_save[a].getAttribute("id");
	tt_clearBtn[a] = tt_clear[a].getAttribute("id");
	tt_reloadBtn[a] = tt_reload[a].getAttribute("id");
	tt_showBtn[a] = tt_show[a].getAttribute("id");
	holdShow=tt_showBtn[a];
	holdSave=tt_saveBtn[a];
	holdReload=tt_reloadBtn[a];
	holdClear=tt_clearBtn[a];

    var actNo = a;
    tt_lsexist[actNo] = "no"
    if(localStorage[dbid]){
        tt_lsexist[actNo] = "yes"
    }

    var actNo = a;
    var mix = tt_lsexist[actNo] + "|" + tt_curBtn[actNo] + "|" + tt_preBtn[actNo] + "|" + tt_savedStatus[actNo];
    button4("data-tt-button","data-tt-order","data-tt-ls",mix,tt_saveBtn[actNo],actNo,"refresh");

		tt_CurItems[a] = "";
	for(b=0;b<tt_drag.length;b++){
	var dragId = tt_drag[b].getAttribute('id');
		tt_CurItems[a] += tt_drag[b].innerHTML + "|";
		$("#" + dragId).click(function (e) {
            e.preventDefault();
			var actOrd = document.getElementById(this.id).getAttribute('data-tt-drag');
			var tt_drag = document.querySelectorAll('[data-tt-drag="' + actOrd + '"]');
            var grp = document.getElementById(this.id).getAttribute('data-tt-grp');
			
			for(i=0;i<tt_drag.length;i++){
				tt_drag[i].style.backgroundColor = "";
				}
			if(document.getElementById(this.id).innerHTML == ""){return;}
			
			if(document.getElementById(this.id).style.backgroundColor == ""){
			 document.getElementById(this.id).style.backgroundColor = "rgb(255, 133, 52)";
             curSel = grp;
			}else{
                document.getElementById(this.id).style.backgroundColor = "";
                curSel = "";
            }
	
			tt_CurSelected[actOrd] = document.getElementById(this.id).innerHTML;
			tt_CurDragId[actOrd] = this.id;
			
			
		});

	}

	
	tt_draggedIds[a] = new Array(tt_drag.length);

	for(c=0;c<tt_drop.length;c++){
	var dropId = tt_drop[c].getAttribute('id');
		tt_draggedIds[a][c] = "";
		
		$("#" + dropId).click(function (e) {
            e.preventDefault();
			var actOrd = document.getElementById(this.id).getAttribute('data-tt-drop');
			var itmOrd = document.getElementById(this.id).getAttribute('data-tt-dropOrd');
			var dataOrder = document.getElementById(this.id).getAttribute('data-tt-drop');
            var grp = document.getElementById(this.id).getAttribute('data-tt-grp');
			if(!tt_CurDragId[actOrd] || curSel != grp){
                return;}
			
			if(document.getElementById(this.id).innerHTML == "" && tt_CurDragId[actOrd] != ""){
			document.getElementById(this.id).innerHTML = tt_CurSelected[actOrd];
			tt_draggedIds[actOrd][itmOrd] = tt_CurDragId[actOrd];
			if(document.getElementById(this.id).innerHTML != ""){
			document.getElementById(this.id).style.backgroundColor = "rgb(255, 133, 52)";
			}
			
			if(tt_CurSelected[actOrd] == ""){
                return;}
			tt_CurSelected[actOrd] = "";
			if(!document.getElementById(tt_CurDragId[actOrd]).hasAttribute("data-tt-leavme")){
			document.getElementById(tt_CurDragId[actOrd]).innerHTML = "";
				}
			document.getElementById(tt_CurDragId[actOrd]).style.backgroundColor = "";
			saveValue[c]=document.getElementById(this.id).innerHTML;

            var actNo = actOrd
            var mix = tt_lsexist[actNo] + "|" + tt_curBtn[actNo] + "|" + tt_preBtn[actNo] + "|" + tt_savedStatus[actNo];
            button4("data-tt-button","data-tt-order","data-tt-ls",mix,tt_saveBtn[actNo],actNo,"blur");
            tt_preBtn[actNo] = "blur";

            
			}else{
				document.getElementById(tt_draggedIds[actOrd][itmOrd]).innerHTML = document.getElementById(this.id).innerHTML;
				document.getElementById(this.id).innerHTML = "";
//				var tt_mark = document.querySelectorAll('[data-tt-target="' + actOrd + '"]');
//				ttMark=tt_mark[itmOrd].getAttribute('id');
//				document.getElementById(ttMark).style.display='none';
				saveValue[c]=document.getElementById(this.id).innerHTML
				document.getElementById(this.id).style.backgroundColor = "";

                var actNo = actOrd
                var mix = tt_lsexist[actNo] + "|" + tt_curBtn[actNo] + "|" + tt_preBtn[actNo] + "|" + tt_savedStatus[actNo];
                button4("data-tt-button","data-tt-order","data-tt-ls",mix,tt_saveBtn[actNo],actNo,"blur");
                tt_preBtn[actNo] = "blur";
                
				}

        });
	
	}

		$("#" + tt_saveBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-tt-order");
			if($("#" + tt_saveBtn[dataOrder]).attr("class") == "saveOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = tt_lsexist[actNo] + "|" + tt_curBtn[actNo] + "|" + tt_preBtn[actNo] + "|" + tt_savedStatus[actNo];
            button4("data-tt-button","data-tt-order","data-tt-ls",mix,tt_saveBtn[actNo],actNo,"save");
            tt_preBtn[actNo] = "save";
            tt_savedStatus[actNo] = "yes";
            tt_Save(Id);
		});
	
		$("#" + tt_clearBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-tt-order");
			if($("#" + tt_clearBtn[dataOrder]).attr("class") == "clearOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = tt_lsexist[actNo] + "|" + tt_curBtn[actNo] + "|" + tt_preBtn[actNo] + "|" + tt_savedStatus[actNo];
            button4("data-tt-button","data-tt-order","data-tt-ls",mix,tt_saveBtn[actNo],actNo,"clear");
            tt_preBtn[actNo] = "clear";

            tt_Clear(Id);

		var tt_drag = document.querySelectorAll('[data-tt-drag]');
		for(i=0;i<tt_drag.length;i++){
			tt_drag[i].style.backgroundColor="";
			}
		});

		$("#" + tt_reloadBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-tt-order");
			if($("#" + tt_reloadBtn[dataOrder]).attr("class") == "reloadOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = tt_lsexist[actNo] + "|" + tt_curBtn[actNo] + "|" + tt_preBtn[actNo] + "|" + tt_savedStatus[actNo];
            button4("data-tt-button","data-tt-order","data-tt-ls",mix,tt_saveBtn[actNo],actNo,"load");
            tt_preBtn[actNo] = "load";

            tt_Reload(Id);
		});
		
		
		$("#" + tt_showBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-tt-order");
			if($("#" + tt_showBtn[dataOrder]).attr("class") == "showOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = tt_lsexist[actNo] + "|" + tt_curBtn[actNo] + "|" + tt_preBtn[actNo] + "|" + tt_savedStatus[actNo];
            button4("data-tt-button","data-tt-order","data-tt-ls",mix,tt_saveBtn[actNo],actNo,"show");
            tt_preBtn[actNo] = "show";
            tt_Show(Id);
		});

}



function tt_Show(id){

//		tt_Clear(id);
		var dataInput = document.getElementById(id).getAttribute("data-tt-order");
		var cb_input = document.querySelectorAll('[data-tt-drop="' + dataInput + '"]');
		var cb_drag = document.querySelectorAll('[data-tt-drag="' + dataInput + '"]');
        var cb_disAns = document.querySelectorAll('[data-tt-displayAns="' + dataInput + '"]');
		
        for(a=0;a<cb_disAns.length;a++){
            cb_disAns[a].style.display = "block";
        }
/*		for(a=0;a<cb_input.length;a++){
			if(displayAnswer=cb_input[a].hasAttribute('data-tt-displayAnswer')){
				cb_i=cb_input[a].getAttribute('data-tt-answer');
				cb_inputId=cb_input[a].getAttribute('id');
				cb_dragId=cb_drag[a].getAttribute('id');
				cb_iSplit=cb_i.split('|');
				displayAnswer=cb_input[a].getAttribute('data-tt-displayAnswer');
				for(i=0;i<cb_iSplit.length;i++){
					document.getElementById(cb_inputId).style.backgroundColor = "rgb(255, 133, 52)";
					document.getElementById(cb_dragId).style.backgroundColor = "";
					document.getElementById(cb_dragId).innerHTML = "";
					cb_input[a].innerHTML =cb_iSplit[displayAnswer];
				}
			}else{
				cb_input[a].innerHTML =cb_input[a].getAttribute('data-tt-answer');
				cb_inputId=cb_input[a].getAttribute('id');
				cb_dragId=cb_drag[a].getAttribute('id');
				document.getElementById(cb_inputId).style.backgroundColor = "rgb(255, 133, 52)";
				document.getElementById(cb_dragId).style.backgroundColor = "";
				document.getElementById(cb_dragId).innerHTML = "";
			}
		}*/
		

}

function tt_Save(id){

		var dataInput = document.getElementById(id).getAttribute("data-tt-order");
		var cb_input = document.querySelectorAll('[data-tt-drop="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-tt-ls");
        var className = document.getElementById(id).getAttribute("data-tt-className");
//        alert(cb_input[2].getAttribute("data-tt-dropOrd"))
		var ans = "", vans = "";
		for(a=0;a<cb_input.length;a++){
			if( cb_input[a].innerHTML != ""){
//                alert(cb_input[a].getAttribute("data-tt-dropOrd"))
			ans += cb_input[a].getAttribute('id') + "^" + cb_input[a].innerHTML + "^" + tt_draggedIds[dataInput][cb_input[a].getAttribute("data-tt-dropOrd")] + "|";
			vans += cb_input[a].innerHTML + "|";
			}
			else{
				vans += "" + "|";
			}
		}

		str = ans.substring(0, ans.length - 1);
		vstr = vans.substring(0, ans.length - 1);
		localStorage[dataLs] = str;
		var newvs=dataLs + '_text';
		localStorage[newvs] = vstr;


		var getWidth= $('.'+className).css('width')
		var getHeight= $('.'+className).css('height')
		var getTop=$('.'+className).css('top')
		var getLeft=$('.'+className).css('left')
		var getTemp=-10;
		fancyCheckItems(getWidth,getHeight,getTop,getLeft,getTemp);
//		document.getElementById("msgbox").innerHTML = "<div style='font-family: SourceSansPro-Regular; font-size:23px; padding-top:30px; text-align:center; color:#000; line-height:130%;'>Your answers have been saved.</div>";
			
}

function tt_Clear(id){

		var dataInput = document.getElementById(id).getAttribute("data-tt-order");
		var tt_drag = document.querySelectorAll('[data-tt-drag="' + dataInput + '"]');
		var tt_drop = document.querySelectorAll('[data-tt-drop="' + dataInput + '"]');
		var tt_mark = document.querySelectorAll('[data-tt-target="' + dataInput + '"]');
        var cb_disAns = document.querySelectorAll('[data-tt-displayAns="' + dataInput + '"]');

        for(a=0;a<cb_disAns.length;a++){
            cb_disAns[a].style.display = "none";
        }

		var get_items = tt_CurItems[dataInput];
		var splitItems = get_items.split("|");
			tt_CurSelected[dataInput] = "";

		for(a=0;a<tt_drag.length;a++){
			if(tt_drag[a].innerHTML == ""){
			tt_drag[a].innerHTML = splitItems[a];
			}
		}
		for(b=0;b<tt_drop.length;b++){
			tt_drop[b].innerHTML = "";
			tt_drop[b].style.backgroundColor = "";
		}
		for(c=0;c<tt_mark.length;c++){
			ttMark=tt_mark[c].getAttribute('id')
			document.getElementById(ttMark).innerHTML = "";
			document.getElementById(ttMark).style.backgroundColor = "";
		}
		
		tt_CurDragId[dataInput] = "";
}

function tt_Reload(id){

		var dataInput = document.getElementById(id).getAttribute("data-tt-order");
		var tt_drag = document.querySelectorAll('[data-tt-drag="' + dataInput + '"]');
		var tt_drop = document.querySelectorAll('[data-tt-drop="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-tt-ls");

		tt_Clear(id);
            var tt_ans = localStorage[dataLs];
            var s_ans = tt_ans.split("|");
            console.log(s_ans)
			for (a=0;a<s_ans.length;a++){
				var i_ans = s_ans[a].split("^");
				for(b=0;b<i_ans.length;b++){

					if(i_ans[b] != ""){
                                console.log(i_ans[0])
                                console.log(i_ans[1])
                                console.log(i_ans[2])
					document.getElementById(i_ans[0]).innerHTML = i_ans[1];
					document.getElementById(i_ans[0]).style.backgroundColor = "rgb(255, 133, 52)";
					document.getElementById(i_ans[2]).innerHTML = "";
					tt_draggedIds[dataInput][document.getElementById(i_ans[0]).getAttribute('data-tt-dropOrd')] = i_ans[2];
					tt_CurDragId[dataInput] = i_ans[2];
					}

					}

				}

}
