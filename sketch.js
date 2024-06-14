function setup() {
    createCanvas(400, 400); // cria um canvas de 400x400 pixels
    background(0); // define o fundo como preto (0)
  }
  
  function draw() {
    // Define a cor do quadrado para branco (255)
    fill(255);
    // Desenha um quadrado na posição (x, y) com largura e altura de 50 pixels
    rect(mouseX, mouseY, 50, 50);
  }
  
  function keyPressed() {
    // Se a tecla 'c' for pressionada, limpa o fundo do canvas (fundo preto)
    if (key == 'Q') {
      background(0);
    }
  }
  