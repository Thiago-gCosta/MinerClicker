let tela = [];
let X;
let Y;
let cor;
let contador = 0;
let minerios = 0;
let raio = [];
let preco = 1000;
let preco2 = 200;
let tempo;
let comprado = 0;
let clique = 1;
let selet;
let C = 0;

function preload() {
  tela[0] = loadImage("telainicial.png");
  tela[1] = loadImage("fundo.png");
  tela[2] = loadImage("ajudante.png");
  raio[0] = loadImage("raio.png");
  raio[1] = loadImage("raio2.png");
  som = loadSound("select.mp3");
  theme = loadSound("theme.mp3");
  theme.setLoop(true);
  click = loadSound("click.mp3");
  click.setLoop(false);
}
function setup() {
  createCanvas(500, 500);
  theme.play();
}

function draw() {
  image(tela[contador], 0, 0);

  if (
    mouseX > 230 &&
    mouseX < 275 &&
    mouseY > 200 &&
    mouseY < 250 &&
    mouseIsPressed &&
    contador >= 1
  ) {
    image(raio[C], 0, 0);
  }
  if (contador >= 1) {
    stroke("black");
    fill("black");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(minerios, 275, 30);
  }
  if (comprado >= 1 && contador >= 1) {
    tempo = millis() % 1000;
    if (tempo % 500 >= 1) {
      minerios++;
      tempo = 0;
    }
  }

  if (
    mouseX > 430 &&
    mouseX < 475 &&
    mouseY > 185 &&
    mouseY < 215 &&
    contador >= 1
  ) {
    fill("black");
    stroke("darkgreen");
    rect(220, 60, 260, 55);
    if (minerios >= preco) {
      fill("green");
      stroke("darkgreen");
    } else {
      fill("red");
      stroke("darkred");
    }
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Gera 100 minérios por segundo" + "\nCUSTO:1.000", 350, 90);
  }
  if (
    mouseX > 430 &&
    mouseX < 475 &&
    mouseY > 246 &&
    mouseY < 277 &&
    contador >= 1
  ) {
    fill("black");
    stroke("darkblue");
    rect(220, 60, 260, 55);
    if (minerios >= preco2) {
      fill("green");
      stroke("darkgreen");
    } else {
      fill("red");
      stroke("darkred");
    }
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Aumenta o poder de clique em 10x" + "\nCUSTO:" + preco2, 350, 90);
  }
}
function mouseClicked() {
  if (
    mouseX > 155 &&
    mouseX < 370 &&
    mouseY > 240 &&
    mouseY < 290 &&
    contador == 0
  ) {
    som.play();
    contador++;
  }
  if (
    mouseX > 230 &&
    mouseX < 275 &&
    mouseY > 200 &&
    mouseY < 250 &&
    contador >= 1
  ) {
    click.play();
    minerios += clique;
    image(raio, 0, 0);
  }
  if (
    mouseX > 430 &&
    mouseX < 475 &&
    mouseY > 185 &&
    mouseY < 215 &&
    minerios >= preco &&
    contador >= 1
  ) {
    som.play();
    minerios -= preco;
    comprado++;
    contador = 2;
    C = 1;
  }
  if (
    mouseX > 430 &&
    mouseX < 475 &&
    mouseY > 246 &&
    mouseY < 277 &&
    minerios >= preco2 &&
    contador >= 1
  ) {
    som.play();
    minerios -= preco2;
    clique += 10;
    preco2 += 1000;
  }
}
