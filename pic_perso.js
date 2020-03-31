var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.style.position = 'absolute';       //css canvas
canvas.style.top = "150px";
canvas.style.left = "600px";


function changerCouleur(){   
	couleur = $(this).css("background-color");
	$("#couleurChoisie").css("background-color", couleur);
}	

$("#palette td").click(changerCouleur);

var s;

$("#2").click(function(){
	s = 10;
});
$("#3").click(function(){
	s = 20;
});

$("#trait").click(function(){
	let isDrawing = false;
	let x = 0;
	let y = 0;
	s = 5;
	const rect = canvas.getBoundingClientRect();

	canvas.addEventListener('mousedown', e => {
	  x = e.clientX - rect.left;
	  y = e.clientY - rect.top;
	  isDrawing = true;
	});

	canvas.addEventListener('mousemove', e => {
	  if (isDrawing === true) {
		dessiner(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
	  }
	});

	window.addEventListener('mouseup', e => {
	  if (isDrawing === true) {
		dessiner(ctx, x, y, e.clientX - rect.left, e.clientY - rect.top);
		x = 0;
		y = 0;
		isDrawing = false;
	  }
	});

	function dessiner(ctx, x1, y1, x2, y2, T) {
	  ctx.beginPath();
	  ctx.strokeStyle = $("#couleurChoisie").css("background-color");
	  ctx.lineWidth = s;
	  ctx.moveTo(x1, y1);
	  ctx.lineTo(x2, y2);
	  ctx.joinLine = "round";
	  ctx.lineCap = "round";
	  ctx.stroke();	 
	  ctx.closePath();
	}
});


$("#gomme").click(function(){
	
});