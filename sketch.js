const colorarray = ['#F44336','#E91E63','#9C27B0','#2196F3','#00897B','#43A047','#FB8C00','#795548'];
const colornames = ['Red','Pink','Purple','Blue','Teal','Green','Orange','Brown']

//Colour picker
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
	strokeWeight(0);
	fill(colorarray[randomIntFromInterval(0,colorarray.length-1)]);
	ellipse(mouseX, mouseY, 20, 20);
	
}