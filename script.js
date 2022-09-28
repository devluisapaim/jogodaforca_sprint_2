let tabuleiro = document.getElementById('hangman').getContext('2d');
let words = ["LOGICA", "HTML", "CSS", "FORCA", "ESTUDO", "DESAFIO"];
let secretWord = "";
let erros = 8;
let letters = [];
let yesLetters = [];
let sortedYesLetters;
let sortedWordLetters;

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

//Verificar se tecla digitada é uma letra
function checkLetter(key) {
    let status = false;
    if (key >= 65 && letters.indexOf(key) || key <= 90 && letters.indexOf(key)) {
        letters.push(key);
        return status
    } else {
        status = true;
        letters.push(key);
        return status
    }
}

function countErrors() {
    erros -= 1; 
}
 
function startGame() {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#start-game").style.display = "block";
    document.querySelector("#new-word").style.display = "none";
    chooseSecretWord();

    erros = 8;
    yesLetters = [];

    wordLetters();
    drawCanvas();
    drawLines();
    drawHangMan();
    
    //Captar a letra digitada
    
   do {
    document.onkeydown = (e) => {
        if (erros > 0) {
            let letter = e.key.toUpperCase();

            if (checkLetter(letter) && secretWord.includes(letter)) {                
            //Saber se a palavra secreta inclui a letra digitada
                for (let i = 0; i < secretWord.length; i++) {
                    if (secretWord[i] === letter) {
                        writeCorrectLetter(i);

                        if (yesLetters.length != secretWord.length && yesLetters.includes(letter) == false) {
                            yesLetters.push(letter);
                        }                                           
                    }
                }
                checkWin();
            } else {
                countErrors(letter);      
                writeIncorrectLetter(letter, erros);               
            }
        } 

    }
    } while (sortedWordLetters != sortedYesLetters);

}
   
function addNewWord() {
    newWord = document.getElementById("inputNewWord").value.toUpperCase();
    words.push(newWord);
    document.getElementById("inputNewWord").value = "";

    //CONDIONAR PALAVRA <= 8 LETRAS
}

function wordLetters() {
    lettersInTheWord = [];

    for (x = 0; x <= secretWord.length; x++) {
        if (lettersInTheWord.includes(secretWord[x]) == false)  {
            lettersInTheWord.push(secretWord[x]);
        }
    }
    lettersInTheWord.pop();
}

function checkWin() {
  //SORT
  lettersInTheWord.sort();
  yesLetters.sort(); 

  //JOIN
  sortedWordLetters = lettersInTheWord.join("");
  sortedYesLetters = yesLetters.join("");

  //COMPARE
  if (sortedWordLetters === sortedYesLetters) {
      winGame();
  }
}

