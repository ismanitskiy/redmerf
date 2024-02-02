/*localStorage.removeItem("ESSU001P002Q01");
localStorage.removeItem("ESSU001P002Q02");
localStorage.removeItem("ESSU001P002Q03");
localStorage.removeItem("ESSU001P002Q04");
localStorage.removeItem("ESSU001P002Q05");
localStorage.removeItem("ESSU001P002Q06");*/

var ta_save = document.querySelectorAll('[data-ta-button="save"]');
var ta_show = document.querySelectorAll('[data-ta-button="show"]');
var ta_clear = document.querySelectorAll('[data-ta-button="clear"]');
var ta_reload = document.querySelectorAll('[data-ta-button="reload"]');



var ta_saveBtn = new Array(ta_save.length);
var ta_showBtn = new Array(ta_show.length);
var ta_clearBtn = new Array(ta_clear.length);
var ta_reloadBtn = new Array(ta_reload.length);
var ta_inputBox = new Array(ta_save.length);	//input id

var ta_lsexist = new Array(ta_save.length);	//ls Exist Status
var ta_preBtn = new Array(ta_save.length);	//Previous Button
var ta_curBtn = new Array(ta_save.length);	//Current Button
var ta_savedStatus = new Array(ta_save.length);	//Save Status



for(a=0;a<ta_save.length;a++){
    ta_saveBtn[a] = ta_save[a].getAttribute("id");
	var ta_input = document.querySelectorAll('[data-ta-input="' + a + '"]');
    var dbid = ta_save[a].getAttribute("data-ta-ls");
    var actNo = a;
    ta_lsexist[actNo] = "no"
    if(localStorage[dbid]){
        ta_lsexist[actNo] = "yes"
    }


    var mix = ta_lsexist[actNo] + "|" + ta_curBtn[actNo] + "|" + ta_preBtn[actNo] + "|" + ta_savedStatus[actNo];
    button4("data-ta-button","data-ta-order","data-ta-ls",mix,ta_saveBtn[actNo],actNo,"refresh");


		for(b=0;b<ta_input.length;b++){
			var ta_inputId = ta_input[b].getAttribute('id');
			$("#" + ta_inputId).focus(function(e){

					localStorage['currentInput'] = $(this).html();
					

			});
			$("#" + ta_inputId).blur(function(e){
				var ta_pPos = document.getElementById(this.id).getAttribute("data-ta-input");

					if( localStorage['currentInput'] !== $(this).html()){
						//Your Code Here
                        var actNo = ta_pPos;
                        var mix = ta_lsexist[actNo] + "|" + ta_curBtn[actNo] + "|" + ta_preBtn[actNo] + "|" + ta_savedStatus[actNo];
                        button4("data-ta-button","data-ta-order","data-ta-ls",mix,ta_saveBtn[actNo],actNo,"blur");
                        ta_preBtn[actNo] = "blur";
					}
			});
		}
}
	
for(a=0;a<ta_save.length;a++){
	ta_saveBtn[a] = ta_save[a].getAttribute("id");
	var dbid = ta_save[a].getAttribute("data-ta-ls");

      	$("#" + ta_saveBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-ta-order");
			if($("#" + ta_saveBtn[dataOrder]).attr("class") == "saveOff"){ return;}
			var Id = this.id;

            var actNo = dataOrder;
            var mix = ta_lsexist[actNo] + "|" + ta_curBtn[actNo] + "|" + ta_preBtn[actNo] + "|" + ta_savedStatus[actNo];
            button4("data-ta-button","data-ta-order","data-ta-ls",mix,ta_saveBtn[actNo],dataOrder,"save")
            ta_preBtn[actNo] = "save";
            ta_savedStatus[actNo] = "yes";
            ta_Save(Id);
		});
}


for(a=0;a<ta_show.length;a++){
	ta_showBtn[a] = ta_show[a].getAttribute("id");
		$("#" + ta_showBtn[a]).click(function(e){
            e.preventDefault();
			var dataOrder = document.getElementById(this.id).getAttribute("data-ta-order");
			if($("#" + ta_showBtn[dataOrder]).attr("class") == "showOff"){ return;}
			
			var Id = this.id;

            var actNo = dataOrder;
            var mix = ta_lsexist[actNo] + "|" + ta_curBtn[actNo] + "|" + ta_preBtn[actNo] + "|" + ta_savedStatus[actNo];
            button4("data-ta-button","data-ta-order","data-ta-ls",mix,ta_saveBtn[actNo],dataOrder,"show")
            ta_preBtn[actNo] = "show";
     //       ta_Clear(Id);
			ta_Show(Id);
		});
		
}


