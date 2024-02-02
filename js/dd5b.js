//localStorage.removeItem("ULRWA02_ULRWA02U01P002Q01");
//localStorage.removeItem("ddTestTwo");

//alert(document.querySelectorAll('[data-dd-input]').length);
//alert(document.querySelectorAll('[data-dd-button="save"]')[1].getAttribute('id'));

var dd_save = document.querySelectorAll('[data-dd-button="save"]');
var dd_check = document.querySelectorAll('[data-dd-button="check"]');
var dd_show = document.querySelectorAll('[data-dd-button="show"]');
var dd_clear = document.querySelectorAll('[data-dd-button="clear"]');
var dd_reload = document.querySelectorAll('[data-dd-button="reload"]');

var dd_saveBtn = new Array(dd_save.length);
var dd_checkBtn = new Array(dd_check.length);
var dd_showBtn = new Array(dd_show.length);
var dd_clearBtn = new Array(dd_clear.length);
var dd_reloadBtn = new Array(dd_reload.length);
var dd_inputBox = new Array(dd_save.length);	//input id
var dd_curBtn = new Array(dd_save.length);	//Current Button

var dd_lsexist = new Array(dd_save.length);	//ls Exist Status
var dd_preBtn = new Array(dd_save.length);	//Previous Button
var dd_savedStatus = new Array(dd_save.length);	//Save Status
var dd_checkedStatus = new Array(dd_save.length);	//Check Status


for(a=0;a<dd_save.length;a++){
	var dd_input = document.querySelectorAll('[data-dd-dropDown="' + a + '"]');
		

		for(b=0;b<dd_input.length;b++){
			var dd_inputId = dd_input[b].getAttribute('id');

                $("#" + dd_inputId).change(function (e) {
            e.preventDefault();
				var dd_pPos = document.getElementById(this.id).getAttribute("data-dd-dropDown");
                var actNo = dd_pPos
                var mix = dd_lsexist[actNo] + "|" + dd_curBtn[actNo] + "|" + dd_preBtn[actNo] + "|" + dd_savedStatus[actNo] + "|" + dd_checkedStatus[actNo];
                button("data-dd-button","data-dd-order","data-dd-ls",mix,dd_saveBtn[actNo],actNo,"changed");
                        dd_preBtn[actNo] = "changed";
	
						//Your Code Here
			});
		}
}
	
for(a=0;a<dd_save.length;a++){
	dd_saveBtn[a] = dd_save[a].getAttribute("id");
	var dbid = dd_save[a].getAttribute("data-dd-ls");

        dd_lsexist[a] = "no"
        if(localStorage[dbid]){
            dd_lsexist[a] = "yes"
        }

        var actNo = a;
        var mix = dd_lsexist[actNo] + "|" + dd_curBtn[actNo] + "|" + dd_preBtn[actNo] + "|" + dd_savedStatus[actNo] + "|" + dd_checkedStatus[actNo];
        button("data-dd-button","data-dd-order","data-dd-ls",mix,dd_saveBtn[actNo],actNo,"refresh");


		$("#" + dd_saveBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-dd-order");
			if($("#" + dd_saveBtn[dataOrder]).attr("class") == "saveOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = dd_lsexist[actNo] + "|" + dd_curBtn[actNo] + "|" + dd_preBtn[actNo] + "|" + dd_savedStatus[actNo] + "|" + dd_checkedStatus[actNo];
            button("data-dd-button","data-dd-order","data-dd-ls",mix,dd_saveBtn[actNo],dataOrder,"save")
            dd_preBtn[actNo] = "save";
            dd_savedStatus[actNo] = "yes";

            dd_Save(Id);
            });
}

