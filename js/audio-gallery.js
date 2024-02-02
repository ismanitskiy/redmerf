var au_start = document.querySelectorAll('[data-au-button="start"]');
var au_previous = document.querySelectorAll('[data-au-button="previous"]');
var au_next = document.querySelectorAll('[data-au-button="next"]');
var au_close = document.querySelectorAll('[data-au-button="close"]');

var i=0;			
for(a=0;a<au_start.length;a++){

	$(au_close[a]).click(function (e) {
		e.preventDefault();
		var start = document.querySelectorAll('[data-au-button="start"]');
		var au_order = $(this).attr("data-au-order");
		var au_container = document.querySelectorAll('[data-au-container="' + au_order + '"]');
		var au_buttonSet = document.querySelectorAll('[data-au-buttonSet="' + au_order + '"]');
		var au_audioElement = document.querySelectorAll('[data-au-element="' + au_order + '"]');

		for(b=0;b<start.length;b++){
			var container = document.querySelectorAll('[data-au-container="' + b + '"]');
			var buttonSet = document.querySelectorAll('[data-au-buttonSet="' + b + '"]');
			var audioElement = document.querySelectorAll('[data-au-element="' + b + '"]');
				audioElement[0].pause();
				$(container[0]).css("display","none");
				$(buttonSet[0]).css("display","none");
				i=0;
			}

	});
	
	$(au_start[a]).click(function (e) {
		e.preventDefault();
		var start = document.querySelectorAll('[data-au-button="start"]');
		var au_order = $(this).attr("data-au-order");
		var au_container = document.querySelectorAll('[data-au-container="' + au_order + '"]');
		var au_buttonSet = document.querySelectorAll('[data-au-buttonSet="' + au_order + '"]');
		var au_audioElement = document.querySelectorAll('[data-au-element="' + au_order + '"]');
		


		if($(au_container[0]).css("display") == "none" && $(au_buttonSet[0]).css("display") == "none"){

		for(b=0;b<start.length;b++){
			var container = document.querySelectorAll('[data-au-container="' + b + '"]');
			var buttonSet = document.querySelectorAll('[data-au-buttonSet="' + b + '"]');
			var audioElement = document.querySelectorAll('[data-au-element="' + b + '"]');
				audioElement[0].pause();
				$(container[0]).css("display","none");
				$(buttonSet[0]).css("display","none");
				i=0;
			}


			$(au_container[0]).css("display","block");
			$(au_buttonSet[0]).css("display","block");
			NN1(au_order);
			}else{
			$(au_container[0]).css("display","none");
			$(au_buttonSet[0]).css("display","none");
	        au_audioElement[0].pause();
			i=0;
				}
	});
}

for(a=0;a<au_previous.length;a++){
	$(au_previous[a]).click(function (e) {
		e.preventDefault();
		var au_order = $(this).attr("data-au-order");
		NN2(au_order);		
	});
}

for(a=0;a<au_next.length;a++){
	$(au_next[a]).click(function (e) {
		e.preventDefault();
		var au_order = $(this).attr("data-au-order");
		NN1(au_order);		
	});
}


function NN1(o){
	var au_container = document.querySelectorAll('[data-au-container="' + o + '"]');
	var au_audioElement = document.querySelectorAll('[data-au-element="' + o + '"]');
	var au_activity = document.querySelectorAll('[data-au-activity="' + o + '"]');
	var au_audioFile = au_activity[0].querySelectorAll('[data-au-file]');
	
    i++;
    if(i == (au_audioFile.length + 1)){ i = 1;}
    au_audioElement[0].pause();
    au_audioElement[0].src=au_audioFile[i-1].getAttribute("data-au-file");
    au_container[0].style.display = "block";
    au_audioElement[0].play();
}

function NN2(o){
	var au_container = document.querySelectorAll('[data-au-container="' + o + '"]');
	var au_audioElement = document.querySelectorAll('[data-au-element="' + o + '"]');
	var au_activity = document.querySelectorAll('[data-au-activity="' + o + '"]');
	var au_audioFile = au_activity[0].querySelectorAll('[data-au-file]');

    if(i != 0){
        i--;
    }

    if(i == 0){ i = au_audioFile.length;}

    au_audioElement[0].pause();
    au_audioElement[0].src=au_audioFile[i-1].getAttribute("data-au-file");
    au_container[0].style.display = "block";		
    au_audioElement[0].play();
}
