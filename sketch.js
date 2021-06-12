 var bg;
var  person,personIMG;
var ground,bgIMG;
 var invisibleBg;

function preload(){
  bgIMG = loadImage("photos/ground.jpg");
personIMG=loadImage("photos/man2.png");
}
function setup() {
createCanvas(1200,600);
  
bg = createSprite(600,300,1200,600);
bg.addImage("bg",bgIMG)
bg.scale=5
bg.velocityX=-10
person = createSprite(100,500,10,60);
   person.addImage("person",personIMG)
   person.scale=0.1
   ground=createSprite(600,580,1200,2);
    


}

function draw() {
  background("white");  
   
  if(bg.x<0){
    bg.x=bg.width/2;
  }
   
  person.velocityX=0;
  person.velocityY=0;

 

  if((keyDown("space")&& person.y >= 220)) {
    person.velocityY = -12;
      
   } 
   person.velocityY+=0.8 
    
    if(keyDown("LEFT")){
    person.velocityX = -4;
    person.velocityY = 0;
    }
    
    if(keyDown("RIGHT")){
      person.velocityX = 4;
      person.velocityY = 0;
    }
  person.collide(ground)
      person.display();
   
  drawSprites();
}