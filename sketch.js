var runningBoy,obstacle,tower;
var runningBoyImg,obstacleImg,towerImg;
var obstacleGroup;
var score;


//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  runningBoyImg = loadImage("runningBoy.png");
  obstacleImg = loadImage("obstacle.png");
  towerImg = loadImage("tower.png");
  
}

function setup(){
  
  createCanvas(400,400);
// Moving background
tower=createSprite(200,200);
tower.addImage(towerImg);
tower.velocityY = 4;


//creating boy running
runningBoy = createSprite(70,380,20,20);
runningBoy.addAnimation("SahilRunning",runningBoyImg);
runningBoy.scale=0.2;
  
  
obstaclesGroup=new Group();


}

function draw() {

  if(gameState===PLAY){
  background(0);
  runningBoy.x = World.mouseX;
  
  edges= createEdgeSprites();
  runningBoy.collide(edges);
  
  //code to reset the background
  if(tower.y > 400 ){
    tower.y = height/2;
  }
  
  //createObstacle();
  
  drawSprites();
  textSize(20);
  fill(255);
  score = score + Math.round(frameCount/60);
  }

}

function obstacle() {
  if (World.frameCount % 400 == 0) {
  var obstacle= createSprite(Math.round(random(50, 350),40, 10, 10));
  obstacle.addImage(obstacleImg);
  obstacle.scale=0.12;
  obstacle.velocityX = -(6 + score/100);
  obstacle.lifetime = 150;
  obstaclesGroup.add(obstacle);
  }
}

