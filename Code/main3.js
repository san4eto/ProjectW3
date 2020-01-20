let backgroundLayer = [];
let roadImage;
let c;
let width = 1920;
let height = 1080;
let friend;

//PRELOAD ALL IMAGES
function preload() {
  console.log("WhaTS UP");
  roadImage = loadImage();
  for (let i = 0; i <= backgroundLayer.length; i++) {
    backgroundLayer[i] = loadImage("Background/layer_0" + i + ".png");
  }
}

//SETUP THE CANVAS
function setup() {
  createCanvas(width, height); //width & height of parallax  file
}

//DRAW
function draw() {
  background(1920, 1080, width, height);
  game.draw();
  move();
}

//BACKGROUND
/////////////////////////////////////////////////////////////////////////////////////////////////
class Background {
  constructor() {
    this.x = x;
    this.y = y;
    this.imageCount = 0;
    this.images = [{ src: backgroundLayer[i], x: 0, y: 1080, speed: 3 }];
  }
  //SETuP FUnCTION

  setup() {
    background[i] = new Background();
  }

  //MOVE the LAYERS
  move(pic) {
    // image(imageXY, x, y) //CheCk IF OK
    image(pic.src, 0, pic.y);
    image(pic.src, 0, pic.y - pic.height / 2); // move in  from  half of the canvas

    if (pic.y > 0) {
      console.log("fhfh");
      pic.y -= pic.speed; //make it stop at the top and load next one
    }
  }

  //DRAW BACKGR ELEMENTS
  draw() {
    if (frameCount % 240 === 0) {
      this.imageCount += 1;
      if (this.imageCount >= this.images.length) {
        this.imageCount = this.images.length - 1;
      }
    }
    for (let i = 0; i <= this.imageCount; i++) {
      //this.imageCount
      this.move(this.images[i]);
      console.log("test");
    }
  }
}

//FRIENDLY OBJECTS
/////////////////////////////////////////////////////////////////////////////////////////////////
class FriendlyObj {
  constructor() {
    this.width = 50;
    this.height = 50;

    this.x = width;
    this.y = random(0, height - this.height);

    this.imageCount = 0;
    this.images = [
      { src: imageLoad("Code/flame_bottle.png"), x: 0, y: 1080, speed: 3 },

      {
        src: imageLoad("Code/flame_not royalty free.png"),
        x: 0,
        y: 1080,
        speed: 3
      }
    ];
  }

  move() {
    //disappear every 240 frames
  }
  setup() {} //ready to print

  draw() {
    // objects for points
  }
}
//let friendlyObj = new FriendlyObj();

//Obstacles
/////////////////////////////////////////////////////////////////////////////////////////////////

class Obstacles {
  constructor() {
    this.width = 50;
    this.height = 50;

    this.x = width;
    this.y = random(0, height - this.height);

    this.imageCount = 0;
    this.images = [
      {
        src: imageLoad("Code/flame_bottle.png")
        //x=width,//??????
        // y=1080,
        //speed=3
      },

      {
        src: imageLoad("Code/flame_not royalty free.png")
        //  x=0,
        //  y=1080,
        // speed=3
      }
    ];
  }

  move() {
    //disappear every 240 frames
  }

  setup() {} //ready to print

  draw() {
    // objects for points
  }
}

//Player
/////////////////////////////////////////////////////////////////////////////////////////////////
class Player {
  constructor() {
    this.img = loadImage("/Hands/hand yellow.png");
    this.speed = 0;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 50;
    this.y = height - this.height;
    this.originY = this.y;
  }

  move() {
    function keyPressed() {
      if (keyCode === 37) {
        this.x -= 20;
      } else if (keyCode === 39) {
        this.x += 20;
      } else if (keyCode === 40) {
        this.y += 20;
      } else if (keyCode === 38) {
        this.y -= 20;
      }
    }
  }

  draw() {
    if (this.y >= this.originY / 2) {
      this.y = this.originY;
    }
    image(this.img, this.x / 2, this.y / 2);
  }
}
