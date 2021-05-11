
var player;
var score=0;
var wormGroup;

function preload() {
  swampImg=loadImage("./images/swampImg.png");
  playerImg=loadImage("./images/frog.png");
  wormImg=loadImage("./images/worm.png");

}
function setup() {
createCanvas(1000,1000);
bg=createSprite(500,500);
bg.addImage(swampImg);
bg.scale=3.5;

player = createSprite(40,550,30,30); 
player.addImage(playerImg);
player.scale=0.4;
wormGroup= new Group();
}

function draw() {
background("black");  
stroke("red")
noFill();
ellipse(100,350,40,30);
player.x= mouseX;
player.y= mouseY;



generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(40);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 30===0){
  console.log(frameCount);
  var worm = createSprite(random(40,380),random(290,380),40,5);
  worm.addImage(wormImg);
  worm.scale=random(0.1,0.3);

  worm.shapeColor="green"
  worm.velocityX=random(-4,4);
  worm.velocityY=random(-4,4);
  wormGroup.add(worm);
  }
}
