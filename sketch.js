// function setup() {
//   var canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent("p5Collection");
// }

function preload() {
  orchid = loadImage('/img/mini-orchid.png');
  legoLogo = loadImage('/img/lego.svg');

}

function draw() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Collection");
  // Background colour
  background("#D01012");
  // background("#550607");
  // if (mouseIsPressed === true) {
  //   fill(0);
  // } else {
  //   noFill();
    
  // }
  noFill();
  stroke(255);
  strokeWeight(1.5);
  circle(windowWidth*0.4,windowHeight*0.1,23);
  circle(windowWidth*0.4+34,windowHeight*0.1,23);
  circle(windowWidth*0.4+(34*2),windowHeight*0.1,23);
  circle(windowWidth*0.4+(34*3),windowHeight*0.1,23);

  circle(windowWidth*0.4,windowHeight*0.1+34,23);
  circle(windowWidth*0.4+34,windowHeight*0.1+34,23);
  circle(windowWidth*0.4+(34*2),windowHeight*0.1+34,23);
  circle(windowWidth*0.4+(34*3),windowHeight*0.1+34,23);

  noStroke();
  fill("#FFCF00");
  square(windowWidth*0.14, 0, 130);

  fill("#FBFBFB");
  square(windowWidth*0.14+130, 130, 130);
  square(windowWidth*0.14+(130*2-1), 130, 130);

  // fill("#D67923");
  fill("#FA7800");
  square(windowWidth*0.14, 130*2, 130);

  fill("#009D2F");
  square(windowWidth*0.14+(130*3), 130*2, 130);

  fill("#31A1E0");
  square(windowWidth*0.14-130, (130*3), 130);

  image(orchid, windowWidth*0.15-480, 170);

  image(legoLogo, windowWidth/13, windowHeight/8.5, 80, 80);


  fill(255);
  textFont('Alexandria');
  textAlign(RIGHT);
  textStyle(NORMAL);
  // textLeading(100);

  stroke("#D01012");
  strokeWeight(3);
  textSize(36);
  text("Hello, Collector!", windowWidth-100, windowHeight-365);
  text("Welcome to", windowWidth-100, windowHeight-320);

  textSize(64);
  text("Marina's", windowWidth-100, windowHeight-210);

  textSize(96);
  text('Collection', windowWidth-100, windowHeight-100);

  noStroke();
}
