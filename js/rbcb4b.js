var rbcb_save = document.querySelectorAll('[data-rbcb-button="save"]');
var rbcb_show = document.querySelectorAll('[data-rbcb-button="show"]');
var rbcb_clear = document.querySelectorAll('[data-rbcb-button="clear"]');
var rbcb_reload = document.querySelectorAll('[data-rbcb-button="reload"]');

var rbcb_saveBtn = new Array(rbcb_save.length);
var rbcb_showBtn = new Array(rbcb_show.length);
var rbcb_clearBtn = new Array(rbcb_save.length);
var rbcb_reloadBtn = new Array(rbcb_save.length);
var rbcb_selCount = new Array(rbcb_save.length);
var rbcb_selId = new Array(rbcb_save.length);
var rbcb_curBtn = new Array(rbcb_save.length);

var rbcb_lsexist = new Array(rbcb_save.length);	//ls Exist Status
var rbcb_preBtn = new Array(rbcb_save.length);	//Previous Button
var rbcb_curBtn = new Array(rbcb_save.length);	//Current Button
var rbcb_savedStatus = new Array(rbcb_save.length);	//Save Status
var rbcb_disableClick = new Array(rbcb_save.length);	//Check Status

for(a=0;a<rbcb_save.length;a++){
	var radioC = document.querySelectorAll('[data-rbcb-act="' + a + '"]');
	var radioCdiv = radioC[0].getElementsByTagName('div');
		rbcb_saveBtn[a] = rbcb_save[a].getAttribute("id");
		rbcb_showBtn[a] = rbcb_show[a].getAttribute("id");
		rbcb_clearBtn[a] = rbcb_clear[a].getAttribute("id");
		rbcb_reloadBtn[a] = rbcb_reload[a].getAttribute("id");
	var dbid = rbcb_save[a].getAttribute("data-rbcb-ls");
	rbcb_disableClick[a] = 0;


    var actNo = a;
    rbcb_lsexist[actNo] = "no"
                            if(localStorage[dbid]){
        rbcb_lsexist[actNo] = "yes"
    }


    var actNo = a;
    var mix = rbcb_lsexist[actNo] + "|" + rbcb_curBtn[actNo] + "|" + rbcb_preBtn[actNo] + "|" + rbcb_savedStatus[actNo];
    button4("data-rbcb-button","data-rbcb-order","data-rbcb-ls",mix,rbcb_saveBtn[actNo],actNo,"refresh");


        rbcb_selCount[a] = new Array(radioCdiv.length);
		rbcb_selId[a] = new Array(radioCdiv.length);
		
		

	for(b=0;b<radioCdiv.length;b++){
		var rbcb_items = radioCdiv[b].getAttribute('data-rbcb-options');
		var rbcb_itemsSplit = rbcb_items.split("|");
			
			rbcb_selCount[a][b] = 0;
			for(c=0;c<rbcb_itemsSplit.length;c++){
				var rbcb_id = document.getElementById(rbcb_itemsSplit[c]).getAttribute('id');

				$("#" + rbcb_id).removeAttr("src");

                $("#" + rbcb_id).click(function (e) {
		            e.preventDefault();
					var ac = document.getElementById(this.id).getAttribute('data-rbcb-count');
					var ag = document.getElementById(this.id).getAttribute('data-rbcb-grp');
					var rl = document.getElementById(this.id).getAttribute('data-rbcb-limit');
					var bt = document.getElementById(this.id).getAttribute('data-rbcb-type');
					var nl = parseInt(rl) - 1;
					var Id = this.id;

                    if(rbcb_disableClick[ac] == 1){
                        return;
                    }else{
                    if(bt == "rb"){
								if( document.getElementById(this.id).getAttribute("class") == "grayOff" 
								&& rbcb_selCount[ac][ag] < rl
								){
								$("#" + this.id).attr("class","grayOn");
                               /* $("#" + this.id + " ~ span").css("backgroundColor","#ffff99");
								$("#" + this.id + " ~
								span").css("font-family","SourceSansPro-Semibold");*/
									rbcb_selCount[ac][ag] += 1;
									}
								else if(document.getElementById(this.id).getAttribute("class") == "grayOff" 
								&& rbcb_selCount[ac][ag] > -1
								&& rbcb_selCount[ac][ag] == rl
								){
								$("#" + rbcb_selId[ac][ag]).attr("class","grayOff");
/*                                $("#" + rbcb_selId[ac][ag] + " ~ span").css("backgroundColor","");
								$("#" + rbcb_selId[ac][ag] + " ~
								span").css("font-family","SourceSansPro-Light");*/
								$("#" + this.id).attr("class","grayOn");
/*                                $("#" + this.id + " ~ span").css("backgroundColor","#ffff99")
								$("#" + this.id + " ~
								span").css("font-family","SourceSansPro-Semibold");*/
									}
								
								else if(document.getElementById(this.id).getAttribute("class") == "grayOn" 
								){
								$("#" + this.id).attr("class","grayOff");
/*                                $("#" + this.id + " ~ span").css("backgroundColor","")
                                $("#" + this.id + " ~
                                span").css("font-family","SourceSansPro-Light");*/
									rbcb_selCount[ac][ag] -= 1;
									}
					}else{
								if( document.getElementById(this.id).getAttribute("class") == "checkboxOff" 
								&& rbcb_selCount[ac][ag] < rl
								){
								$("#" + this.id).attr("class","checkboxOn");
/*                                $("#" + this.id + " ~ span").css("backgroundColor","#ffff99")
								$("#" + this.id + " ~
								span").css("font-family","SourceSansPro-Semibold");*/
									rbcb_selCount[ac][ag] += 1;
									}
								else if(document.getElementById(this.id).getAttribute("class") == "checkboxOff" 
								&& rbcb_selCount[ac][ag] > -1
								&& rbcb_selCount[ac][ag] == rl
								){
								$("#" + rbcb_selId[ac][ag]).attr("class","checkboxOff");
/*                                $("#" + rbcb_selId[ac][ag] + " ~ span").css("backgroundColor","")
                                $("#" + rbcb_selId[ac][ag] + " ~
                                span").css("font-family","SourceSansPro-Light")*/
								$("#" + this.id).attr("class","checkboxOn");
/*                                $("#" + this.id + " ~ span").css("backgroundColor","#ffff99")
								$("#" + this.id + " ~
								span").css("font-family","SourceSansPro-Semibold");*/
									}
								
								else if(document.getElementById(this.id).getAttribute("class") == "checkboxOn" 
								){
								$("#" + this.id).attr("class","checkboxOff");
/*                                $("#" + this.id + " ~ span").css("backgroundColor","")
                                $("#" + this.id + " ~
                                span").css("font-family","SourceSansPro-Light");*/
									rbcb_selCount[ac][ag] -= 1;
									}
						}

					rbcb_selId[ac][ag] = this.id;
                    }
                    var actNo = ac;
                    var mix = rbcb_lsexist[actNo] + "|" + rbcb_curBtn[actNo] + "|" + rbcb_preBtn[actNo] + "|" + rbcb_savedStatus[actNo];
                    button4("data-rbcb-button","data-rbcb-order","data-rbcb-ls",mix,rbcb_saveBtn[actNo],actNo,"blur");
                    rbcb_preBtn[actNo] = "blur";

				});
				}
		}

		$("#" + rbcb_saveBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-rbcb-order");
			if($("#" + rbcb_saveBtn[dataOrder]).attr("class") == "saveOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = rbcb_lsexist[actNo] + "|" + rbcb_curBtn[actNo] + "|" + rbcb_preBtn[actNo] + "|" + rbcb_savedStatus[actNo];
            button4("data-rbcb-button","data-rbcb-order","data-rbcb-ls",mix,rbcb_saveBtn[actNo],actNo,"save");
            rbcb_preBtn[actNo] = "save";
            rbcb_savedStatus[actNo] = "yes";
			rbcb_Save(Id);
		});


		$("#" + rbcb_showBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-rbcb-order");
			if($("#" + rbcb_showBtn[dataOrder]).attr("class") == "showOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = rbcb_lsexist[actNo] + "|" + rbcb_curBtn[actNo] + "|" + rbcb_preBtn[actNo] + "|" + rbcb_savedStatus[actNo];
            button4("data-rbcb-button","data-rbcb-order","data-rbcb-ls",mix,rbcb_saveBtn[actNo],actNo,"show");
            rbcb_preBtn[actNo] = "show";
			rbcb_Show(Id);
            rbcb_disableClick[actNo] = 1;
		});

		$("#" + rbcb_clearBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-rbcb-order");
			if($("#" + rbcb_clearBtn[dataOrder]).attr("class") == "clearOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = rbcb_lsexist[actNo] + "|" + rbcb_curBtn[actNo] + "|" + rbcb_preBtn[actNo] + "|" + rbcb_savedStatus[actNo];
            button4("data-rbcb-button","data-rbcb-order","data-rbcb-ls",mix,rbcb_saveBtn[actNo],actNo,"clear");
            rbcb_preBtn[actNo] = "clear";
			rbcb_Clear(Id);
            rbcb_disableClick[actNo] = 0; 			
		});

		$("#" + rbcb_reloadBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-rbcb-order");
			if($("#" + rbcb_reloadBtn[dataOrder]).attr("class") == "reloadOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = rbcb_lsexist[actNo] + "|" + rbcb_curBtn[actNo] + "|" + rbcb_preBtn[actNo] + "|" + rbcb_savedStatus[actNo];
            button4("data-rbcb-button","data-rbcb-order","data-rbcb-ls",mix,rbcb_saveBtn[actNo],actNo,"load");
            rbcb_preBtn[actNo] = "load";
            rbcb_disableClick[actNo] = 0;
			rbcb_Reload(Id);
   });


}


