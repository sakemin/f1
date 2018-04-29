var mainOsc;
var bassOsc;
var trebleOsc;

var pMouseX = 0;
var pMouseY = 0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight,WEBGL);
  rectMode(CENTER);
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 2000);

  mainOsc = new p5.Oscillator();
  mainOsc.setType('triangle');
  mainOsc.freq(240);
  mainOsc.amp(0);
  mainOsc.start();

  bassOsc = new p5.Oscillator();
  bassOsc.setType('saw');
  bassOsc.freq(240);
  bassOsc.amp(0);
  bassOsc.start();

  trebleOsc = new p5.Oscillator();
  trebleOsc.setType('square');
  trebleOsc.freq(240);
  trebleOsc.amp(0);
  trebleOsc.start();
}


function draw(){
  background(0);
  stroke(255);
  strokeWeight(1);
  noFill();

  if(isMobile()){
    mobileQuads();

    mainOsc.freq(rotationX*3+100);
    bassOsc.freq(80+rotationY);
    trebleOsc.freq(440+sqrt(rotationX*rotationX+rotationY+rotationY));

    mainOsc.amp(0.5);
    bassOsc.amp(4);
    trebleOsc.amp(sqrt(sqrt(sqrt((abs(accelerationX-pAccelerationX)+abs(accelerationY-pAccelerationY))/2))));
  }
  else{
    quads();
    mainOsc.freq(mouseX/3+100);
    bassOsc.freq(80+mouseY/8);
    trebleOsc.freq(440+sqrt(mouseX*mouseX+mouseY+mouseY));

      mainOsc.amp(0.5);
      bassOsc.amp(4);
      trebleOsc.amp(sqrt(sqrt(sqrt((abs(mouseX-pMouseX)+abs(mouseY-pMouseY))/2))));

  }



  drawOrbit();

  pMouseX = mouseX;
  pMouseY = mouseY;
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
  rotateX(rotationX/6);
    push();
    rotateY(rotationY/6);
    drawQuad();
    pop();
    push();
    rotateY(-rotationY/6);
    drawQuad();
    pop();
    push();
      rotateZ(rotationX/3);
      push();
      rotateY(rotationY/6);
      drawQuad();
      pop();
      push();
      rotateY(-rotationY/6);
      drawQuad();
      pop();
    pop();
    push();
        rotateZ(-rotationX/3);
        push();
        rotateY(rotationY/6);
        drawQuad();
        pop();
        push();
        rotateY(-rotationY/6);
        drawQuad();
        pop();
      pop();
  pop();
}

function isMobile(){

	var UserAgent = navigator.userAgent;



	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)

	{

		return true;

	}else{

		return false;

	}

}
