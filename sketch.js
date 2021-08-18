var backgroundImage;
var spacecraftImg, spacecraft;
var issImg, iss;



  function preload(){
    backgroundImage= loadImage("Docking-undocking/spacebg.jpg");
    issImg= loadImage("Docking-undocking/iss.png");
    spacecraftImg = loadImage("Docking-undocking/spacecraft1.png");
  }
  
  
  function setup() {
    createCanvas(800,400);
    spacecraft = createSprite(400, 270, 50, 50);
    spacecraft.addImage(spacecraftImg);
    spacecraft.scale=0.2;

    iss = createSprite(455,150,50,50);
    iss.addImage(issImg);
    iss.scale= 0.8;

  
  }
  
  function draw() {
    background(backgroundImage);  

    hasDocked= false;
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown(UP_ARROW)){
      spacecraft.y= spacecraft.y-1;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y= spacecraft.y+1;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x= spacecraft.x+1;
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.x= spacecraft.x-1;
    }

    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
      hasDocked= true;
      spacecraft.x = 400;
      spacecraft.y = 220;
      textSize(25);
      fill("white");
      text("Docking Successful!", 300, 350);  
    }

    drawSprites();
  }
  