for(a=0;a<dd_check.length;a++){
	dd_checkBtn[a] = dd_check[a].getAttribute("id");

		$("#" + dd_checkBtn[a]).click(function(e){

            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-dd-order");
			if($("#" + dd_checkBtn[dataOrder]).attr("class") == "checkOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = dd_lsexist[actNo] + "|" + dd_curBtn[actNo] + "|" + dd_preBtn[actNo] + "|" + dd_savedStatus[actNo] + "|" + dd_checkedStatus[actNo];
            button("data-dd-button","data-dd-order","data-dd-ls",mix,dd_saveBtn[actNo],dataOrder,"check")
            dd_preBtn[actNo] = "check";
            dd_checkedStatus[actNo] = "yes";

            dd_Check(Id);
		});
}


for(a=0;a<dd_show.length;a++){
	dd_showBtn[a] = dd_show[a].getAttribute("id");



		$("#" + dd_showBtn[a]).click(function(e){

            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-dd-order");
			if($("#" + dd_showBtn[dataOrder]).attr("class") == "showOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = dd_lsexist[actNo] + "|" + dd_curBtn[actNo] + "|" + dd_preBtn[actNo] + "|" + dd_savedStatus[actNo] + "|" + dd_checkedStatus[actNo];
            button("data-dd-button","data-dd-order","data-dd-ls",mix,dd_saveBtn[actNo],dataOrder,"show")
            dd_preBtn[actNo] = "show";

            dd_Show(Id);
		});
}


for(a=0;a<dd_clear.length;a++){
	dd_clearBtn[a] = dd_clear[a].getAttribute("id");
		$("#" + dd_clearBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-dd-order");
			if($("#" + dd_clearBtn[dataOrder]).attr("class") == "clearOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = dd_lsexist[actNo] + "|" + dd_curBtn[actNo] + "|" + dd_preBtn[actNo] + "|" + dd_savedStatus[actNo] + "|" + dd_checkedStatus[actNo];
            button("data-dd-button","data-dd-order","data-dd-ls",mix,dd_saveBtn[actNo],dataOrder,"clear")
            dd_preBtn[actNo] = "clear";
            dd_Clear(Id);
		});
		
	}

for(a=0;a<dd_reload.length;a++){
	dd_reloadBtn[a] = dd_reload[a].getAttribute("id");
		$("#" + dd_reloadBtn[a]).click(function(e){

			e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-dd-order");

			if($("#" + dd_reloadBtn[dataOrder]).attr("class") == "reloadOff"){ return;}

			var Id = this.id;

			dd_Clear(Id);
			dd_Reload(Id);

            var actNo = dataOrder;
            var mix = dd_lsexist[actNo] + "|" + dd_curBtn[actNo] + "|" + dd_preBtn[actNo] + "|" + dd_savedStatus[actNo] + "|" + dd_checkedStatus[actNo];
            button("data-dd-button","data-dd-order","data-dd-ls",mix,dd_saveBtn[actNo],dataOrder,"load")
            dd_preBtn[actNo] = "load";
		});
		
	}

function getindex(select, intxt) {
    var selected = "";
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value.toLowerCase() == intxt.toLowerCase()) {
            selected = i;
        }
    }
    return selected;
}

function getcurrentindex(select) {
    var selected = "";
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].selected) {
            selected = i;
        }
    }
    return selected;
}


function dd_Save(id){
	 var dd_ans = "";
    var dataInput = document.getElementById(id).getAttribute("data-dd-order");
    var dd_input = document.querySelectorAll('[data-dd-dropDown="' + dataInput + '"]');
    var dataLs = document.getElementById(id).getAttribute("data-dd-ls");
    var className = document.getElementById(id).getAttribute("data-dd-className");
	var dd_target = document.querySelectorAll('[data-dd-vmark="' + dataInput + '"]');

var dd_cans = 0;

    for(a=0;a<dd_input.length;a++){

        var dd_selectItem = dd_input[a];
        var dd_selectId = dd_input[a].getAttribute('id');
        var dd_eans = dd_selectItem.options[getcurrentindex(dd_selectItem)].value;
        dd_ans += dd_eans + "|";
 		dd_target[a].style.display="none";
}
   localStorage[dataLs] = dd_ans;

                var getWidth= $('.'+className).css('width')
                var getHeight= $('.'+className).css('height')
                var getTop=$('.'+className).css('top')
                var getLeft=$('.'+className).css('left')
                var getTemp=-10;
                fancyCheckItems(getWidth,getHeight,getTop,getLeft,getTemp);
                document.getElementById("msgbox").innerHTML = "<div style='font-family: SourceSansPro-Regular; font-size:23px; padding-top:30px; text-align:center; color:#000; line-height:130%;'>Your answers have been saved.</div>";
}


