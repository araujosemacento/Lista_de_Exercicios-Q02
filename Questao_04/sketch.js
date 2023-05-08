// Questão 04

let linha = [];

for (let i = 0; i < 5; i++) {
  let aux = [];
  for (let j = 0; j < 4; j++) {
    do {
      tente = parseInt(Math.random() * 10);
    } while (aux.includes(tente));
    aux[j] = tente;
  }
  console.log(aux);
  linha[i] = aux;
}

function setup() {
  createCanvas(200, 100);
  background(0);
  colorMode(HSB, 360, 100, 100);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      fill(
        map(linha[i][j], 0, 10, 0, 360),
        map(i, 0, 4, 50, 100),
        map(i, 0, 4, 100, 50)
      );
      rect(linha[i][j] * 20, i * 20, 20);
    }
  }
}
