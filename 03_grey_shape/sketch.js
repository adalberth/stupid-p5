// Reference
// https://p5js.org/reference/

// Tutorials
// https://p5js.org/tutorials/

// Examples
// http://p5js.org/examples/

// @adalberth - Stupid Studio - 2016

var r
var x
var y
var c
function setup() {
  createCanvas(600,600)
}

function draw() {
  r = map(noise(frameCount * 0.001), 0, 1, 10, 400)
  x = width / 2 + map(noise(frameCount * 0.005), 0, 1, -200, 200)
  y = height / 2 + map(noise(frameCount * 0.001), 0, 1, -200, 200)
  c = map(sin(frameCount * 0.01), -1, 1, 255, 0)
  translate(x, y)
  rotate(frameCount * 0.001)
  stroke(c, 100)
  line(-r, 0, r, 0)
}
