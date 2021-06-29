 var runner,runner_running;
 var ground,groundImage;
var path,pathImage;

function preload(){
 runner_running = loadAnimation("Runner-1.png","Runner-2.png");
 pathImage  =loadImage("path.png");
}


function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
 
 runner = createSprite(180,340,30,30)
 
 runner.scale = 0.08
 runner.addAnimation("jakerunning",runner_running)

}

function draw() {
  background(0);
  runner.x =World.mouseX



if (path.y > 400 ){
    path.y = height/2;
   }
   drawSprites();
} 