// Questão 02

var maior;

function setup() {
  createCanvas(700, 500);
  let [vezes, arr] = [parseInt(Math.random() * 25), []];
  if (vezes === 0) {
    vezes = parseInt(Math.random() * 25);
  }
  for (let i = 0; i <= vezes; i++) {
    arr[i] = parseInt((Math.random() * width) / 2);
  }
  maior = Math.max(...arr);
  fill(0);
  stroke(255);
  rectMode(CENTER);
  console.log(arr, maior);
}

function draw() {
  clear();
  rect(mouseX, mouseY, maior / 1.5, maior);
}

function mousePressed() {
  setup();
}
