
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function modify(){ 
       var Height = document.documentElement.clientHeight || document.body.clientHeight;
	   var h=parseInt(Height);
	   var a=document.getElementsByClassName("page");
	   for(var i=0;i<a.length;i++){
	     a[i].style.height=h+'px';
	   }
    }
addLoadEvent(modify);

//页面切换
function qiehuan(){
	var lis=document.getElementById("dianji");
	var links=lis.getElementsByTagName('a');
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			var link=this.href;
			var pages=document.getElementsByClassName("page");
			for(var i=0;i<pages.length;i++){
				var id=pages[i].getAttribute("id");
				if(link.indexOf(id)!=-1){
					pages[i].style.display='block';
				}
				else {
					pages[i].style.display='none';
				}
			}
			
			var lis=document.getElementById("dianji");
	        var links=lis.getElementsByTagName('a');
			for(var i=0;i<links.length;i++){
				if(link.indexOf(links[i].getAttribute('href'))!=-1){
					links[i].style.backgroundColor='#333333';
					links[i].style.width='30px';
					links[i].style.height='30px';
					links[i].style.borderRadius='15px';
				}
				else {
					links[i].style.backgroundColor='white';
					links[i].style.width='20px';
					links[i].style.height='20px';
					links[i].style.borderRadius='10px';
				}
			}
			
			
		}
	}
}
addLoadEvent(qiehuan);