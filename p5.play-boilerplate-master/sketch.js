var plane,planeimg
var backgroundimg
var health,healthimg
var gas,gasimg
var nukes,nukesimg
function preload() {
backgroundimg=loadImage("Cloud.jpg")
planeimg=loadImage("Plane.png")
healthimg=loadImage("health.png")
//gasimg=loadImage("Gas.png")
//nukesimg=loadImage("nukesfromrussia.png")
}


function setup() {
  createCanvas(1500,600)
    plane=createSprite(700,500,10,10)
    plane.addImage("plane",planeimg)
    plane.scale=1
    health=createSprite(1000,100,100)
    health.addImage("health",healthimg)
    health.scale=0.1



}

function draw() {
  background(backgroundimg);
  
  if (keyDown("down"))
  {
    plane.y-=-4
  } 
  if(keyDown("up"))
  {
    plane.y-=4
  }
  drawSprites();
}

