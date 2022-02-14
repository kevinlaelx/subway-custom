var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage of the path
pathImg = loadImage("path.png")
  //loadAnimation of the boy
 boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //create sprite for the path 
path=createSprite(200,1,30,20);
 //add image for the path
 path.addImage(pathImg);
//Make the track a moving background by giving velocity Y.

path.scale=1.2;

//create a boy sprite
boy=createSprite(200,200,50,50);
//add animation for the boy
boy.addAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
boy.scale=0.5;

  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary
leftBoundary.visibility=false

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
//set visibility as false for left boundary
rightBoundary.visibility=false

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x=World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
