class Game {
  constructor() {
    //console.log("test");
    this.obstacles = [];
    this.friendlyObjects = [];
    this.manyPlayers = [];
    this.started = false;
  }

  init() {
    // this.background = new Background();
    this.stopSign = new Obstacles();
    this.trafficLight = new Obstacles();
    this.grandma = new Obstacles();
    this.manyPlayers.push(new Player("powerPuff"));

    this.friendlyObjects.push(
      new FriendlyObj("flame"),
      new FriendlyObj("bottle"),
      // new FriendlyObj("princess"),
      new FriendlyObj("dragon"),
      new FriendlyObj("flyingpig")
    );
    //this.vehicles = new Vehicles();
  }
  setup() {
    //this.player.setup();
    //this.background.setup();
    //this.obstacles.setup();
    // this.friendlyObj.draw();
  }
  draw() {
    //this.background.draw();

    this.grandma.drawGrandma();
    this.stopSign.drawStopSign();
    this.trafficLight.drawTraffic();
    this.friendlyObjects.forEach(function(obj) {
      obj.draw();
    });
    this.manyPlayers.forEach(function(obj) {
      obj.draw();
    });

    moveObjects();

    this.manyPlayers.forEach(player => {
      this.stopSign.collides(player);
    });

    this.manyPlayers.forEach(player => {
      this.trafficLight.collides(player);
    });

    this.manyPlayers.forEach(player => {
      this.grandma.collides(player);
    });
    ///!!!!
    this.manyPlayers.forEach(player => {
      this.friendlyObjects.forEach(friendlyObj => {
        if (friendlyObj.collides(player)) {
        }
      });
    });

    textAlign(CENTER, CENTER);
    textSize(60);
    textFont("Quantico-BoldItalic");
    text("Time left: " + timer + "sec", 1650, 100);
    // textfont(Helvetica);
    fill(255, 255, 255);

    if (this.started == true && frameCount % frameCountdivider == 0) {
      timer--;
      console.log(this.started);
    }
    // if (frameCount % frameCountdivider == 0 && timer > 0) {
    //   // if the frameCount is divisible by 60, then a second has passed. it will stop at 0

    //   timer--;
    // }
    if (Math.floor(timer) == 90) {
      textSize(90);
      fill(245, 197, 66);
      text("Press any key to start the GAME", width / 2, height * 0.5);
      textSize(50);
      text(
        " gather heat points & help Bubbles deliver the pizza while it is still warm",
        width / 2,
        height * 0.6
      );
    }
    // if (Math.floor(timer) == 30) {
    //   textSize(90);
    //   fill(245, 197, 66);
    //   text("HURRY UP!", width / 2, height * 0.7);
    // }
    if (timer <= 0 && score > 0) {
      textSize(120);
      text("GAME OVER", width / 2, height * 0.7);
      text("Congratulations your score is: " + score, width / 2, height * 0.9);
    }
    if (timer <= 0 && score == 0) {
      textSize(120);
      fill(245, 66, 66);
      text("GAME OVER", width / 2, height * 0.7);
      text("Sorry you ran out of time :( " + score, width / 2, height * 0.8);
      ext("You have " + score + "points", width / 2, height * 0.9);
    }
    textSize(60);
    text("Score: " + score, 1645, 160);
  }
}
const game = new Game();

function keyPressed() {
  if (keyCode === 37) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveLeft();
      game.started = true;
    });
    console.log("left");
  } else if (keyCode === 38) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveUp();
      game.started = true;
    });
  } else if (keyCode === 39) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveRight();
      game.started = true;
    });
  } else if (keyCode === 40) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveDown();
      game.started = true;
    });
  }
}

function moveObjects() {
  if (keyCode >= 32) {
    game.started = true;
    game.grandma.moveDown();
    game.stopSign.moveDown();
    game.trafficLight.moveDown();
    game.friendlyObjects.forEach(function(obj) {
      obj.moveDown();
    });
  }
}

function preload() {
  console.log("preload");
  myFont = loadFont("ConcertOne-Regular.ttf");
  myFont2 = loadFont("Quantico-BoldItalic.ttf");
  myFont3 = loadFont("ConcertOne-Regular.ttf");
  sky = loadImage("Background/layer_0.png");
  road = loadImage("Background/layer_00.png"); // to match the bg images dimensions
  layer7 = loadImage("Background/layer_07.png");
  layer6 = loadImage("Background/layer_06.png");
  layer5 = loadImage("Background/layer_05.png");
  layer4 = loadImage("Background/layer_04.png");
  layer3 = loadImage("Background/layer_03.png");
  layer2 = loadImage("Background/layer_02.png");
  layer1 = loadImage("Background/layer_01.png");
  //finalBuilding = loadImage("Background/final building.png");
  game.init();
}
let frameCountdivider = 60;
let yCanvas = 0;
let buildingsImg = 650;
let roadDirection = 500;
let timer = 90;
let score = 0;
function setup() {
  createCanvas(1920, 1080);

  game.setup();
}

