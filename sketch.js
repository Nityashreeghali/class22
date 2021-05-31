const Engine=Matter.Engine;//namespacing
const World=Matter.World;
const Bodies= Matter.Bodies;

var myengine, myworld, ground,ball;

function setup()
{
  createCanvas(600,600);

  myengine=Engine.create();
  myworld=myengine.world;

  var options=
  {

    isStatic : true
  }
  ground=Bodies.rectangle( 300, 590, 600, 10,options);
  World.add(myworld,ground);

 
  var balloptions=
  {
   restitution : 1.0
  
  }
  ball=Bodies.circle( 300, 100,20,balloptions);
  World.add(myworld,ball);

}

function draw() 
{
  background(0);  

  Engine.update(myengine);

  fill("green")
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 600, 10);

  fill("red")
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);


}