//COUNTER

let counter = 0;
let levelDifficulty = [600, 400, 300, 200];
function setup() {
  let timer = select("timer");
  timer.html("2"); //insert text

  function timeIt() {
    counter++;
    timer.html(counter);
  }

  setInterval(timeIt, frameRate / levelDifficulty[0]);
}
