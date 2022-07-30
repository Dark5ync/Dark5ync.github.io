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
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
                    "N|",
                    "N |",
                    "N I|",
                    "N I |",
                    "N I G|",
                    "N I G |",
                    "N I G H|",
                    "N I G H |",
                    "N I G H T|",
                    "N I G H T |",
                    "N I G H T S|",
                    "N I G H T S |",
                    "N I G H T S Y|",
                    "N I G H T S Y |",
                    "N I G H T S Y N|",
                    "N I G H T S Y N |",
                    "N I G H T S Y N C|",
                    "N I G H T S Y N C |",
                    "N I G H T S Y N C .|",
                    "N I G H T S Y N C . |",
                    "N I G H T S Y N C . J|",
                    "N I G H T S Y N C . J |",
                    "N I G H T S Y N C . J S|",
                    "N I G H T S Y N C . J S ",
                    "N I G H T S Y N C . J S ",
                    "N I G H T S Y N C . J S|",
                    "N I G H T S Y N C . J S|",
                    "N I G H T S Y N C . J S ",
                    "N I G H T S Y N C . J S ",
                    "N I G H T S Y N C . J S|",
                    "N I G H T S Y N C . J |",
                    "N I G H T S Y N C . J|",
                    "N I G H T S Y N C . |",
                    "N I G H T S Y N C .|",
                    "N I G H T S Y N C |",
                    "N I G H T S Y N C|",
                    "N I G H T S Y N |",
                    "N I G H T S Y N|",
                    "N I G H T S Y |",
                    "N I G H T S Y|",
                    "N I G H T S |",
                    "N I G H T S|",
                    "N I G H T |",
                    "N I G H T|",
                    "N I G H |",
                    "N I G H|",
                    "N I G |",
                    "N I G|",
                    "N I |",
                    "N I|",
                    "N |",
					"N|",
					"|"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}