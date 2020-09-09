const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var g1,g2,g3;
var box1,box2,box4,box3,box5,box6,box7,box8,box9,box10,box11,box12,box13;
var b1,b2,b3,b4,b5,b6,b7;
var polygon;
var chain;
function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

        g1=new Ground(400,550,300,20);
        g2=new Ground(630,230,250,20);
        g3=new Ground(400,590,800,20);
        
    box1=new bx(320,530,40,30);
    box2=new bx(360,530,40,30);
    box3=new bx(380,530,40,30);
    box4=new bx(420,530,40,30);
    box5=new bx(455,530,40,30);
    box6=new bx(355,500,40,30);
    box7=new bx(390,500,40,30);//
    box8=new bx(430,500,40,30); //
    box9=new bx(500,530,40,30);
    box10=new bx(470 ,500,40,30);
    box11=new bx(390,470,40,30);
    box12=new bx(430,470,40,30);
    box13=new bx(400,430,40,30);

    b1=new bx(580,200,40,30);
    b2=new bx(620,200,40,30);
    b3=new bx(660,200,40,30);
    b4=new bx(700,200,40,30);
    b5=new bx(620,170,40,30);
     b6=new bx(660,170,40,30);
     b7=new bx(640,140,40,30);
     var options={
         isStatic:false

     }
polygon=Bodies.rectangle(150,400,40,40,options);
World.add(world,polygon);
fill(227, 242, 26);

chain=new Chain(polygon,{x:149,y:400});
} 

function draw(){
    background(63, 40, 40);
    Engine.update(engine);
   g1.display();
    box1.display();
    box2.display();
    box3.display();   
    box4.display();  
    box5.display();       
    box6.display();        
    box7.display();   
    box8.display();   
    box9.display()         
    box10.display();     
    box11.display();    
    box12.display();  
    box13.display(); 
    g2.display();     
    b1.display(); 
  b2.display(); 
    b3.display(); 
    b4.display(); 
  b5.display(); 
    b6.display(); 
   b7.display(); 
   rectMode(CENTER);
   rect(polygon.position.x,polygon.position.y,40,40);
   chain.display();
   g3.display();
   
 }
 function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    chain.fly();
}