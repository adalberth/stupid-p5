// Reference
// https://p5js.org/reference/

// Tutorials
// https://p5js.org/tutorials/

// Examples
// http://p5js.org/examples/

// @adalberth - Stupid Studio - 2016

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
  
  noStroke()
  fill(random(255), random(255), random(255))
  rect(x,y,10,10)
}
