const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	


	engine = Engine.create();
	world = engine.world;
	var opt = {isStatic:false, restitution:0.3, friction:0, density:1.2}




	ball=Bodies.circle(200,380,(10+10),opt)
	World.add(world,ball)
		Engine.run(engine);
		ground = new Ground (width/2,670,width,20)
		
	


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.display
  drawSprites();
 
}

