// Questão 09

let ret1, ret2;

function setup() {
  createCanvas(600, 400);
  noStroke();
  rectMode(CENTER);
  ret1 = new Retangulo(0, 0, 50, 50);
  ret2 = new Retangulo(width / 2, height / 2, 200, 200);
}

function draw() {
  clear();

  ret1.x = mouseX;
  ret1.y = mouseY;

  let colidiu = ret1.colide(ret2);
  if (colidiu) {
    fill(200, 0, 0);
  } else {
    fill(0, 200, 0);
  }
  ret2.display();

  fill(0, 150);
  ret1.display();
}

class Retangulo {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  colide(other) {
    let thisX = this.x - this.w / 2;
    let thisY = this.y - this.h / 2;
    let otherX = other.x - other.w / 2;
    let otherY = other.y - other.h / 2;

    return (
      thisX + this.w >= otherX &&
      thisX <= otherX + other.w &&
      thisY + this.h >= otherY &&
      thisY <= otherY + other.h
    );
  }

  display() {
    rect(this.x, this.y, this.w, this.h);
  }
}
