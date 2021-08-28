var garden,rabbit;
var gardenImg,rabbitImg;
var Apples,ApplesImg;
var Leaves,LeavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  ApplesImg = loadImage("apple.png");
  LeavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function CreateApples(){
  if(frameCount%80 ==0){
  Apples = createSprite(random(50,350),40,10,10);
  Apples.addImage(ApplesImg);
  Apples.scale = 0.05;
  Apples.velocityY = 2;
  Apples.lifetime = 150;
  
  }

}

function CreateLeaves(){
  if(frameCount%90 ==0){
  Leaves = createSprite(random(30,340),20,10,10);
  Leaves.addImage(LeavesImg);
  Leaves.scale = 0.05;
  Leaves.velocityY = 2;
  Leaves.lifetime = 160;
  }
}

function draw() {
  background(0);
  rabbit.x = mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  CreateApples();
  CreateLeaves();
  drawSprites();
  var select = Math.round(random(1,2))
  if(frameCount%80 == 0){
    if(select ==1){
      CreateApples();
     
    }
    else{
      CreateLeaves();
    }
  }
}