function draw() {
  roadDirection = roadDirection + 0.1;
  if (roadDirection > 650) {
    roadDirection = 650;
  }
  yCanvas = yCanvas - 0.25;
  // if (yCanvas < -yCanvas) {
  //   yCanvas = 0;
  // }
  buildingsImg = buildingsImg - 0.1;
  if (buildingsImg < 0) {
    buildingsImg = 0;
  }
  image(sky, 0, yCanvas);
  image(layer7, 0, yCanvas);
  //image(finalBuilding, 500, buildingsImg);
  image(layer6, 0, buildingsImg);
  image(layer5, 0, buildingsImg);
  image(layer4, 0, buildingsImg);
  image(layer3, 0, buildingsImg);
  image(layer2, 0, buildingsImg);
  image(layer1, 0, buildingsImg);
  image(road, 0, roadDirection);

  game.draw();
}

//BRACKGROUND SETUP///////////////////////////////////////////
// class Background {
// constructor() {
//   this.yBackgr = height;
//   this.imageCount = 0;
//   this.layer1 = loadImage("Background/layer_0.png");
// this.images = [
//   {
//     src: loadImage("Background/layer_07.png"),
//     x: 0,
//     y: 1080,
//     speed: 10
//   },
//   {
//     src: loadImage("Background/layer_06.png"),
//     x: 0,
//     y: 1080,
//     speed: 10
//   },
//   {
//     src: loadImage("Background/layer_05.png"),
//     x: 0,
//     y: 1080,
//     speed: 10
//   },
//   {
//     src: loadImage("Background/layer_04.png"),
//     x: 0,
//     y: 1080,
//     speed: 10
//   },

//   {
//     src: loadImage("Background/layer_03.png"),
//     x: 0,
//     y: 1080,
//     speed: 10
//   },
//   {
//     src: loadImage("Background/layer_02.png"),
//     x: 0,
//     y: 1600,
//     speed: 10
//   },
//   {
//     src: loadImage("Background/layer_01.png"),
//     x: 0,
//     y: 1080,
//     speed: 10
//   }
// ];
// }
// move() {
//   this.yBackgr = yBackgr - 2;
//   //   if (this.yBackgr > height) {
//   //     this.yBackgr = 0;
//   //   }
// }

// draw() {
//   this.yBackgr = this.yBackgr - 1;
//   if (this.yBackgr > height) {
//     this.yBackgr = 1080;
//   }
//   image(this.layer1, 0, this.yBackgr);
//   console.log("backgr");

// move(pic) {
//   // image(imageXY, x, y) //CheCk IF OK
//   image(pic.src, 0, pic.y);
//   image(pic.src, 0, pic.y - pic.height / 2); // move in  from  half of the canvas

//   if (pic.y > 0) {
//     //console.log("fhfh");
//     pic.y -= pic.speed; //make it stop at the top and load next one
//   }
// }

// draw() {
//   //image(stillImage, 1000, 1000, 1000, 1000);
//   //background(stillImage);
//   // const c = color(255, 204, 0);
//   // background(c);
//   //make it stop at the top and load next one
//   // for (let i = 0; i < this.images.length; i++) {
//   //   //for (let i = 0; i < 5; i++) {
//   //   this.move(this.images[i]);
//   // }
//   if (frameCount % 240 === 0) {
//     this.imageCount += 1;
//     if (this.imageCount >= this.images.length) {
//       this.imageCount = this.images.length - 1; //
//     }
//   }
//   for (let i = 0; i <= this.imageCount; i++) {
//     //this.imageCount
//     this.move(this.images[i]);
//   }
// }
// }

class Player {
  constructor(type) {
    this.xlocation = 700; //width - this.width;
    this.ylocation = 700; //height - this.height;
    this.width = 300;
    this.height = 300;

    if (type == "powerPuff") {
      this.image = {
        src: loadImage("DeliveryHeroes/bubblesPizza.png"),
        x: 0,
        y: 0,
        speed: 15
      };
    } else if (type == "batman") {
      this.image = {
        src: loadImage("DeliveryHeroes/baby_batman.png"),
        x: 0,
        y: 0,
        speed: 7
      };
    } else if (type == "runner") {
      this.image = {
        src: loadImage("DeliveryHeroes/road_runner2.png"),
        x: 0,
        y: 0,
        speed: 10
      };
    }
  }

  //MOVE/////////////////////////////////////
  moveDown() {
    if (this.ylocation < 0.7 * height) {
      this.ylocation += 50 + this.image.speed;
    }
  }

  moveUp() {
    if (this.ylocation > 0.6 * height) {
      this.ylocation -= 50 + this.image.speed;
    }
  }
  moveLeft() {
    if (this.xlocation > width * 0.05 || this.xlocation > width) {
      this.xlocation -= 50 + this.image.speed;
    }
  }
  moveRight() {
    if (this.xlocation < 0 || this.xlocation < 0.8 * width) {
      this.xlocation += 50 + this.image.speed;
    }
  }

  draw() {
    image(
      this.image.src,
      this.xlocation,
      this.ylocation,
      this.width,
      this.height
    );
  }