for(a=0;a<ta_clear.length;a++){
	ta_clearBtn[a] = ta_clear[a].getAttribute("id");
		$("#" + ta_clearBtn[a]).click(function(e){
            e.preventDefault();
			var dataOrder = document.getElementById(this.id).getAttribute("data-ta-order");
            if($("#" + ta_clearBtn[dataOrder]).attr("class") == "clearOff"){ return;}

			var Id = this.id;
            var actNo = dataOrder;
            var mix = ta_lsexist[actNo] + "|" + ta_curBtn[actNo] + "|" + ta_preBtn[actNo] + "|" + ta_savedStatus[actNo];
            button4("data-ta-button","data-ta-order","data-ta-ls",mix,ta_saveBtn[actNo],dataOrder,"clear")
            ta_preBtn[actNo] = "clear";
			ta_Clear(Id);
		});
		
	}

for(a=0;a<ta_reload.length;a++){
	ta_reloadBtn[a] = ta_reload[a].getAttribute("id");
		$("#" + ta_reloadBtn[a]).click(function(e){
            e.preventDefault();
		var dataOrder = document.getElementById(this.id).getAttribute("data-ta-order");
			if($("#" + ta_reloadBtn[dataOrder]).attr("class") == "reloadOff"){ return;}
			var Id = this.id;
            var actNo = dataOrder;
            var mix = ta_lsexist[actNo] + "|" + ta_curBtn[actNo] + "|" + ta_preBtn[actNo] + "|" + ta_savedStatus[actNo];
            button4("data-ta-button","data-ta-order","data-ta-ls",mix,ta_saveBtn[actNo],dataOrder,"load")
            ta_preBtn[actNo] = "load";
			ta_Clear(Id);
			ta_Reload(Id);
		});
		
	}

function ta_Save(id){
		var dataInput = document.getElementById(id).getAttribute("data-ta-order");
		var ta_input = document.querySelectorAll('[data-ta-input="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-ta-ls");
        var className = document.getElementById(id).getAttribute("data-ta-className");

            var ta_ans = "";
			for(a=0;a<ta_input.length;a++){
                ta_ans += ta_input[a].innerHTML + "|"; 
			}
                localStorage[dataLs] = ta_ans;

                var getWidth= $('.'+className).css('width');
                var getHeight= $('.'+className).css('height')
                var getTop=$('.'+className).css('top')
                var getLeft=$('.'+className).css('left')

                var getTemp=-10;
                fancyCheckItems(getWidth,getHeight,getTop,getLeft,getTemp);
     //           document.getElementById("msgbox").innerHTML = "<div style='font-family: ACaslonPro-Bold; font-size:38px; padding-top:48px; padding-left:16px; color:#444444; line-height:130%;'>Your answers have been saved.</div>";
                
	
	}



function ta_Show(id){
		var dataInput = document.getElementById(id).getAttribute("data-ta-order");
		var ta_input = document.querySelectorAll('[data-ta-input="' + dataInput + '"]');
		var ta_answer = document.querySelectorAll('[data-ta-answer="' + dataInput + '"]');

		for(a=0;a<ta_input.length;a++){
			ta_input[a].contentEditable = "false";
			}

		for(b=0;b<ta_answer.length;b++){
			ta_answer[b].style.display="block";
			}
	}


function ta_Clear(id){
		var dataInput = document.getElementById(id).getAttribute("data-ta-order");
		var ta_input = document.querySelectorAll('[data-ta-input="' + dataInput + '"]');
		var ta_answer = document.querySelectorAll('[data-ta-answer="' + dataInput + '"]');

		for(a=0;a<ta_input.length;a++){
			ta_input[a].innerHTML = "";
			ta_input[a].contentEditable = "true";
			}
		for(b=0;b<ta_answer.length;b++){
			ta_answer[b].style.display="none";
			}

			
	}


function ta_Reload(id){
		var dataInput = document.getElementById(id).getAttribute("data-ta-order");
		var ta_input = document.querySelectorAll('[data-ta-input="' + dataInput + '"]');
		var dataLs = document.getElementById(id).getAttribute("data-ta-ls");
			var ta_ans = localStorage[dataLs];
            var s_ans = ta_ans.split("|");
            for (a=0;a<ta_input.length;a++)
            {  
                ta_input[a].innerHTML = s_ans[a];
            }


	}

/*$('.cls').click(function(e) {
e.preventDefault();
	var dataOrder = document.getElementById(this.id).getAttribute("data-ta-input");
	var xyz = $('[data-ta-order=' + dataOrder + '][data-ta-button="show"]');
		xyz.removeClass('showOff');
		xyz.addClass('showOn');
		xyz.attr("src","../images/show.png");
});  
*/