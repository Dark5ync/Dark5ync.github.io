if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 200);

}

var x = 0;

var titleText = [ 
                    "D",
                    "D A",
                    "D A R",
                    "D A R K",
                    "D A R K S",
                    "D A R K S Y",
                    "D A R K S Y N",
                    "D A R K S Y N C",
                    "D A R K S Y N C",
                    "D A R K S Y N C",
                    "D A R K S Y N C",
                    "D A R K S Y N",
                    "ND A R K S Y",
                    "D A R K S",
                    "D A R K",
                    "ND A R",
                    "D A",
                    "D"];
          
function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}