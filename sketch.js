let zBereich;

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0);
  zBereich.style('z-index','-1');

}

function draw() {
  noStroke();
  fill(255,255,255);
  circle(mouseX,mouseY,24);
  
}
  
// function mousePressed() {
//   background(151,255,255);
// }
  
