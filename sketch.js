var runner,ground,invisibleGround;
var man_running
var carsGroup;
var bossGroup;
var lightGroup,lightIm;
var taxiGroup;
var gameState=1;
var hearts=3;
var count=20;
var life = 3




function preload(){
 man_running = loadAnimation("im9.png","im8.png","im7.png","im6.png","im5.png","im4.png","im3.png","im2.png","im1.png",);
lightIm=loadImage("light.png")
}
  
 function setup(){
createCanvas(800,800)
runner=createSprite(60,725,20,20)
runner.addAnimation("running",man_running)
runner.debug=false;
invisibleGround=createSprite(20,730,1000,10)
invisibleGround.visible=false;
ground=createSprite(20,730,9000,30)
carsGroup=createGroup()
bossGroup=createGroup()
 taxiGroup=createGroup()
 lightGroup=createGroup()

 console.log(hearts)
 }


 function draw(){
background("lightBlue")
textSize(25)
runner.collide(invisibleGround)

fill("black")
text("Time:"+count.toFixed(2),100,100)

console.log("Draw:"+hearts)
textSize(25)
text("Hearts:"+hearts,400,100)

if(gameState===1){

  if(hearts===0 || count === 0 )
  {
    gameState=0
  }
runner.setCollider("rectangle",0,0,100,runner.height)

if(runner.isTouching(taxiGroup)&&count>0){
taxiGroup.destroyEach()
runner.velocityY=-8
runner.x = 60 
runner.y = 300
runner.velocityY=runner.velocityY+0.00003
}


if(runner.isTouching(lightGroup) || runner.isTouching(carsGroup)){
  count = count - 0.4
}

spawntrafficLight()
//spawnboss()
//spawnCars()
spawntaxi()

if(keyDown("space")&&runner.y>650){
runner.velocityY=-8
}
runner.velocityY=runner.velocityY+0.3
ground.velocityX=-3;
if(ground.x<0){
	ground.x=ground.width/2
}
if(runner.isTouching(carsGroup)){
carsGroup.destroyEach()
hearts=hearts-1
}
if(runner.isTouching(lightGroup)){
lightGroup.destroyEach()
hearts=hearts-1

}
if(runner.isTouching(bossGroup)){
  hearts = hearts - 1
}

}
else if(gameState===0){
ground.velocityX=0
carsGroup.setVelocityXEach(0)
bossGroup.setVelocityXEach(0)
taxiGroup.setVelocityXEach(0)
trafficGroup.setVelocityXEach(0)
}

drawSprites()

 }

 function spawntrafficLight() {
  //write code here to spawn the cars
  if (frameCount % 200 === 0) {
    var light = createSprite(900,700,40,10);
   
   
    light.scale = 0.1;
    light.velocityX = -4;
    
     //assign lifetime to the variable
   //light.lifetime = 200; 
    
    //adjust the depth
   light.addImage(lightIm)
    //add each car to the group
    lightGroup.add(light);
   // console.log("cac")
  }
}
function spawnCars() {
  //write code here to spawn the cars
  if (frameCount % 700 === 0) {
    var car = createSprite(1000,700,40,40);
   
   
    car.scale = 0.5;
    car.velocityX = -2;
    
     //assign lifetime to the variable
    //car.lifetime = 200;
    
    //adjust the depth
   car.shapeColor="black"
    //add each car to the group
    carsGroup.add(car);
    //console.log("cac")
  }
}
function spawnboss(){
if (frameCount % 1000 === 0) {
    var boss = createSprite(1500,700,40,10);
   
   
    boss.scale = 0.5;
    boss.velocityX = -5;
    
     //assign lifetime to the variable
    boss.lifetime = 700;
    
    //adjust the depth
   boss.shapeColor="green"
    //add each car to the group
    bossGroup.add(boss);


}}



function spawntaxi(){

	if (frameCount % 200 === 0) {
    var taxi = createSprite(1300,700,40,40);
   taxi.y=Math.round(random(600,670))
   
    taxi.scale = 0.5;
    taxi.velocityX = -8;
    
     //assign lifetime to the variable
    //taxi.lifetime = 200;
    
    //adjust the depth
   taxi.shapeColor="blue"
    //add each car to the group
    taxiGroup.add(taxi);
console.log("j")

}
}