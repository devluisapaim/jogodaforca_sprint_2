function drawCanvas() {
    tabuleiro.lineWidth = 8;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC";
    tabuleiro.strokeStyle = "#D64D00";

    //manipulação
    tabuleiro.fillRect(0, 0, 1200, 800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(450, 450);
    tabuleiro.lineTo(750, 450);
    tabuleiro.stroke();
    tabuleiro.closePath();
}

function drawLines() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#D64D00";
    tabuleiro.strokeStyle = "#D64D00";

    let width = 600/secretWord.length
    for (let i = 0; i < secretWord.length; i++) {
        tabuleiro.moveTo(320 + (width * i), 640);
        tabuleiro.lineTo(380 + (width * i), 640);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
}

//Escrever a letra correta
function writeCorrectLetter(index) {
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#D64D00";
    
    tabuleiro.lineWidth = 6;
    let width = 600/secretWord.length;
    tabuleiro.fillText(secretWord[index], 330 + (width * index), 630);
}

//Escrever a letra incorreta
function writeIncorrectLetter(letter, erros) {
    tabuleiro.font = "bold 40px Inter";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#D64D00";
    
    tabuleiro.lineWidth = 4;
    tabuleiro.fillText(letter, 360 + (40 * (10 - erros)), 700, 40)

    drawHangMan(erros);
}

function endGame() {
    tabuleiro.font = "bold 52px";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#CA2501";
    
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText("Você perdeu!", 750, 330)
}

function winGame() {
    tabuleiro.font = "bold 52px";
    tabuleiro.lineCap = "round";
    tabuleiro.fillStyle = "#47AF48";
    
    tabuleiro.lineWidth = 6;
    tabuleiro.fillText("Você ganhou!", 750, 330)
}


function verificarJogo() {
    if (erros >= 6) {
        gameOver();
        return
    }

    let ganhou = true;
    if (acertos < palavraDaVez.length) {
        ganhou = false;
    }

    if (ganhou) {
        gameWin();
    }
}