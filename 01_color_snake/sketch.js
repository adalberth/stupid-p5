// Reference
// https://p5js.org/reference/

// Tutorials
// https://p5js.org/tutorials/

// Examples
// http://p5js.org/examples/

// @adalberth - Stupid Studio - 2016
// https://github.com/adalberth/stupid-p5

function setup() {
  background(0)
  createCanvas(600,600)
}

function draw() {
  noStroke()
  fill(random(255), random(255), random(255))
  ellipse(mouseX, mouseY, 100, 100)
}
