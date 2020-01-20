class Game {
  constructor() {
    console.log("test");
    this.obstacles = [];
    this.friendlyObjects = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = new Obstacles();
    this.friendlyObj = new FriendlyObj();
  }

  draw() {
    this.background.draw();

    this.obstacles.draw();

    this.player.draw();
  }

  setup() {
    this.player.setup();
  }
}

const game = new Game();

function preload() {
  console.log("PRELOAD");
  game.init();
}

function setup() {
  // createCanvas(width, height)
  createCanvas(1667, 770); // to match the bg images dimensions
  game.setup();
}

function draw() {
  game.draw();
}

class Background {
  constructor() {
    this.images = [
      {
        src: loadImage("Background/1920x1080.png"),
        x: 0,
        y: 0,
        speed: 1
      },
      {
        src: loadImage("Background/1920x1080.png"),
        x: 0,
        y: 0,
        speed: 2
      }
    ];
  }

  move(pic) {
    // image(imageXY, x, y) //CheCk IF OK
    image(pic.src, 0, pic.y);
    image(pic.src, 0, pic.y - pic.height / 2); // width is the width of the canvas P5

    pic.y -= pic.speed;
    if (pic.y <= -height) {
      pic.y = 0;
    }
  }

  draw() {
    const c = color(255, 204, 0);
    background(c);

    for (let i = 0; i < this.images.length; i++) {
      this.move(this.images[i]);
    }
  }
}
class FriendlyObj {
  constructor() {
    this.width = 25;
    this.height = 25;

    this.images = [
      {
        src: loadImage("flame_bottle.png"),
        x: 0,
        y: 0,
        speed: 1
      },
      {
        src: loadImage("flame_not royalty free.jpg"),
        x: 0,
        y: 0,
        speed: 2
      }
    ];
  }
}

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
        x: 0,
        y: 0,
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
