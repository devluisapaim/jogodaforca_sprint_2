function addWord() {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#new-word").style.display = "block";

}

function cancelAddWord() {
    document.querySelector("#new-word").style.display = "none";
    document.querySelector("#menu").style.display = "block";
}

function giveUpGame() {
    document.querySelector("#start-game").style.display = "none";
    document.querySelector("#menu").style.display = "block";
}

function startGame() {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#start-game").style.display = "block";
}


var hangman = document.getElementById('game-hangman');
var manPincel = hangman.getContext('2d');

manPincel.fillStyle = "rgba(214, 77, 0, 1)";
// manPincel.fillRect (10, 10, 55, 50);
// manPincel.fillStyle = "rgba(0, 0, 200, 0.5)";
// manPincel.fillRect (30, 30, 55, 50);

//function drawLine() -> base
manPincel.beginPath();
manPincel.moveTo(40,140);
manPincel.lineTo(230,140);
manPincel.stroke();
manPincel.closePath(); 

//function drawLine() -> poste
manPincel.beginPath();
manPincel.moveTo(85,140);
manPincel.lineTo(85,25);
manPincel.stroke();
manPincel.closePath(); 

//function drawLine() -> base-topo
manPincel.beginPath();
manPincel.moveTo(85,26);
manPincel.lineTo(190,26);
manPincel.stroke();
manPincel.closePath(); 

//function drawLine() -> corda
manPincel.beginPath();
manPincel.moveTo(189,25);
manPincel.lineTo(189,42);
manPincel.stroke();
manPincel.closePath();

//function drawLine() -> cabeça
//manPincel.arc(x, y, radius, startAngle, endAngle, anticlockwise);
manPincel.beginPath();
manPincel.arc(189, 51, 10, 0, Math.PI * 2, true);
manPincel.stroke();
manPincel.closePath();

//function drawLine() -> corpo
manPincel.beginPath();
manPincel.moveTo(189,60);
manPincel.lineTo(189,110);
manPincel.stroke();
manPincel.closePath();

//function drawLine() -> braço 1
manPincel.beginPath();
manPincel.moveTo(189,60);
manPincel.lineTo(178,80);
manPincel.stroke();
manPincel.closePath();

//function drawLine() -> braço 2
manPincel.beginPath();
manPincel.moveTo(189,60);
manPincel.lineTo(199,80);
manPincel.stroke();
manPincel.closePath();

//function drawLine() -> perna 1
manPincel.beginPath();
manPincel.moveTo(189,110);
manPincel.lineTo(179,130);
manPincel.stroke();
manPincel.closePath();

//function drawLine() -> perna 2
manPincel.beginPath();
manPincel.moveTo(189,110);
manPincel.lineTo(199,130);
manPincel.stroke();
manPincel.closePath();


var word = document.getElementById('game-word');
var wordPincel = word.getContext('2d');

wordPincel.fillStyle = "rgba(214, 77, 0, 1)";

//primeira 
wordPincel.beginPath();
wordPincel.moveTo(40,140);
wordPincel.lineTo(230,140);
wordPincel.stroke();
wordPincel.closePath(); 