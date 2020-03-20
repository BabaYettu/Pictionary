var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");


function changerCouleur(){   
	couleur = $(this).css("background-color");
	$("#couleurChoisie").css("background-color", couleur);
}	

$("#palette td").click(changerCouleur);

let isDrawing = false;
let x = 0;
let y = 0;

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

function dessiner(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = $("#couleurChoisie").css("background-color");
  ctx.lineWidth = 5;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.joinLine = "round";
  ctx.closePath();
}