  //   collides() {
  //     // check if obj collides with self
  //     // self completely to the left || self completely to the right
  //     if (
  //       (this.xlocation + this.width < this.player.x || this,
  //       player.x + this.player.width < this.xlocation)
  //     ) {
  //       return false;
  //     }
  //     // self completely to the top || self completely to the bottom
  //     if (
  //       this.ylocation + this.height < this.player.y ||
  //       this.player.y + this.player.height < this.ylocation
  //     ) {
  //       return false;
  //     }
  //   }
}

//OBSTACLES
class Obstacles {
  constructor() {
    this.width = 200;
    this.height = 200;
    this.xlocation = Math.floor(Math.random() * 20) * 100;
    this.ylocation = -(Math.floor(Math.random() * 6 + 1) * 100);
    this.stopSign = loadImage("stopSign.png");
    this.trafficLight = loadImage("trafficLight.png");
    this.grandma = loadImage("grandma.gif");
  }

  setup() {}
  drawTraffic() {
    // console.log("testObstcl");
    image(
      this.trafficLight,
      this.xlocation,
      this.ylocation,
      this.width,
      this.height
    );
    this.pushUp();
  }
  drawGrandma() {
    image(
      this.grandma,
      this.xlocation,
      this.ylocation,
      this.width,
      this.height
    );
    this.pushUp();
  }
  drawStopSign() {
    image(
      this.stopSign,
      this.xlocation,
      this.ylocation,
      this.width,
      this.height
    );

    this.pushUp();
  }

  pushUp() {
    if (this.ylocation > height) {
      this.xlocation = Math.floor(Math.random() * 20) * 100;
      this.ylocation = -(Math.floor(Math.random() * 6 + 1) * 100);
    }
  }

  moveDown() {
    if (keyCode >= 32) {
      this.ylocation += 2;
      this.xlocation = this.xlocation + random(-3, 3);
    }

    if (this.ylocation > 1080) {
      this.ylocation = this.ylocation;
    }
  }

  collides(player) {
    // check if obj collides with self
    // self completely to the left || self completely to the right
    if (
      this.xlocation + this.width < player.xlocation ||
      player.xlocation + player.width < this.xlocation
    ) {
      return false;
    }
    // self completely to the top || self completely to the bottom
    if (
      this.ylocation + this.height < player.ylocation ||
      player.ylocation + player.height < this.ylocation
    ) {
      return false;
    }

    //game.coinSound.play();
    timer--;

    this.xlocation = Math.floor(Math.random() * 20) * 100;
    this.ylocation = -(Math.floor(Math.random() * 6 + 1) * 100);

    return true;
  }
}

//FRIENDS
class FriendlyObj {
  constructor(type) {
    this.height = 150;
    this.width = 150;
    this.xlocation = Math.floor(Math.random() * 20) * 100;
    this.ylocation = -(Math.floor(Math.random() * 6 + 1) * 100 - this.height);

    if (type == "flame") {
      this.image = {
        src: loadImage("flame2.png"),
        x: 0,
        y: 0,
        speed: 5
      };
    }
    if (type == "dragon") {
      this.image = {
        src: loadImage("dragon.png"),
        x: 0,
        y: 0,
        speed: 5
      };
    }
    if (type == "flyingpig") {
      this.image = {
        src: loadImage("flyingPig.gif"),
        x: 0,
        y: 0,
        speed: 5
      };
    }
    // if (type == "princess") {
    //   this.image = {
    //     src: loadImage("princess.png"),
    //     x: 0,
    //     y: 0,
    //     speed: 5
    //   };
    // }
    else if (type == "bottle") {
      this.image = {
        src: loadImage("flame_bottle.png"),
        x: 0,
        y: 0,
        speed: 7
      };
    }
  }

  moveDown() {
    if (keyCode >= 32) {
      this.ylocation += this.image.speed;
      this.xlocation = this.xlocation + random(-3, 3);
    }
    if (this.ylocation > 1080) {
      this.ylocation = this.ylocation;
    }
  }

  draw() {
    image(
      this.image.src,
      this.xlocation,
      this.ylocation,
      this.width,
      this.height
    );
    this.pushUp();
  }
  pushUp() {
    if (this.ylocation > height) {
      this.xlocation = Math.floor(Math.random() * 20) * 100;
      this.ylocation = -(Math.floor(Math.random() * 6 + 1) * 100);
    }
  }
  collides(obj) {
    // check if obj collides with self
    // self completely to the left || self completely to the right
    if (
      this.xlocation + this.width < obj.xlocation ||
      obj.xlocation + obj.width < this.xlocation
    ) {
      return false;
    }
    // self completely to the top || self completely to the bottom
    if (
      this.ylocation + this.height < obj.ylocation ||
      obj.ylocation + obj.height < this.ylocation
    ) {
      return false;
    }

    console.log("ollision");
    //collision detected -> we can play the sound
    //game.coinSound.play();
    //frameCountdivider += 0.02;
    timer++;
    score++;
    this.xlocation = Math.floor(Math.random() * 20) * 100;
    this.ylocation = -(Math.floor(Math.random() * 6 + 1) * 100);
    return true;
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
