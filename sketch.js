
var dino, bg;
var w = 3000;
var h = 3000;
var px,py;

function preload(){
 
  bg = loadImage("sample.png")
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  
  px = width/2 - w/2;
  py = height/2 - h/2;
  
  dino  = new Dino(displayWidth/2,displayHeight/2);
 
}





function draw(){
  background(0);
  push();
  translate(px,py);
  image(bg,px,py,w,h);
  pop();
  
  
  dino.display();
  
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    px-=5
  }
  
else  if(keyCode === UP_ARROW){
    py -=5;
  }
 else if(keyCode === RIGHT_ARROW){
    px +=5;
  }
  else if(keyCode === DOWN_ARROW){
    py += 5
  }
}

