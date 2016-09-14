// Reference
// https://p5js.org/reference/

// Tutorials
// https://p5js.org/tutorials/

// Examples
// http://p5js.org/examples/

// @adalberth - Stupid Studio - 2016
// https://github.com/adalberth/stupid-p5

var x
var y
function setup() {
  createCanvas(600,600)
  x = width / 2
  y = height / 2
}

function draw() {

  var rx = random()
  if (rx < 0.33) {
    x = x + 10
  }else if(rx > 0.66){
    x = x - 10
  }

  var ry = random()
  if (ry < 0.33) {
    y = y + 10
  }else if(ry > 0.66){
    y = y - 10
  }

  x = constrain(x, 0, width)
  y = constrain(y, 0, height)

  r = random(255)
  g = random(255)
  b = random(255)

  noStroke()
  fill(r, g, b)
  rect(x,y,10,10)
}
