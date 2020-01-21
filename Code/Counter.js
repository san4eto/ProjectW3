//COUNTER

let counter = 0;
let levelDifficulty = [600, 400, 300, 200];
function setup() {
  let timer = select("h1");
  timer.html("0"); //insert text

  function timeIt() {
    counter++;
    timer.html(counter);
  }

  setInterval(timeIt, frameRate / levelDifficulty[0]); //native function 1000ms =1 s
  //request animationframe is also another func
}
