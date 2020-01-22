class Game {
  constructor() {
    //console.log("test");
    this.obstacles = [];
    this.friendlyObjects = [];
    this.manyPlayers = [];
  }

  init() {
    this.background = new Background();
    this.stopSign = new Obstacles();
    this.trafficLight = new Obstacles();
    this.manyPlayers.push(new Player("powerPuff"));

    this.friendlyObjects.push(
      new FriendlyObj("flame"),
      new FriendlyObj("bottle")
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

    // this.manyPlayers.forEach(player => {
    //   this.friendlyObjects.forEach.collides(player);
    // });

    //this.vehicles.draw();

    //////////
    // if (frameCount % 1200 === 0) {
    //   this.friendlyObj.push(new FriendlyObj());
    // }

    // this.friendlyObjects = this.friendlyObjects.filter(
    //   function() {
    //     if (
    //       !friendlyObj.collides(this.player) &&
    //       friendlyObj.xlocation + friendlyObj.width >= 0
    //     ) {
    //       return true;
    //     }
    //   }.bind(this)
    // );

    // this.obstacles.forEach(function(obstacle) {
    //   obstacle.draw();
    // });

    /////////
  }
}
const game = new Game();

function keyPressed() {
  if (keyCode === 37) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveLeft();
    });
    console.log("left");
  } else if (keyCode === 38) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveUp();
    });
  } else if (keyCode === 39) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveRight();
    });
  } else if (keyCode === 40) {
    game.manyPlayers.forEach(function(obj) {
      obj.moveDown();
    });
  }
}

function moveObjects() {
  if (keyCode >= 32) {
    game.stopSign.moveDown();
    game.trafficLight.moveDown();
    game.friendlyObjects.forEach(function(obj) {
      obj.moveDown();
    });
  }
}

function preload() {
  console.log("preload");
  sky = loadImage("Background/layer_0.png");
  road = loadImage("Background/layer_00.png"); // to match the bg images dimensions

  layer0 = loadImage("Background/layer_07.png");
  layer1 = loadImage("Background/layer_06.png");
  layer2 = loadImage("Background/layer_05.png");
  layer3 = loadImage("Background/layer_04.png");
  layer4 = loadImage("Background/layer_03.png");
  layer5 = loadImage("Background/layer_02.png");
  layer6 = loadImage("Background/layer_01.png");
  game.init();
}
let buildingsImg = 650;
let yCanvas = 0;
let roadDirection = 500;
function setup() {
  createCanvas(1920, 1080);

  game.setup();
}

function draw() {
  roadDirection = roadDirection + 0.1;
  if (roadDirection > 1100) {
    roadDirection = 1100;
  }
  //   yCanvas = 0;
  // }
  yCanvas = yCanvas - 0.25;
  // if (yCanvas < -yCanvas) {
  //   yCanvas = 0;
  // }
  buildingsImg = buildingsImg - 0.1;
  if (buildingsImg < 0) {
    buildingsImg = 0;
  }
  image(sky, 0, yCanvas);
  image(layer0, 0, yCanvas);
  image(layer1, 0, buildingsImg);
  image(layer2, 0, buildingsImg);
  image(layer3, 0, buildingsImg);
  image(layer4, 0, buildingsImg);
  image(layer5, 0, buildingsImg);
  image(layer6, 0, buildingsImg);
  image(road, 0, roadDirection);

  game.draw();
}

//BRACKGROUND SETUP///////////////////////////////////////////
class Background {
  constructor() {
    this.yBackgr = height;
    this.imageCount = 0;
    this.layer1 = loadImage("Background/layer_0.png");
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
  }
  // move() {
  //   this.yBackgr = yBackgr - 2;
  //   //   if (this.yBackgr > height) {
  //   //     this.yBackgr = 0;
  //   //   }
  // }

  draw() {
    this.yBackgr = this.yBackgr - 1;
    if (this.yBackgr > height) {
      this.yBackgr = 1080;
    }
    image(this.layer1, 0, this.yBackgr);
    console.log("backgr");

    // move(pic) {
    //   // image(imageXY, x, y) //CheCk IF OK
    //   image(pic.src, 0, pic.y);
    //   image(pic.src, 0, pic.y - pic.height / 2); // move in  from  half of the canvas

    //   if (pic.y > 0) {
    //     //console.log("fhfh");
    //     pic.y -= pic.speed; //make it stop at the top and load next one
    //   }
  }

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
}

class Player {
  constructor(type) {
    this.xlocation = 900; //width - this.width;
    this.ylocation = 900; //height - this.height;
    this.width = 200;
    this.height = 200;

    if (type == "powerPuff") {
      this.image = {
        src: loadImage("DeliveryHeroes/bubblesPowerpuff.png"),
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
    this.ylocation += 100 + this.image.speed;
  }

  moveUp() {
    this.ylocation -= 100 + this.image.speed;
  }
  moveLeft() {
    this.xlocation -= 100 + this.image.speed;
  }
  moveRight() {
    this.xlocation += 200 + this.image.speed;
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
    this.width = 70;
    this.height = 70;
    this.xlocation = Math.floor(Math.random() * 10) * 100;
    this.ylocation = Math.floor(Math.random() * 6 + 1) * 100;
    this.stopSign = loadImage("stopSign.png");
    this.trafficLight = loadImage("trafficLight.png");
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
  }

  drawStopSign() {
    image(
      this.stopSign,
      this.xlocation,
      this.ylocation,
      this.width,
      this.height
    );
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

    console.log("collision detected -> we can play the sound");
    //game.coinSound.play();
    counter += 1;
    return true;
  }
}

//FRIENDS
class FriendlyObj {
  constructor(type) {
    this.height = 100;
    this.width = 100;
    this.xlocation = Math.floor(Math.random() * 10) * 100;
    this.ylocation = Math.floor(Math.random() * 6 + 1) * 100 - this.height;

    if (type == "flame") {
      this.image = {
        src: loadImage("flame2.png"),
        x: 0,
        y: 0,
        speed: 5
      };
    } else if (type == "bottle") {
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

    // collision detected -> we can play the sound
    game.coinSound.play();

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
