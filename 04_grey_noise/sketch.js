// Reference
// https://p5js.org/reference/

// Tutorials
// https://p5js.org/tutorials/

// Examples
// http://p5js.org/examples/

// @adalberth - Stupid Studio - 2016
// https://github.com/adalberth/stupid-p5

var xnoise
var ynoise
var ystart
var slider
function setup() {
  createCanvas(600,600)
  xnoise = random()
  ynoise = random()
  ystart = ynoise
  slider = createSlider(0.00001, 1, 0.4, 0.0001)
}

function draw() {
  background(255)
  var scale = slider.value()
  for (var i = 0; i < width; i += 10) {
    xnoise += scale
    ynoise = ystart
    for (var j = 0; j < height; j += 10) {
      ynoise += scale
      var x = i
      var y = j
      drawPoint(x, y, noise(xnoise, ynoise))
    }
  }
}

function drawPoint (x, y, noiseFactor) {
  noStroke()
  fill(map(noiseFactor, 0, 1, 0, 255))
  rect(x, y, x + 10, y + 10)
}
