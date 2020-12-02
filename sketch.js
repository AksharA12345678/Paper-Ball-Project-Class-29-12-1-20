
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 430, 20)
	ground = new Ground(width/2, 680, 1600, 20)
	GarbageCanLeft = new GarbageCan(1200, 600, 20, 150)
	GarbageCanBottom = new GarbageCan(1330, 660, 250, 20)
	GarbageCanRight = new GarbageCan(1450, 600, 20, 150)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 95, y: -95})
	}
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  ground.display();
  GarbageCanLeft.display();
  GarbageCanBottom.display();
  GarbageCanRight.display();
  
 
}



