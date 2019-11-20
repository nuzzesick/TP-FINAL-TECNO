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
