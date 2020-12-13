// create canvas
var canvas;
var xPos, yPos;

// place the canvas and initialize variables
function setup() {
  canvas = createCanvas(windowWidth, 200);
  canvas.style('z-index', '-1')
  rectMode(CENTER);
  xPos = mouseX/120;
  yPos = mouseY/150;
}

// loop through each drawn element
function draw() {
  background(255);
  strokeWeight(0.3);
  fill(209,223,245);

  // create eyes
  for (let i = 0; i < 5; i++){
    ellipse(width/3+50+i*100, height/4, 40, 30);
  }

  push();
    noStroke();
    fill(19,71,120);

    // track the pupil position
    if (mouseX < windowWidth/2){
      xPos = -mouseX/120;
    }

    if (mouseY < windowHeight/2){
      yPos = -mouseY/150;
    }

    // create eyelashes
    for (let i = 0; i < 5; i++){
      push();
        fill(0);
        rect(width/3+50+i*100, height/4-22, 2, 13);
        rect(width/3+40+i*100, height/4-18, 2, 10);
        rect(width/3+60+i*100, height/4-18, 2, 10);
      pop();

      // create pupils
      ellipse(width/3+48+i*100-xPos, height/4-yPos, 15, 20);
    }
  pop();
}
