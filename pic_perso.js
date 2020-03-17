var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");


function changerCouleur(){   
	couleur = $(this).css("background-color");
	$("#couleurChoisie").css("background-color", couleur);
}	

function faire(){
	console.log("faire");
	if (clic){
		dessiner();
		setTimeout(faire, 1000);
	}
	else{
		return ;
	}
}

function dessiner(){
	console.log(ev);
	var X = ev.pageX - $("#canvas").offset().left;
	var Y = ev.pageY - $("#canvas").offset().top;
	ctx.fillStyle = $("couleurChoisie").css("background-color");
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.arc(X, Y, 3, 0, 2 *Math.PI);
	ctx.fill();
}


var clic = false;
var ev;


$("#palette td").click(changerCouleur);

$("#canvas").click(function(e){
	clic = true;
	ev = e;
	faire();
	});
/*$("#canvas").click(function(e){
	f(e);
	});*/
