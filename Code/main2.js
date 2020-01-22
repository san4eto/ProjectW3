class Game {
  constructor() {
    //console.log("test");
    this.obstacles = [];
    this.friendlyObjects = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.stopSign = new Obstacles();
    this.trafficLight = new Obstacles();
    this.friendlyObj = new FriendlyObj();
    this.vehicles = new Vehicles();
  }
  setup() {
    //this.player.setup();
    //this.background.setup();
    //this.obstacles.setup();
    // this.friendlyObj.draw();
  }
  draw() {
    this.background.draw();
    this.player.draw();
    this.stopSign.drawStopSign();
    this.trafficLight.drawTraffic();
    this.friendlyObj.draw();
    this.vehicles.draw();
    //this.stopSign.moveDown();
    moveObjects();
  }
}
const game = new Game();

function keyPressed() {
  if (keyCode === 37) {
    game.player.moveLeft();
    console.log("left");
  } else if (keyCode === 38) {
    game.player.moveUp();
  } else if (keyCode === 39) {
    game.player.moveRight();
  } else if (keyCode === 40) {
    game.player.moveDown();
  }
}

function moveObjects() {
  game.stopSign.moveDown();
  game.trafficLight.moveDown();
}

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
      //console.log("fhfh");
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
    this.y = 900; // FIX THAT
    this.x = 960; //width / 2;
    this.babyBatman = loadImage("DeliveryHeroes/baby_batman.png");
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
      },
      {
        src: loadImage("DeliveryHeroes/bubblesPowerpuff.png"),
        x: 50,
        y: 50,
        speed: 1
      }
    ];
  }

  setup() {
    //image(this.images[0].src, this.x, this.y, 200, 200);
  }
  //MOVE/////////////////////////////////////
  moveDown() {
    this.y += 200;
  }

  moveUp() {
    this.y -= 200;
  }
  moveLeft() {
    this.x -= 200;
  }
  moveRight() {
    this.x += 200;
  }

  draw() {
    //console.log("sth");
    image(this.images[0].src, this.x, this.y, 200, 200);

    // for (let i = 0; i < this.images.length; i++) {
    //   image(this.images[i].src, width / 2 - 200, height - 200, 200, 200);
    // }
  }
}

//OBSTACLES
class Obstacles {
  constructor() {
    this.xlocation = Math.floor(Math.random() * 10) * 100;
    this.ylocation = Math.floor(Math.random() * 6 + 1) * 100;
    this.stopSign = loadImage("stopSign.png");
    this.trafficLight = loadImage("trafficLight.png");
  }

  setup() {}
  drawTraffic() {
    // console.log("testObstcl");
    image(this.trafficLight, this.xlocation, this.ylocation, 200, 200);
  }

  drawStopSign() {
    image(this.stopSign, this.xlocation, this.ylocation, 200, 200);
  }

  moveDown() {
    this.ylocation += 2;
    this.xlocation = this.xlocation + random(-3, 3);
    if (this.ylocation < 0) {
      this.ylocation = this.ylocation;
    }
  }

  collides() {
    // check if obj collides with self
    // self completely to the left || self completely to the right
    if (
      (this.x + this.width < this.player.x || this,
      player.x + this.player.width < this.x)
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

//FRIENDS
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

  moveDown() {
    this.y += 20;
  }

  moveUp() {
    this.y -= 20;
  }
  moveLeft() {
    this.x -= 20;
  }
  moveRight() {
    this.x += 20;
  }

  draw() {
    //console.log("testObstcl");
    for (let i = 0; i < this.images.length; i++) {
      image(this.images[i].src, 0, 0, 200, 200);
    }
  }
}

//VEHICLES
class Vehicles {
  constructor() {
    this.images = [
      {
        src: loadImage("Transportation/batmobile.png"),
        x: 0,
        y: 0,
        speed: 1
      },
      {
        src: loadImage("Transportation/bike.png"),
        x: 0,
        y: 0,
        speed: 2
      }
    ];
  }

  setup() {
    //change if we work with multiple obj
    image(this.images[0].src, 0, 0, 200, 200);
  }

  draw() {
    /*for (let i = 0; i < this.images.length; i++) {*/
    image(this.images[0].src, width / 2, height - 200, 200, 200);
    //}
  }
}
