screen_width = 0;
screen_height = 0;

drawApple = "";
speakData = "";
toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function loadImage(){
  new_image()
}

function preload(){
  img = loadImage("apple.jpg");
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
  to_number = Number(content);

  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "A maçã começou a ser desenhada" 
    drawApple = "set";
  }
  else{
    document.getElementById("status").innerHTML = "O numero não foi reconhecido" 
  }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerWidth;
  canvas = createCanvas(150,150);
  canvas.position(0,150);
}

function draw() {
  if(drawApple == "set")for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
    document.getElementById("status").innerHTML = to_number + " maçãs desenhadas"

  }
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "set";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
