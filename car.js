//código do carro

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [38, 93, 147, 208, 260, 314];
let speedCars = [1.2,1.5, 3, 2.2,4,2.3,];
let wCars = [60,60,60,60,60,60]
let hCars = [45,45,45,45,45,43]

function showCar(){
  for (let i = 0; i < carImages.length; i ++){
    image(carImages[i], xCars[i], yCars[i], wCars[i], hCars[i]);
  }
}

function moveCar(){
  for (let i = 0; i < carImages.length; i ++){
    xCars[i] -= speedCars[i];
  }
}

function backstartposition(){
  for (let i = 0; i < carImages.length; i ++){
    if (passAllBoard(xCars[i])){
      xCars[i] = 600;
    }
  }
}


  
function passAllBoard(xCarro){
  return xCarro < - 50;
}
