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
	var order = act_type[a].getAttribute('data-' + type + '-order');

	var ls = act_type[a].getAttribute('data-' + type + '-ls');
/*	var act_save = document.querySelectorAll('[data-' + type + '-button="save"]');
	var act_show = document.querySelectorAll('[data-' + type + '-button="show"]');
	var act_clear = document.querySelectorAll('[data-' + type + '-button="clear"]');
	var act_reload = document.querySelectorAll('[data-' + type +
	'-button="reload"]');*/

    var act_save = $( "img[data-" + type + "-button='save'][data-" + type + "-order='" + order + "']");
    var act_show = $( "img[data-" + type + "-button='show'][data-" + type + "-order='" + order + "']");
    var act_clear = $( "img[data-" + type + "-button='clear'][data-" + type + "-order='" + order + "']");
    var act_reload = $( "img[data-" + type + "-button='reload'][data-" + type + "-order='" + order + "']");

/*    act_save[a].removeAttribute("src");
    act_show[a].removeAttribute("src");
    act_clear[a].removeAttribute("src");
    act_reload[a].removeAttribute("src");*/

    act_save.removeAttr("src");
    act_show.removeAttr("src");
    act_clear.removeAttr("src");
    act_reload.removeAttr("src");

/*    if(localStorage[ls]){
		act_save[a].setAttribute("class", "saveOff");
        act_show[a].setAttribute("class", "showOff");
        act_clear[a].setAttribute("class", "clearOff");
        act_reload[a].setAttribute("class", "reloadOn");
		}else{
        act_save[a].setAttribute("class", "saveOff");
        act_show[a].setAttribute("class", "showOff");
        act_clear[a].setAttribute("class", "clearOff");
        act_reload[a].setAttribute("class", "reloadOff");
			}*/
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