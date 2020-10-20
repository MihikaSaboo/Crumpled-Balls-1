
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Dustbin= new DustBin(590,620,10,80);
	Dustbin2= new DustBin(645,647,120,10);
	Dustbin3= new DustBin(710,620,10,80);
	ball= new Ball(200,100,20);
	ground= new Ground(400,660,800,20);
	
	
	//Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  fill("white");
  Dustbin.display();
  Dustbin2.display();
  Dustbin3.display();
  fill("yellow");
  ground.display();
  fill("magenta");
  ball.display();

 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:55, y:-55});
	}
}

