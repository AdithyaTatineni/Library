var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 50, 50);
  movingRect = createSprite(100, 400, 45, 45);
  fixedRect.shapeColor="Blue";
  movingRect.shapeColor="Blue";
  fixedRect.velocityY=4;
  movingRect.velocityY=-4
}

function draw() {
  background(0); 
 
  bounce_Off(fixedRect, movingRect)

  drawSprites();
}
