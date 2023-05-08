// Questão 10

let t = 0;
let [pontosX, pontosY] = [[], []];

function setup() {
  createCanvas(600, 400);
  strokeWeight(5);
  stroke(200, 0, 50);
}

function draw() {
  clear();
  coracao(width / 2, height / 2, 7.5);
}

function coracao(x, y, tam) {
  let posX, posY;
  posX = 16 * pow(sin(t), 3) * tam + x;
  posY =
    (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t)) * -tam + y;

  if (t < TWO_PI) {
    pontosX.push(posX);
    pontosY.push(posY);
  } else {
    noLoop();
  }

  for (let i = 0; i < pontosX.length; i++) {
    point(pontosX[i], pontosY[i]);
  }
  t += 0.02;
}
