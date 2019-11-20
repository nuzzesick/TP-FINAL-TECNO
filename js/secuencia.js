var x, t, y, cant;
function setup() {
  let secuencia = createCanvas(window.screen.width, window.screen.height);
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
