$("#searchC").keydown(function(e){
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
    
});

$("#search").click(function(){
	var itms = document.querySelectorAll('[data-item]');
	var txt = document.getElementById('searchC').innerHTML;
	var rst = document.getElementById('showResult');
//		txt = txt.replace(/\s{2,10}/g, ' ');
		txtln = txt.split("<div><br></div>");

	for(a=0;a<txtln.length;a++){
		txt = txt.replace("<div><br></div>","");
		}
		txt = txt.replace(/&nbsp;/g,"");	

	for(a=0;a<itms.length;a++){
		var itm = itms[a].getAttribute('data-item');
			if(itm.toLowerCase() == txt.toLowerCase()){
					var allTxt = itms[a].innerHTML;
					rst.innerHTML = allTxt;
					return;
				}else{
					rst.innerHTML = "";
					} 			
		}
});