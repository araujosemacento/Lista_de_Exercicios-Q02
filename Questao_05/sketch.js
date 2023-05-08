// Questão 05

var notas = [];

for (let i = 0; i < 4; i++) {
  notas[i] = parseInt(Math.random() * 11);
}

var media =
  notas.reduce((total, notaAtual) => total + notaAtual) / notas.length;
console.log(notas, media);

function setup() {
  createCanvas(200, 50);
  fill(0, 200, 0);
  rect(0, 0, 200, 50);
  fill(200, 0, 0);
  rect(0, 0, media * 20, 50);
}
