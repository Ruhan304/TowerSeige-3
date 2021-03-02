const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var score = 0
var engine 
var world

function setup(){
createCanvas(900,600)
engine = Engine.create()
world = engine.world
ground1 = new Ground(450,580,900,2)
box1 = new Box(100,500,50,50)
box2 = new Box(150,500,50,50)
box3 = new Box(200,500,50,50)
box4 = new Box(250,500,50,50)
box5 = new Box(125,450,50,50)
box6 = new Box(175,450,50,50)
box7 = new Box(225,450,50,50)
box8 = new Box(150,400,50,50)
box9 = new Box(200,400,50,50)
box10 = new Box(175,350,50,50)
polygon = new Polygon(750,225)
slingshot = new SlingShot(polygon.body,{x:700, y:175});
}

function draw(){
background("cyan")
Engine.update(engine)
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
ground1.display()
slingshot.display()
polygon.display() 

text("Scor☺"+score,20,30)

box1.Score()
box2.Score()
box3.Score()
box4.Score()
box5.Score()
box6.Score()
box7.Score()
box8.Score()
box9.Score()
box10.Score()
}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}
 

function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}

function Restart(){
    if(keyCode === 32){
        slingshot.attach(polygon.body)
    }
}

