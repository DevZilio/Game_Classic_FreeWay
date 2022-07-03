//Pictures of the game
let roadImage;
let playerImage;
let car1Image;
let car2Image;
let car3Image;
let car4Image;
let skater;

//Music of the game
let collidedM;
let scoreM;
let themeM;

function preload(){
  roadImage = loadImage("Pictures/road.png")
  playerImage = loadImage("Pictures/actor.png")
  car1Image = loadImage("Pictures/Car1.png")
  car2Image = loadImage("Pictures/Car2.png")
  car3Image = loadImage("Pictures/Car3.png")
  car4Image = loadImage("Pictures/Car2.png")
  car5Image = loadImage("Pictures/Car1.png")
  car6Image = loadImage("Pictures/Car3.png")
  carImages = [car1Image, car2Image, car3Image, car4Image, car5Image, car6Image]
  collidedM = loadSound("music/collided.wav");
  scoreM = loadSound("music/score.wav");
  themeM = loadSound("music/theme.mp3");

}