/*var dorder=document.querySelectorAll('[data-divorder]');
var dpbutton=document.querySelectorAll('[data-np-button="pone"]');

var dnbutton=document.querySelectorAll('[data-np-button="none"]');

for (a=0; a<dorder.length; a++){
	alert(dorder.length);
	var dnextbutton=dnbutton[a].getAttribute("id");
	$("#" + dnextbutton).click(function(){
var divorder=document.getElementById(this.id).getAttribute('data-np-order');
		var divdata = document.querySelectorAll('[data-divorder="'+ divorder + '"]');
//		alert(divdata);
});
	}



*/
//alert("kannan");

$(document).ready(function() {
    var divs = $('.mydivs>div');
    var now = 0; // currently shown div
    divs.hide().first().show(); // hide all divs except first
    $("button[name=next]").click(function(e) {
    	e.preventDefault();
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function(e) {
    	e.preventDefault();
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // show previous
    });
});