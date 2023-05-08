// Questão 03

let x, y, largura, altura;

function setup() {
  fill(0);
  stroke(255);
  createCanvas(400, 400);
  x = (Math.random() * width) / 2;
  y = (Math.random() * height) / 2;
  largura = random(50, 150);
  altura = random(50, 150);
  rect(x, y, largura, altura);
  console.log(x, y, largura, altura);
  alter();
  rect(x, y, largura, altura);
  console.log(x, y, largura, altura);
}
function alter() {
  x += 50;
  y += 50;
  largura += largura / 4;
  altura += altura / 4;
}
