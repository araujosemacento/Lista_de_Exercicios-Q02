// Questão 01

function setup() {
  createCanvas(700, 500);
  stroke(255);
  param(50);
}

function param(num) {
  let [cores, x, y] = [[], [], []];
  for (let i = 0; i < num; i++) {
    cores[i] = color(random(256), random(256), random(256));
    x[i] = random(width);
    y[i] = random(height);

    fill(cores[i]);
    circle(x[i], y[i], 500 / num + random(200));
  }
}
