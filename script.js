//Seletores
let tabuleiro = document.getElementById('hangman').getContext('2d');
let words = ["HTML", "TESTE", "TESTANDO", "NOVAMENTE", "OUTRO", "DESAFIO"];
let secretWord = "";

function chooseSecretWord() {
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(secretWord);
}

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
    chooseSecretWord();
    drawCanvas();
    drawLines();
}














/*

manPincel.fillStyle = "rgb(0, 0, 0)";

function drawBase() {
    manPincel.beginPath();
    manPincel.moveTo(40,140);
    manPincel.lineTo(230,140);
    manPincel.stroke();
    manPincel.closePath(); 
}
function drawPost() {
    manPincel.beginPath();
    manPincel.moveTo(85,140);
    manPincel.lineTo(85,25);
    manPincel.stroke();
    manPincel.closePath(); 
}
function drawTop() {
    manPincel.beginPath();
    manPincel.moveTo(85,26);
    manPincel.lineTo(190,26);
    manPincel.stroke();
    manPincel.closePath(); 
}
function drawRope() {
    manPincel.beginPath();
    manPincel.moveTo(189,25);
    manPincel.lineTo(189,42);
    manPincel.stroke();
    manPincel.closePath();
}
function drawHead() {
//manPincel.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    manPincel.beginPath();
    manPincel.arc(189, 51, 10, 0, Math.PI * 2, true);
    manPincel.stroke();
    manPincel.closePath();
}
function drawBody() {
    manPincel.beginPath();
    manPincel.moveTo(189,60);
    manPincel.lineTo(189,110);
    manPincel.stroke();
    manPincel.closePath();
}
function drawArmOne() {
    manPincel.beginPath();
    manPincel.moveTo(189,60);
    manPincel.lineTo(178,80);
    manPincel.stroke();
    manPincel.closePath();
}
function drawArmTwo() {
    manPincel.beginPath();
    manPincel.moveTo(189,60);
    manPincel.lineTo(199,80);
    manPincel.stroke();
    manPincel.closePath();
}
function drawLegOne() {
    manPincel.beginPath();
    manPincel.moveTo(189,110);
    manPincel.lineTo(179,130);
    manPincel.stroke();
    manPincel.closePath();
}
function drawLegTwo() {
    manPincel.beginPath();
    manPincel.moveTo(189,110);
    manPincel.lineTo(199,130);
    manPincel.stroke();
    manPincel.closePath();
}

function drawHangMan() {
    //chamar função por funcao em cada erro
    /*    let funcoes = [drawBase(), drawPost(), drawTop(), drawRope(), drawHead(), drawBody(), drawArmOne(), drawArmTwo(), drawLegOne(), drawLegTwo()]
    let funcoes = [[drawBase()], [drawPost()], [drawTop()], [drawRope()], [drawHead()], [drawBody()], [drawArmOne()], [drawArmTwo()], [drawLegOne()], [drawLegTwo()]];

    for (let x; x <= 5; x++) {
        funcoes[x];
    }
}*/








/*
var word = document.getElementById('game-word');
var wordPincel = word.getContext('2d');

wordPincel.fillStyle = "rgba(214, 77, 0, 1)";

//primeira 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

//segunda 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

//terceira 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

//quarta 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

//quinta 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

//sexta 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

//setima 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

//oitava 
wordPincel.beginPath();
wordPincel.moveTo(10,100);
wordPincel.lineTo(60,100);
wordPincel.stroke();
wordPincel.closePath();

*/
