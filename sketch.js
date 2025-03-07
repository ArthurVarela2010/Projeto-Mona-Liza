function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("#673AB7");
    fill("#FFEB3B");
    circle(200, 200, 300); // rosto
    fill("white");
    circle(150, 150, 70); // olho esquerdo
    circle(250, 150, 70); // olho direito
    line(170, 270, 250, 235); // boca
    fill("#FFC107");
    triangle(200, 180, 170, 220, 220, 250); // nariz
    line(103, 105, 178, 113); // sobrancelha esquerda
    line(205, 106, 279, 106); // sobrancelha direita
    // circle(150,150,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 20); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 20); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  