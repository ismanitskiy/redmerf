function clearAllButton(){
    var act_type = document.querySelectorAll('[data-act-type]');

    var act_input = document.querySelectorAll('[data-ta-input]');
	var act_taanswer = document.querySelectorAll('[data-ta-answer]');
	var act_ddanswer = document.querySelectorAll('[data-dd-ShowAnswer]');
	var act_ddinput = document.querySelectorAll('[data-dd-dropDown]');






for(a=0;a<act_ddinput.length;a++){
var dd_selectedItem = act_ddinput[a]
dd_selectedItem.options[0].selected = "true";
act_ddinput[a].disabled = false;
}


for(b=0;b<act_input.length;b++){
	act_input[b].innerHTML="";
}
	
for(c=0;c<act_taanswer.length;c++){
	act_taanswer[c].style.display="none";
}

for(d=0;d<act_ddanswer.length;d++){
	act_ddanswer[d].style.display="none";
	}

	
	
	
	
	
	
	
	
    for(a=0;a<act_type.length;a++){
	var type = act_type[a].getAttribute('data-act-type');
    var gen_save = document.querySelectorAll('[data-' + type + '-button="save"]');
    var order = act_type[a].getAttribute('data-' + type + '-order');

                for(b=0;b<gen_save.length;b++){
                    var type = gen_save[b].getAttribute('data-act-type');
                    var order = gen_save[b].getAttribute('data-' + type + '-order');


                    var act_save = $( "img[data-" + type + "-button='save'][data-" + type + "-order='" + order + "']");
                    var act_show = $( "img[data-" + type + "-button='show'][data-" + type + "-order='" + order + "']");
                    var act_clear = $( "img[data-" + type + "-button='clear'][data-" + type + "-order='" + order + "']");
                    var act_reload = $( "img[data-" + type + "-button='reload'][data-" + type + "-order='" + order + "']");

                    
                    act_save.removeAttr("src");
                    act_show.removeAttr("src");
                    act_clear.removeAttr("src");
                    act_reload.removeAttr("src");

                    var ls = act_save.attr('data-' + type + '-ls');

                    if(localStorage[ls]){
                        act_save.attr("class", "saveOff");
                        act_show.attr("class", "showOff");
                        act_clear.attr("class", "clearOff");
                        act_reload.attr("class", "reloadOn");
                    }else{
                        act_save.attr("class", "saveOff");
                        act_show.attr("class", "showOff");
                        act_clear.attr("class", "clearOff");
                        act_reload.attr("class", "reloadOff");
                    }
                    
                }
                
	}
}