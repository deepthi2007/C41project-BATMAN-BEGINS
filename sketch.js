const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrellaImg,umbrella;

var maxDrops = 100;
var drops=[];


function preload(){
 umbrellaImg = loadAnimation("images/Walking Frame/walking_1.png",
 "images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png",
 "images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png",
 "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png",
 "images/Walking Frame/walking_8.png");

 ThunderImg1=loadImage("images/thunderbolt/1.png");
 ThunderImg2=loadImage("images/thunderbolt/2.png");
 ThunderImg3=loadImage("images/thunderbolt/3.png");
 ThunderImg4=loadImage("images/thunderbolt/4.png");

 rain = loadImage("images/rain.png")

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

