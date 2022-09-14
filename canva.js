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
        tabuleiro.moveTo(350 + (width * i), 640);
        tabuleiro.lineTo(400 + (width * i), 640);
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
    console.log(width);
}