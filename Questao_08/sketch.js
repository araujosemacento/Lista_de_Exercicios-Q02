// Questão 08

let ceu;

function setup() {
  createCanvas(400, 400);
  ceu = new Ceu(7);
}

function draw() {
  ceu.estrelas();
  ceu.lua();
  ceu.nuvens();
}

function Ceu(stars) {
  if (stars != undefined) {
    this.numeroEstrelas = stars > 0 ? (stars + 1) * 10 : (-1 * stars + 1) * 10;
  } else {
    this.numeroEstrelas = 100;
  }
  this.estrelaPosX = Array.from(
    { length: this.numeroEstrelas },
    (valor) => (valor = random(width))
  );
  this.estrelaPosY = Array.from(
    { length: this.numeroEstrelas },
    (valor) => (valor = random(height))
  );

  let [luaX, luaY] = [random(50, width - 75), random(0, height - 125)];

  this.numeroNuvens = stars % 4;
  this.nuvemPosX = Array.from(
    { length: this.numeroNuvens },
    (valor) => (valor = random(width / 5, (width * 4) / 5))
  );
  this.nuvemPosY = Array.from(
    { length: this.numeroNuvens },
    (valor) => (valor = random(height / 5, (height * 4) / 5))
  );

  this.estrelas = function () {
    background(0);
    for (let i = 0; i < this.numeroEstrelas; i++) {
      ellipse(this.estrelaPosX[i], this.estrelaPosY[i], random(2, 5));
    }
  };

  this.lua = function () {
    beginShape();
    vertex(luaX, luaY);
    bezierVertex(luaX, luaY + 50, luaX + 25, luaY + 75, luaX + 75, luaY + 75);
    bezierVertex(luaX + 25, luaY + 125, luaX - 50, luaY + 50, luaX, luaY);
    endShape(CLOSE);
  };

  this.nuvens = function () {
    let nuvem = [];
    for (let i = 0; i < this.numeroNuvens; i++) {
      noStroke();
      nuvem[i] = [
        rect(this.nuvemPosX[i], this.nuvemPosY[i], 50, 25),
        ellipse(this.nuvemPosX[i], this.nuvemPosY[i] + 25 / 2, 25),
        ellipse(this.nuvemPosX[i] + 50, this.nuvemPosY[i] + 25 / 2, 25),
        ellipse(this.nuvemPosX[i] + 5, this.nuvemPosY[i], 20),
        ellipse(this.nuvemPosX[i] + 40, this.nuvemPosY[i], 30),
        ellipse(this.nuvemPosX[i] + 20, this.nuvemPosY[i] - 5, 30),
      ];
      if (this.nuvemPosX[i] - 25 > width) {
        this.nuvemPosY[i] = random(height / 5, (height * 4) / 5);
        this.nuvemPosX[i] = -75;
      } else if (this.nuvemPosX[i] - 25 < -100) {
        this.nuvemPosY[i] = random(height / 5, (height * 4) / 5);
        this.nuvemPosX[i] = width + 25;
      }
    }
    this.nuvemPosX = this.nuvemPosX.map(
      (x, i) => (x = i % 2 == 0 ? x + 0.25 + i / 7.5 : x - (0.25 + i / 7.5))
    );
  };
}
