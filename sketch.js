var garden,rabbit;
var gardenImg,rabbitImg;
var food,foodImg
var leaf,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  foodImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
  
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


function draw() {
  background(0);
  rabbit.x=mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApple()
  spawnLeaf()
  drawSprites();
}
function spawnApple(){
if (frameCount%60===0){
food= createSprite(random(10,350))
food.velocityY=5
food.addImage(foodImg)
food.scale=0.1}

}
function spawnLeaf(){
  if (frameCount%90===0){
  leaf= createSprite(random(10,350))
  leaf.velocityY=5
  leaf.addImage(leafImg)
  leaf.scale=0.1}
  
  }
