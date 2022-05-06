
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	

	Engine.run(engine);

	ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function força1(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});
  }
  
  function força2(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
}



