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
  setup() {
    //this.player.setup();
    //this.background.setup();
    //this.obstacles.setup();
    // this.friendlyObj.draw();
  }
  draw() {
    this.player.draw();
    this.background.draw();
    this.obstacles.draw();
    this.friendlyObj.draw();
  }
}

const game = new Game();

function preload() {
  console.log("preload");
  game.init();
}

function setup() {
  createCanvas(1920, 1080); // to match the bg images dimensions
  console.log("DRAW iMAGE");
  game.setup();
}

function draw() {
  game.draw();
}

//BRACKGROUND SETUP///////////////////////////////////////////
class Background {
  constructor() {
    this.imageCount = 0;

    this.images = [
      {
        src: loadImage("Background/layer_0.png"),
        x: 0,
        y: 1080,
        speed: 10
      },
      {
        src: loadImage("Background/layer_07.png"),
        x: 0,
        y: 1080,
        speed: 10
      },
      {
        src: loadImage("Background/layer_06.png"),
        x: 0,
        y: 1080,
        speed: 10
      },
      {
        src: loadImage("Background/layer_05.png"),
        x: 0,
        y: 1080,
        speed: 10
      },
      {
        src: loadImage("Background/layer_04.png"),
        x: 0,
        y: 1080,
        speed: 10
      },

      {
        src: loadImage("Background/layer_03.png"),
        x: 0,
        y: 1080,
        speed: 10
      },
      {
        src: loadImage("Background/layer_02.png"),
        x: 0,
        y: 1600,
        speed: 10
      },
      {
        src: loadImage("Background/layer_01.png"),
        x: 0,
        y: 1080,
        speed: 10
      },
      {
        src: loadImage("Background/layer_00.png"),
        x: 1920,
        y: 1080,
        speed: 10
      }
    ];
  }

  move(pic) {
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

class Player {
  constructor() {
    this.images = [
      {
        src: loadImage("DeliveryHeroes/baby_batman.png"),
        x: 5,
        y: 7,
        speed: 5
      },
      {
        src: loadImage("DeliveryHeroes/donaldduck_deliveryhero.png"),
        x: 0,
        y: 0,
        speed: 2
      },
      {
        src: loadImage("Hands/hand_yellow.png"),
        x: 50,
        y: 50,
        speed: 1
      }
    ];
  }

  setup() {
    image(this.images[0].src, 0, 0, 200, 200);
  }

  draw() {
    console.log("sth");
    for (let i = 0; i < this.images.length; i++) {
      image(this.images[i].src, 0, 0, 200, 200);
    }
  }

  //   move() {
  //     }
}

class Obstacles {
  constructor() {
    this.images = [
      {
        src: loadImage("stopSign.png"),
        x: 0,
        y: 0,
        speed: 1
      },
      {
        src: loadImage("trafficLight.png"),
        x: 0,
        y: 0,
        speed: 2
      }
    ];
    // this.x = width;
    // this.y = random(0, height - this.height);
    // random() is a p5 function that accepts a range
  }

  setup() {
    image(this.images[i].src, 0, 0, 200, 200);
  }
  draw() {
    console.log("testObstcl");
    for (let i = 0; i < this.images.length; i++) {
      image(this.images[i].src, 0, 0, 200, 200);
    }
  }

  collides() {
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

class FriendlyObj {
  constructor() {
    this.images = [
      {
        src: loadImage("flame_bottle.png"),
        x: 0,
        y: 0,
        speed: 1
      },
      {
        src: loadImage("flame2.png"),
        x: 0,
        y: 0,
        speed: 2
      }
    ];
  }

  setup() {
    image(this.images[i].src, 0, 0, 200, 200);
  }

  draw() {
    console.log("testObstcl");
    for (let i = 0; i < this.images.length; i++) {
      image(this.images[i].src, 0, 0, 200, 200);
    }
  }
}
