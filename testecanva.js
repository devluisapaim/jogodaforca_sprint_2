let tabuleiro = document.querySelector('#hangman').getContext('2d');
let words = ["TESTE", "TESTANDO", "NOVAMENTE", "OUTRO", "DESAFIO"];
let secretWord = "";

function chooseSecretWord() {
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(secretWord);
}

function startGame() {
    // document.querySelector("#menu").style.display = "none";
    // document.querySelector("#start-game").style.display = "block";
    chooseSecretWord();
    drawCanvas();
}

function drawCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    //manipulação
    tabuleiro.fillRect(0, 0, 1200, 800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(900, 500);
    tabuleiro.lineTo(650, 500);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function drawLines() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#0A3871";

    let width = 600/secretWord.length
    for (let i = 0; i < secretWord.length; i++) {
        tabuleiro.moveTo(500 + (width * i), 640);
        tabuleiro.moveTo(550 + (width * i), 640);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

startGame();