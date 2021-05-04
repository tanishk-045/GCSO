  var car ;
  var wall;
  var speed;
  var weight;
     
 
function setup() {

  speed = random(55,90)
  weight = random(400,1500)
  createCanvas(800,400);
  car = createSprite(10, 200, 50, 50);
  car.velocityX=speed;
  wall = createSprite(750,200,50,200)

}

function draw() {
  background(37,37,38); 
  if(wall.x-car.x<car.width/2+wall.width/2) {
    car.velocityX=0
    var deformation=0.5 *weight* speed* speed/22509
    if(deformation>180){
      car.shapeColor="yellow"
    }
    if(deformation<180 &&deformation>100){
      car.shapeColor="green"
    }
    if(deformation<100){
      car.shapeColor="red"
    }
  }
  drawSprites();
}