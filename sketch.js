//alias
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundaries = [];

var ground;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);

  boundaries.push(new Boundary(300, 100, width * 0.6, 20, 0.3));
  boundaries.push(new Boundary(450, 500, width * 0.6, 20, -0.3));
}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }

function mouseDragged() {
  circles.push(new Circle(mouseX, mouseY, random(5, 10)));
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < circles.length; i++) {
    circles[i].show();
  }
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
}