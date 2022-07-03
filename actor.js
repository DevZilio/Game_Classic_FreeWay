//Player variables
let yPlayer = 366;
let xPlayer = 100;
let collide = false;
let wPlayer = 30;
let hPlayer = 30;
let myScore = 0;

function showPlayer(){
  image(playerImage, xPlayer, yPlayer, wPlayer, hPlayer);
}

function movePlayer(){
  if (keyIsDown(UP_ARROW)){
    yPlayer -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (canMove())
    yPlayer += 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xPlayer += 3;
}
  if (keyIsDown(LEFT_ARROW)){
    xPlayer -= 3;
  }
}

function checkCollide(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carImages.length; i ++){collide = collideRectCircle(xCars[i], yCars[i], wCars[i], hCars[i], xPlayer, yPlayer, 15)
    if (collide){
    collided();
    collidedM.play();
      if (scorePlusZero()){
    myScore -= 1;
      }  
    }
  }
}

function collided(){
  yPlayer = 400;
}

function showScore(){
  textAlign(CENTER);
  fill(color(255,249,60))
  textSize(25);
  text(myScore, width/5, 28);
}

function addScore(){
  if (yPlayer < 20){
    myScore += 1;
    collided();
    scoreM.play();
  }
}

function scorePlusZero(){
  return myScore > 0;
}

function canMove(){
  return yPlayer < 367; 
}