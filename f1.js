

function setup() {
  createCanvas(window.innerWidth,window.innerHeight,WEBGL);
  rectMode(CENTER);
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 2000);
}
function draw(){
  background(0);
  stroke(255);
  strokeWeight(1);
  noFill();

  mobileQuads();


  drawOrbit();

}

function drawQuad(){
  quad(-150,200,
  -150,-200,
  150,-200,
  150,200,);
}

function drawOrbit(){
  for(var i = 0; i<360;i+=5){
    rotate(millis()%1000);
    push();
    translate(250*cos(radians(i)),250*sin(radians(i)));
    ellipse(0,0,1,1);
    pop();
  }
}

function quads(){
  push();
  rotateX(mouseX/10);
    push();
    rotateY(mouseY/10);
    drawQuad();
    pop();
    push();
    rotateY(-mouseY/10);
    drawQuad();
    pop();
    push();
      rotateZ(mouseX/5);
      push();
      rotateY(mouseY/10);
      drawQuad();
      pop();
      push();
      rotateY(-mouseY/10);
      drawQuad();
      pop();
    pop();
    push();
        rotateZ(-mouseX/5);
        push();
        rotateY(mouseY/10);
        drawQuad();
        pop();
        push();
        rotateY(-mouseY/10);
        drawQuad();
        pop();
      pop();
  pop();
}

function mobileQuads(){
  push();
  rotateX(rotationX/10);
    push();
    rotateY(rotationY/10);
    drawQuad();
    pop();
    push();
    rotateY(-rotationY/10);
    drawQuad();
    pop();
    push();
      rotateZ(rotationX/5);
      push();
      rotateY(rotationY/10);
      drawQuad();
      pop();
      push();
      rotateY(-rotationY/10);
      drawQuad();
      pop();
    pop();
    push();
        rotateZ(-rotationX/5);
        push();
        rotateY(rotationY/10);
        drawQuad();
        pop();
        push();
        rotateY(-rotationY/10);
        drawQuad();
        pop();
      pop();
  pop();
}
