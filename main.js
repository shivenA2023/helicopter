// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";
// let explosion = document.createElement("audio");
// explosion.src = "sound/explosion.wav";
// let propeller = document.createElement("audio");
// propeller.src = "sound/propeller.wav";

let mouseIsPressed = false;
let distance = 0;
let best = distance;
let state;
let heli;
let wall1, wall2, wall3;

reset();
// Draw Function
window.addEventListener("load", draw);

function draw() {
  if (state === "start") {
    drawStart();
    run = -5;
    distance = 0;
  } else if (state === "gameon") {
    runGame();
    fast();
    travel();
  } else if (state === "gameover") {
    drawGameOver();
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

//EVENTS
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
  // propeller.currentTime = 0;
  // propeller.play();
  mouseIsPressed = true;
  if (state === "start") {
    state = "gameon";
  }
}

function mouseupHandler() {
  mouseIsPressed = false;
  // propeller.pause();
}

function travel() {
  distance++;

  if (distance > best) {
    best = distance;
  }
}
