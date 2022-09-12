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
