function setup(){
  createCanvas(600, 400);
  themeM.loop();
  
}

function draw(){
  background(roadImage);
  showPlayer();
  showCar();
  moveCar();
  movePlayer();
  backstartposition();
  checkCollide();
  showScore();
  addScore();
  canMove();
}
