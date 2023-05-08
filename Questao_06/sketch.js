// Questão 06

let [x, y] = [[], []];

function setup() {
  createCanvas(700, 500);

  for (let i = 0; i < 10; i++) {
    x[i] = Math.random() * width;
    y[i] = Math.random() * height;
  }
  for (let j = 0; j < x.length; j++) {
    for (let i = 0; i < y.length; i++) {
      stroke("white");
      strokeWeight(1);
      line(x[i], y[i], x[j], y[j]);
      stroke("red");
      strokeWeight(7);
      point(x[i], y[i]);
    }
  }
}
