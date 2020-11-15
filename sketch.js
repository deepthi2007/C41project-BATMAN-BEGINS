const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrellaImg,umbrella;

var maxDrops = 100;
var drops=[];


function preload(){
 umbrellaImg = loadAnimation("walking_1.png",
 "walking_2.png","walking_3.png",
 "walking_4.png","walking_5.png",
 "walking_6.png", "walking_7.png",
 "walking_8.png");

 ThunderImg1=loadImage("1.png");
 ThunderImg2=loadImage("2.png");
 ThunderImg3=loadImage("3.png");
 ThunderImg4=loadImage("4.png");

 rain = loadImage("rain.png")

}

function setup(){
    canvas = createCanvas(400,800);

    engine = Engine.create();
    world = engine.world;

    umbrella = createSprite(200,550,30,30);
    umbrella.addAnimation("walking",umbrellaImg);
    umbrella.scale = 0.7;

    thunder = createSprite(200,0,0,0);
  
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)))
    }
    
}

function draw(){
    background(0,0,0);

    Engine.update(engine);

    for(var i=0;i<drops.length;i++){
        drops[i].display();
        drops[i].update();
    }

    if(frameCount%12===0){
        var rand = Math.round(random(1,4));
        switch(rand){
      case 1: thunder.addImage(ThunderImg1);
              break;
      case 2: thunder.addImage(ThunderImg2);
              break;
      case 3: thunder.addImage(ThunderImg3);
              break;
      case 4: thunder.addImage(ThunderImg4);
              break;
      default: break;
        }
        thunder.scale=0.7;
    }

  drawSprites();
    
}   