function rbcb_Save(id){
		var dataInput = document.getElementById(id).getAttribute("data-rbcb-order");
		var rbcb_input = document.querySelectorAll('[data-rbcb-act="' + dataInput + '"]');
		var radioCdiv = rbcb_input[0].getElementsByTagName('div');
		var dataLs = document.getElementById(id).getAttribute("data-rbcb-ls");
		var className = document.getElementById(id).getAttribute("data-rbcb-className");
		<!--Audio and Video-->
		if(document.getElementById(id).hasAttribute("data-audioId")){
		audioAvailable(id);
		}
		if(document.getElementById(id).hasAttribute("data-videoId")){
		videoScript(id);
		}
		<!--End of Audio and Video-->
		var ans = "";
	for(b=0;b<radioCdiv.length;b++){
		var rbcb_items = radioCdiv[b].getAttribute('data-rbcb-options');
		var rbcb_itemsSplit = rbcb_items.split("|");
			for(c=0;c<rbcb_itemsSplit.length;c++){
				var bt = document.getElementById(rbcb_itemsSplit[c]).getAttribute("data-rbcb-type");
				if(bt == "rb"){
				if( document.getElementById(rbcb_itemsSplit[c]).getAttribute("class") == "grayOn"){
						ans += rbcb_itemsSplit[c] + "|";
					}
				}else{
				if( document.getElementById(rbcb_itemsSplit[c]).getAttribute("class") == "checkboxOn"){
						ans += rbcb_itemsSplit[c] + "|";
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
//		document.getElementById("msgbox").innerHTML = "<div style='font-family: SourceSansPro-Regular; font-size:23px; padding-top:30px; text-align:center; color:#000; line-height:130%;'>Your answers have been saved.</div>";
            
}

function rbcb_Show(id){
		var dataInput = document.getElementById(id).getAttribute("data-rbcb-order");
		var rbcb_input = document.querySelectorAll('[data-rbcb-act="' + dataInput + '"]');
		var rbcb_target = document.querySelectorAll('[data-rbcb-target="' + dataInput + '"]');
		var radioCdiv = rbcb_input[0].getElementsByTagName('div');

//		rbcb_Clear(id);

		for(a=0;a<radioCdiv.length;a++){
			var ansSet = radioCdiv[a].getAttribute('data-rbcb-answer');
			var ansSet = ansSet.split("|");

			for(b=0;b<ansSet.length;b++){
				var curId = document.getElementById(ansSet[b]).getAttribute("id");
				var ord = document.getElementById(curId).getAttribute("data-rbcb-count");
				var bt = document.getElementById(curId).getAttribute("data-rbcb-type");
				var lt = document.getElementById(curId).getAttribute("data-rbcb-limit");
//				rbcb_selCount[dataInput][a] = 0;
				if(bt == "rb"){
//					document.getElementById(curId).setAttribute("class","grayOn");
                    $("#" + curId + " ~ span").css("backgroundColor","#ffff99");
                    $("#" + curId + " ~ span").css("font-family","SourceSansPro-Semibold");
					rbcb_selCount[dataInput][a] += 1;
					rbcb_selId[dataInput][a] = ansSet[b];
				}
				else{
//					document.getElementById(curId).setAttribute("class","checkboxOn");
                    $("#" + curId + " ~ span").css("backgroundColor","#ffff99");
                    $("#" + curId + " ~ span").css("font-family","SourceSansPro-Semibold");
					rbcb_selCount[dataInput][a] += 1;
					rbcb_selId[dataInput][a] = ansSet[b];
				}


			}
						
			}
		
}


function rbcb_Clear(id){
		var dataInput = document.getElementById(id).getAttribute("data-rbcb-order");
		var rbcb_input = document.querySelectorAll('[data-rbcb-act="' + dataInput + '"]');
//		var rbcb_target = document.querySelectorAll('[data-rbcb-target="' + dataInput + '"]');
		var radioCdiv = rbcb_input[0].getElementsByTagName('div');
		var dataLs = document.getElementById(id).getAttribute("data-rbcb-ls");

	for(b=0;b<radioCdiv.length;b++){
		var rbcb_items = radioCdiv[b].getAttribute('data-rbcb-options');
		var rbcb_itemsSplit = rbcb_items.split("|");
			for(c=0;c<rbcb_itemsSplit.length;c++){
					var ac = document.getElementById(rbcb_itemsSplit[0]).getAttribute('data-rbcb-count');
					var ag = document.getElementById(rbcb_itemsSplit[0]).getAttribute('data-rbcb-grp');
					var bt = document.getElementById(rbcb_itemsSplit[0]).getAttribute('data-rbcb-type');

					if(bt == "rb"){
					document.getElementById(rbcb_itemsSplit[c]).setAttribute("class","grayOff");
                    $("#" + rbcb_itemsSplit[c] + " ~ span").css("backgroundColor","")
                    $("#" + rbcb_itemsSplit[c] + " ~ span").css("font-family","SourceSansPro-Light");
					}else{
					document.getElementById(rbcb_itemsSplit[c]).setAttribute("class","checkboxOff");
                    $("#" + rbcb_itemsSplit[c] + " ~ span").css("backgroundColor","")
                    $("#" + rbcb_itemsSplit[c] + " ~ span").css("font-family","SourceSansPro-Light");
						}
					rbcb_selCount[ac][ag] = 0;
			}
	}

/*	for(d=0;d<rbcb_target.length;d++){
		rbcb_target[d].style.display = "none";
		}*/

}

function rbcb_Reload(id){
		var dataInput = document.getElementById(id).getAttribute("data-rbcb-order");
		var rbcb_input = document.querySelectorAll('[data-rbcb-act="' + dataInput + '"]');
		var radioCdiv = rbcb_input[0].getElementsByTagName('div');
		var dataLs = document.getElementById(id).getAttribute("data-rbcb-ls");
		rbcb_Clear(id);

            var rbcb_ans = localStorage[dataLs];
            var s_ans = rbcb_ans.split("|");
            var acount = 0;
            for (a=0;a<s_ans.length;a++) {
					var ac = document.getElementById(s_ans[a]).getAttribute('data-rbcb-count');
					var ag = document.getElementById(s_ans[a]).getAttribute('data-rbcb-grp');
					var bt = document.getElementById(s_ans[a]).getAttribute('data-rbcb-type');
					if(bt == "rb"){
					document.getElementById(s_ans[a]).setAttribute("class","grayOn");
/*                    $("#" + s_ans[a] + " ~ span").css("backgroundColor","#ffff99");
                    $("#" + s_ans[a] + " ~
                    span").css("font-family","SourceSansPro-Semibold");*/
					}else{
					document.getElementById(s_ans[a]).setAttribute("class","checkboxOn");
/*                    $("#" + s_ans[a] + " ~ span").css("backgroundColor","#ffff99");
                    $("#" + s_ans[a] + " ~
                    span").css("font-family","SourceSansPro-Semibold");*/
						}
					rbcb_selCount[ac][ag] += 1;
					rbcb_selId[ac][ag] = s_ans[a];
			}

	}