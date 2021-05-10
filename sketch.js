const palette = ['#037F8C', '#205459', '#F2E7C4', '#F28F38', '#F25757'];
var last = 0;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  noFill();
  noLoop();

}

function draw() {
  translate(width/2, height/2);
  stroke(palette[getRandomColorFromPalette()]);
  strokeWeight(1);
  for(let inc = 0.01; inc < TWO_PI; inc+=0.01){
    beginShape();
    for (let angl = 0; angl < TWO_PI; angl+= inc) {
    let x = (width/2.5)*cos(angl);
    let y = (height/2.5)*sin(angl);
    //stroke(palette[getRandomColorFromPalette()]);
    stroke(0, 50);
    vertex(x,y);
    }
    endShape(CLOSE);
  }
}

function getRandomColorFromPalette(){
  let pick = floor(random(palette.length));
  while (pick == last){
    pick = floor(random(palette.length));
  }
  last = pick;
  return pick;
}