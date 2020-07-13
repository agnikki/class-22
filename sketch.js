const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball,ball2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var options ={
        restitution: 0.8
    }
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(200,200,20,options);
    World.add(world,ball);
    
     ball2 = Bodies.circle(100,100,30,{restitution: 1.2});
     World.add(world,ball2);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,40,40);
    ellipse(ball2.position.x,ball2.position.y,50,50);
}