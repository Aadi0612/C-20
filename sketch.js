var movingRec, fixedRec
function setup() {
  createCanvas(400,400);
  movingRec = createSprite(300, 200, 50, 80);
  fixedRec = createSprite(200, 200, 80, 50)
  movingRec.shapeColor = "green"
  fixedRec.shapeColor = "yellow"
}

function draw() {
  background(0);  

 movingRec.x = World.mouseX
 movingRec.y = World.mouseY

 if((movingRec.x - fixedRec.x < (movingRec.width + fixedRec.width)/2 &&
     fixedRec.x - movingRec.x < (movingRec.width + fixedRec.width)/2) &&
    (movingRec.y - fixedRec.y < (movingRec.height + fixedRec.height)/2 &&
     fixedRec.y - movingRec.y < (movingRec.height + fixedRec.height)/2)){
   
      movingRec.shapeColor = "red" 

 }
else{
  movingRec.shapeColor = "green"
}

  drawSprites();
}