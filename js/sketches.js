var x, t, y, cant;
function setup() {
  let secuencia = createCanvas(window.screen.width/3, window.screen.height/3);
  secuencia.parent('secuencia');
  colorMode(HSB,360,100,100);
  textAlign(CENTER);
  textSize(30);
  x = width/2;
  y = height+50;
}
function draw() {
  t++;
  if(t==360){
    t= 0;
  }
  background(0);
  y--;
  fill(t ,100,100);
  text("Hecho con amor", x, y);
  text("y para todos ustedes", x, y+50);
  text(" por Matías Nuccetelli", x, y+100);
  text("y Santiago Gonzalez", x, y+150);
  if(y+200 == 0){
    y = 700;
  }
}


let porcion=1;
let pMax = 32;
let tam;

function setup() {
  let circulo = createCanvas(400, 400);
  circulo.parent('circulo');
  noStroke();
  background(0);
}

function draw() {
  porcion = int(1 + (pMax * mouseX / float(width)));
  if (porcion <= 0) porcion = 1;
  tam = width;
  colorMode(HSB,porcion);
  background(0);
  laputamadre();
}

function laputamadre() {
  for(let i=0; i < porcion; i=i+1) {
    fill(i,100,100);
    arc(width/2,height/2, tam, tam, i*6.28318530717958647693/porcion, (i+1)*6.28318530717958647693/porcion);
  }
}