function dd_Clear(id){
		var dataInput = document.getElementById(id).getAttribute("data-dd-order");
		var dd_input = document.querySelectorAll('[data-dd-dropDown="' + dataInput + '"]');
		var dd_target = document.querySelectorAll('[data-dd-vmark="' + dataInput + '"]');
		for(a=0;a<dd_input.length;a++){
			var dd_selectedItem = dd_input[a]
             dd_selectedItem.options[0].selected = "true";
			 dd_target[a].style.display="none";
             dd_input[a].disabled = false;
			}
	}

function dd_Show(id){

		var dataInput = document.getElementById(id).getAttribute("data-dd-order");
		var dd_input = document.querySelectorAll('[data-dd-dropDown="' + dataInput + '"]');
		var dd_target = document.querySelectorAll('[data-dd-vmark="' + dataInput + '"]');
    //    dd_Clear(Id);
		
             for (a=0;a<dd_input.length;a++) {
            var dd_selectItem = dd_input[a];

            var dd_selectId = dd_input[a].getAttribute('data-dd-answer');
                    var dd_cIndex = getindex(dd_selectItem, dd_selectId);
                    dd_selectItem.options[dd_cIndex].selected = "true";
                    dd_target[a].style.display="none";
                    dd_input[a].disabled = true;
			}

	}

function dd_Check(id){
	var dataInput = document.getElementById(id).getAttribute("data-dd-order");
		var dd_input = document.querySelectorAll('[data-dd-dropDown="' + dataInput + '"]');
		var dd_target = document.querySelectorAll('[data-dd-vmark="' + dataInput + '"]');
		var className = document.getElementById(id).getAttribute("data-dd-className");
var dd_cans = 0;
			for(a=0;a<dd_input.length;a++){
			   			var dd_answer = dd_input[a].getAttribute('data-dd-answer');
					    var dd_selectItem = dd_input[a];
					    var dd_selectId = dd_input[a].getAttribute('id');
						var dd_eans = dd_selectItem.options[getcurrentindex(dd_selectItem)].value;
						
						if(dd_eans == dd_answer){
						dd_target[a].style.color = "green";
						dd_target[a].innerHTML="&#10004;";
						dd_cans = dd_cans + 1;
							}
					else{
						dd_target[a].style.color = "red";
						dd_target[a].innerHTML="&#10006;";
					}
					dd_target[a].style.display="inline-block";
					
			}
			  var tscore = (parseInt(dd_cans) * 100) / dd_input.length;
            tscore = Math.round(tscore);
            var wscore =  dd_input.length - parseInt(dd_cans);

                var getWidth= $('.'+className).css('width')
                var getHeight= $('.'+className).css('height')
                var getTop=$('.'+className).css('top')
                var getLeft=$('.'+className).css('left')
                var getTemp=-10;
                fancyCheckItems(getWidth,getHeight,getTop,getLeft,getTemp);
                document.getElementById("msgbox").innerHTML = "<div style='font-family: SourceSansPro-Regular; font-size:23px; padding-top:5px; text-align:center;  color:#000; line-height:130%;'> You got " + tscore + "% correct. <br/> Correct answer : " + dd_cans + " <br/>Incorrect : " + wscore + " </div>";
			
}



function dd_Reload(id){

		var dataInput = document.getElementById(id).getAttribute("data-dd-order");
		var dd_input = document.querySelectorAll('[data-dd-dropDown="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-dd-ls");
		var dd_target = document.querySelectorAll('[data-dd-vmark="' + dataInput + '"]');

            var dd_ans = localStorage[dataLs];

			var s_ans = dd_ans.split("|");

            var acount = 0;
            for (a=0;a<dd_input.length;a++) {
            var dd_selectItem = dd_input[a];
            var dd_selectId = dd_input[a].getAttribute('id');
                    var dd_cIndex = getindex(dd_selectItem, s_ans[acount]);
                    dd_selectItem.options[dd_cIndex].selected = "true";
                    acount++;
					dd_target[a].style.display="none";
			}
	}



