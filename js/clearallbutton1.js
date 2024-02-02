function clearAllButton(){
var act_ta = document.querySelectorAll('[data-ta-button="save"]');
var act_ch = document.querySelectorAll('[data-ch-button="save"]');


//    var act_type = document.querySelectorAll('[data-act-type]');

for(a=0;a<act_ta.length;a++){
    var order = act_ta[a].getAttribute('data-ta-order');

    var ls = act_ta[a].getAttribute('data-ta-ls');
    var act_save = document.querySelectorAll('[data-ta-button="save"]');
    var act_show = document.querySelectorAll('[data-ta-button="show"]');
    var act_clear = document.querySelectorAll('[data-ta-button="clear"]');
    var act_reload = document.querySelectorAll('[data-ta-button="reload"]');

    act_save[a].removeAttribute("src");
    act_show[a].removeAttribute("src");
    act_clear[a].removeAttribute("src");
    act_reload[a].removeAttribute("src");
    if(localStorage[ls]){
        act_save[a].setAttribute("class", "saveOff");
        act_show[a].setAttribute("class", "showOff");
        act_clear[a].setAttribute("class", "clearOff");
        act_reload[a].setAttribute("class", "reloadOn");
    }else{
        act_save[a].setAttribute("class", "saveOff");
        act_show[a].setAttribute("class", "showOff");
        act_clear[a].setAttribute("class", "clearOff");
        act_reload[a].setAttribute("class", "reloadOff");
    }

}

for(a=0;a<act_ch.length;a++){
    var orderch = act_ch[a].getAttribute('data-ch-order');

    var lsch = act_ch[a].getAttribute('data-ch-ls');
    var act_savech = document.querySelectorAll('[data-ch-button="save"]');
    var act_showch = document.querySelectorAll('[data-ch-button="show"]');
    var act_clearch = document.querySelectorAll('[data-ch-button="clear"]');
    var act_reloadch = document.querySelectorAll('[data-ch-button="reload"]');

    act_savech[a].removeAttribute("src");
    act_showch[a].removeAttribute("src");
    act_clearch[a].removeAttribute("src");
    act_reloadch[a].removeAttribute("src");
    if(localStorage[lsch]){
        act_savech[a].setAttribute("class", "saveOff");
        act_showch[a].setAttribute("class", "showOff");
        act_clearch[a].setAttribute("class", "clearOff");
        act_reloadch[a].setAttribute("class", "reloadOn");
    }else{
        act_savech[a].setAttribute("class", "saveOff");
        act_showch[a].setAttribute("class", "showOff");
        act_clearch[a].setAttribute("class", "clearOff");
        act_reloadch[a].setAttribute("class", "reloadOff");
    }
}


}