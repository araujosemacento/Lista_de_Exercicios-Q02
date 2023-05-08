// Questão 07

function setup() {
  createCanvas(700, 50);
  fill("green");
  rect(0, 0, termial(8) * 10, 50);
}
function termial(num) {
  const numeros = Array.from({ length: num }, (whatever, i) => i + 1);
  const soma = numeros.reduce((total, valor) => total + valor);
  console.log(soma);
  return soma;
}
