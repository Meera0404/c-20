function setup() {
  createCanvas(800,400);

  car = createSprite(400, 200, 80, 50);
  car.shapeColor = "green";
  wall = createSprite(200,200,50,50);
  wall.shapeColor = "green";
  a= createSprite(500, 250, 80, 50);
  a.shapeColor = "blue";
  a.velocityY = -5;
  b = createSprite(500,350,50,50);
  b.shapeColor = "blue";
  b.velocityY = 5;

}

function draw() {

  background("black");  

  //car.x = World.mouseX;
  //car.y = World.mouseY;

  if(car.x - wall.x < car.width/2 + wall.width/2 
    && wall.x - car.x < car.width/2 + wall.width/2
    &&car.y - wall.y < car.height/2 + wall.height/2 
    && wall.y - car.y < car.height/2 + wall.height/2){
    car.shapeColor = "red";
    wall.shapeColor = "red";
    }

    else{
    car.shapeColor = "green";
    wall.shapeColor = "green";
    }
if(a.x - b.x < a.width/2 + b.width/2 
  && b.x - a.x < a.width/2 + b.width/2){
  a.velocityX = a.velocityX*(-1);
  b.velocityX = b.velocityX*(-1);
  }
if(a.y -b.y < a.height/2 + b.height/2 
  && b.y - a.y < a.height/2 + b.height/2){
    a.velocityY = a.velocityY*(-1);
    b.velocityY = b.velocityY*(-1);
  }



  drawSprites();
}