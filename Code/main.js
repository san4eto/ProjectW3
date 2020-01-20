//preload everything
//setup the canvas
// Create a Game, Obj Player & Bakcground Class

let img;

function preload() {
  img = loadImage("Background/1920x1080.png");
}

function setup() {
  image(img, 100, 100);
  createCanvas(1667, 770);
  background(255, 204, 0);
}

function draw() {
  img(img, 100, 100, 100, 100);
}

class Game {
  constructor() {
    this.background = new Background();
    this.obstacles = new Obstacle();
    this.friendlyObj = new FriendlyObj();
  }

  init() {
    loadImage();
  }

  draw() {
    this.background.draw();
  }
}

class Background {
  constructor() {
    this.images = [
      loadImage("Background/background_level1.png"),
      loadImage("Background/city sideview.png")
    ];
  }
  draw() {
    let c = color(yellow);
    background(c);
  }
}

class FriendlyObj {
  constructor() {
    this.images = [
      loadImage("Background/background_level1.png"),
      loadImage("Background/city sideview.png")
    ];
  }
}

class Obstacle {


  constructor() {
    this.obstacle = [
      loadImage("Background/background_level1.png"),
      loadImage("Background/city sideview.png")
    ];

    
  }
  random (obstacle);
}

class Dishes {
  constructor() {
    this.images = [
      loadImage("Background/background_level1.png"),
      loadImage("Background/city sideview.png")
    ];
  }
}

class Player {
constructor(){
    move
}

}
//

// // Create an array of "friendly" objects
// //Create an array of "mean" objects
// //randomize appearance //Math.Random
// //falling speed to be adj with velocity
// //Create a timer
// //return "XXX dish took X min to prepare"
