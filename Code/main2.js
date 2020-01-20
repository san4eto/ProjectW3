function preload() {
  console.log("PRELOAD");
  game.init();
}

function setup() {
  // createCanvas(width, height)
  createCanvas(1920, 1080); // to match the bg images dimensions
  stillImages = loadImage("Background/road flat.png");
  console.log("DRAW iMAGE");
  game.setup();
}

function draw() {
  game.draw();
}

class Background {
  constructor() {
    this.imageCount = 0;

    this.images = [
      {
        src: loadImage("Background/night sky.png"),
        x: 0,
        y: 1080,
        speed: 3
      },
      {
        src: loadImage("Background/layer_07_1920 x 1080.png"),
        x: 0,
        y: 1080,
        speed: 3
      },
      {
        src: loadImage("Background/layer_06_1920 x 1080.png"),
        x: 0,
        y: 1080,
        speed: 3
      },
      {
        src: loadImage("Background/layer_05_1920 x 1080.png"),
        x: 0,
        y: 1080,
        speed: 3
      },
      {
        src: loadImage("Background/layer_04_1920 x 1080.png"),
        x: 0,
        y: 1080,
        speed: 3
      },

      {
        src: loadImage("Background/layer_03_1920 x 1080.png"),
        x: 0,
        y: 1080,
        speed: 4
      },
      {
        src: loadImage("Background/layer_02_1920 x 1080.png"),
        x: 0,
        y: 1600,
        speed: 5
      },
      {
        src: loadImage("Background/layer_01_1920 x 1080.png"),
        x: 0,
        y: 1080,
        speed: 5
      }
    ];
  }

  //MOVE  THE LAYERS
  move() {
    // image(imageXY, x, y) //CheCk IF OK
    image(pic.src, 0, pic.y);
    image(pic.src, 0, pic.y - pic.height / 2); // move in  from  half of the canvas

    if (pic.y > 0) {
      console.log("fhfh");
      pic.y -= pic.speed; //make it stop at the top and load next one
    }
  }

  draw() {
    //image(stillImage, 1000, 1000, 1000, 1000);
    //background(stillImage);
    // const c = color(255, 204, 0);
    // background(c);
    //make it stop at the top and load next one
    // for (let i = 0; i < this.images.length; i++) {
    //   //for (let i = 0; i < 5; i++) {
    //   this.move(this.images[i]);
    // }
    if (frameCount % 240 === 0) {
      this.imageCount += 1;
      if (this.imageCount >= this.images.length) {
        this.imageCount = this.images.length - 1; //
      }
    }
    for (let i = 0; i <= this.imageCount; i++) {
      //this.imageCount
      this.move(this.images[i]);
    }
  }
}

// class FriendlyObj {
//   constructor() {
//     this.width = 25;
//     this.height = 25;

//     this.images = [
//       {
//         //src: loadImage("flame_bottle.png"),
//         x: 0,
//         y: 0,
//         speed: 1
//       },
//       {
//         src: loadImage("flame_not royalty free.jpg"),
//         x: 0,
//         y: 0,
//         speed: 2
//       }
//     ];
//   }
//   setup() {
//     this.friendlyObj.setup();
//   }
//   draw() {
//     this.friendlyObj.draw();
//   }
// }
// const friendlyObj = new FriendlyObj();

class Obstacles {
  constructor() {
    this.width = 25;
    this.height = 25;

    this.images = [
      {
        src: loadImage("stop sign.png"),
        x: 0,
        y: 0,
        speed: 1
      },
      {
        src: loadImage("traffic  light.png"),
        x: 0,
        y: 0,
        speed: 2
      }
    ];
    // this.x = width;
    // this.y = random(0, height - this.height);
    // random() is a p5 function that accepts a range
    this.counter = 0;
  }

  draw() {
    this.obstacles;
  }

  collides(friendlyObj) {
    // check if obj collides with self
    // self completely to the left || self completely to the right
    if (
      this.x + this.width < friendlyObj.x ||
      friendlyObj.x + friendlyObj.width < this.x
    ) {
      return false;
    }
    // self completely to the top || self completely to the bottom
    if (this.y + this.height < obj.y || obj.y + obj.height < this.y) {
      return false;
    }

    // collision detected -> we can play the sound
    //game.coinSound.play();

    return true;
  }
}
const obstacles = new Obstacles();
class Player {
  constructor() {
    this.images = [
      {
        src: loadImage("Delivery Heroes/baby batman.png"),
        x: 0,
        y: 0,
        speed: 5
      },
      {
        src: loadImage("Delivery Heroes/donald duck_deliveryhero.png"),
        x: 0,
        y: 0,
        speed: 2
      },
      {
        src: loadImage("Hands/hand yellow.png"),
        x: 50,
        y: 50,
        speed: 1
      }
    ];
  }

  setup() {
    this.height = 50; //CHECK IF OK
    this.width = 50;
  }

  draw() {
    this.player;
  }

  //   move() {
  //     }
}
const player = new Player();
