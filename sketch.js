function setup() {
    createCanvas(600, 600);
    
  }
  
  function draw() {
     background(255);
    
     
    strokeWeight(20);
    stroke(0)
        
    fill(255, 255, 255);//BLANCO
    rect(80,60, 200, 180);
  
     
    fill(255, 255, 255);//BLANCO 
    rect(150,180, 200,430);
    
    
    fill(0, 0, 150);//AZUL
    rect(20, 300, 200,300);
    
    fill(230, 0,0);//ROJO
    rect(200, 0, 300,300);
      
    fill(255, 255, 255);//BLANCO
    rect(200, 428, 600,300);
    
    
    
    fill(255, 255, 255);//BLANCO
    rect(300, 428, 300,400);
    
      
    fill(255, 225, 0);//AMARILLO
    rect(400,350, 170,150);  
   
    
    
    
    
    
    fill(223, 246, 255)//Celeste mas claro
    if (mouseX < 150) 
    fill(255, 255, 255)
    rect(80,60, 200, 180);
    
  
    
    fill(133, 205, 253)//Celeste claro
    if (mouseX < 400) 
    fill(255, 255, 255)
    rect(300, 428, 300,400);
    
    
    fill(60, 132, 171)//Turquesa
    if (mouseX < 230) 
    fill(255, 255, 255)
    rect(150,180, 200,430);
    
    
    
    
    fill(230, 0,0)
    if (mouseIsPressed) 
    fill(10, 38, 71)
    rect(200, 0, 300,300);//Azul 1
     
    
    fill(0, 0, 150)
    if (mouseIsPressed) 
    fill(97, 164, 188)
    rect(20, 300, 200,300);//Azul 2
  
    
    fill(255, 225, 0)
    if (mouseIsPressed) 
    fill(32, 82, 149)
    rect(400,350, 170,150);//Azul 3
    
    
    
    
    if (mouseIsPressed) {
    if (mouseButton == RIGHT) {
        
    strokeWeight(6);
    strokeCap(SQUARE);
    stroke(28, 49, 94);//Lineas 1 
    //line(120,600,120,0);
    line(110,250,110,0);
    line(150,600,150,0);
   // line(160,600,160,0);
    
    strokeWeight(6);
    stroke(145, 216, 228);
    //line(0,23,600,23);//Lineas 2
    line(0,29,600,29);
  
    strokeWeight(6);
    stroke(86, 157, 170);//Lineas 3
    line(550,600,550,0);
    line(500,600,500,439);
    }}
    
   
  console.log("X: " + mouseX + " Y:" + mouseY);
  }
  
  
  document.oncontextmenu = function () {
      return false;
    };
  
  
  
  
  
  
  
  
  
  