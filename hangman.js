function drawHangMan(error) {
    tabuleiro.lineWidth = 7;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#D64D00";
    tabuleiro.strokeStyle = "#D64D00";

    error = erros;
    if (error == 7) {
        drawPost();
    } else if (error == 6) {
        drawTopLine();
    } else if (error == 5) {
        drawHead();
    } else if (error == 4) {
        drawBody();
    } else if (error == 3) {
        drawLeftArm();
    } else if (error == 2) {
        drawRightArm();
    } else if (error == 1) {
        drawLeftLeg();
    } else if (error == 0) {
        drawRightLeg();
        endGame();
    } 
}

function drawPost() {
    tabuleiro.beginPath();
    tabuleiro.moveTo(520,450);
    tabuleiro.lineTo(520,150);
    tabuleiro.stroke();
    tabuleiro.closePath(); 
}
function drawTopLine() {
    tabuleiro.beginPath();
    tabuleiro.moveTo(520,150);
    tabuleiro.lineTo(650,150);
    tabuleiro.stroke();
    tabuleiro.closePath();
} 
function drawHead() {
//tabuleiro.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,150);
    tabuleiro.lineTo(650,180);
    tabuleiro.stroke();
    tabuleiro.closePath();

    tabuleiro.beginPath();
    tabuleiro.arc(650, 210, 30, 0, Math.PI * 2, true);
    tabuleiro.stroke();
    tabuleiro.closePath();
}
function drawBody() {
    tabuleiro.beginPath();
    tabuleiro.moveTo(650, 240);
    tabuleiro.lineTo(650, 360);
    tabuleiro.stroke();
    tabuleiro.closePath();
}
function drawLeftArm() {
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,250);
    tabuleiro.lineTo(630,300);
    tabuleiro.stroke();
    tabuleiro.closePath();
}
function drawRightArm() {
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,250);
    tabuleiro.lineTo(670,300);
    tabuleiro.stroke();
    tabuleiro.closePath();
}
function drawLeftLeg() {
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,360);
    tabuleiro.lineTo(630,410);
    tabuleiro.stroke();
    tabuleiro.closePath();
}
function drawRightLeg() {
    tabuleiro.beginPath();
    tabuleiro.moveTo(650,360);
    tabuleiro.lineTo(680,410);
    tabuleiro.stroke();
    tabuleiro.closePath();
}