// Reference
// https://p5js.org/reference/

// Tutorials
// https://p5js.org/tutorials/

// Examples
// http://p5js.org/examples/

// @adalberth - Stupid Studio - 2016
// https://github.com/adalberth/stupid-p5

var xoff
var yoff
var zoff
var slider
var length
function setup() {
  createCanvas(600,600)
  slider = createSlider(0.001, 0.02, 0.01, 0.0001)
  length = 20
}

function draw() {
  background(255)
  var scale = slider.value()
  zoff = frameCount * scale
  xoff = 0
  for (var i = 0; i < width; i += length) {
    yoff = 0
    for (var j = 0; j < height; j += length) {
      drawPoint(i, j, noise(xoff, yoff, zoff))
      yoff += 0.1
    }
    xoff += 0.1
  }
}

function drawPoint (x, y, noiseFactor) {
  push()
  noFill()
  stroke(0)
  translate(x, y)
  rotate(noiseFactor * radians(360))
  line(-length * 0.5, 0, length * 0.5, 0)
  pop()
}
