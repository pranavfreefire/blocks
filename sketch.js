function setup() {
  createCanvas(800,400);
  rect1= createSprite(600, 200, 50, 50);
  rect1.shapeColor="blue"
rect2=createSprite(200,200,50,50)
rect2.shapeColor="black"
rect1.velocityX=-1
rect2.velocityX=1
}

function draw() {
  background(255,255,255);  
  drawSprites();
if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2&&
   rect2.x-rect1.x<=rect1.width/2+rect2.width/2&&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2&& 
    rect2.y-rect1.y<=rect1.height/2+rect2.height/2){
      rect1.velocityX=-rect1.velocityX
      rect2.velocityX=-rect2.velocityX
    }
}