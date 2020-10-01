const eng=Matter.Engine;
const wor=Matter.World ;
const bod=Matter.Bodies;

var engine , world , ground,ball;

function setup() {
  createCanvas(800,400);

  engine=eng.create();
  world=engine.world;
  
  var static=
  {
   isStatic:true
  }
  ground=bod.rectangle(400,350,800,50,static);
  wor.add(world,ground);

  var bounce= 
  {
   restitution:1.5
  }
  ball=bod.circle(200,200,12,bounce);
  wor.add(world,ball);
  

}
function draw() {
  background("yellow");
  eng.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 50);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30, 20);
  
  drawSprites();
}
