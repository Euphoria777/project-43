var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,backgroundImage;
var foodGroup, obstacleGroup;
var score, survivalTime;
var spawnFood;

function preload(){
  monkey_running = loadAnimation("images/Monkey_01.png","images/Monkey_02.png","images/Monkey_03.png","images/Monkey_04.png","images/Monkey_05.png","images/Monkey_06.png","images/Monkey_07.png","images/Monkey_08.png","images/Monkey_09.png","images/Monkey_10.png");
  backgroundImage = loadImage("images/jungle.jpg")
  bananaImage = loadImage("images/banana.png");
  stoneImage = loadImage("images/stone.png"); 
}

function setup() {
  createCanvas(600,600);
  
  score = 0;
  survivalTime = 0;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  foodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background("white");
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
  
  
  survivalTime = Math.ceil(frameCount/getFrameRate());



  drawSprites();
}


function spawnFood(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,250,40,10);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.05;
    banana.y = random(120,200);
    banana.velocityX = -5;
    banana.lifetime = 300;
    
    monkey.depth = banana.depth+1;
    
    foodGroup.add(banana);
  }
}
 


function spawnObstacle(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(800,320,10,40);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(stone);
  }
}
