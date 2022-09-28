let tabuleiro = document.getElementById('hangman').getContext('2d');
let words = ["HTML", "TESTE", "TESTANDO", "NOVAMENTE", "OUTRO", "DESAFIO"];
let secretWord = "";
let erros = 8;
let acertos = 0;
let letters = [];
let noLetters= [];
let yesLetters = [];

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

    acertos = 0;
    erros = 8;
    yesLetters = [];
    wordLetter = [];

    for (x = 0; x <= secretWord.length; x++) {
        if (wordLetter.includes(secretWord[x]) == false)  {
            wordLetter.push(secretWord[x]);
        }
    }
    wordLetter.pop();

    drawCanvas();
    drawLines();
    drawHangMan();
    
    //Captar a letra digitada
    document.onkeydown = (e) => {
        if (erros > 0) {
            let letter = e.key.toUpperCase()
        
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
           
            } else {
                countErrors(letter);      
                writeIncorrectLetter(letter, erros);               
            }

            //SORT
            wordLetter.sort();
            yesLetters.sort(); 

            //SHOW
            console.log("wordLetter", wordLetter);
            console.log("yesLetters: ", yesLetters);  
            
            //JOIN
            let wordLetters = wordLetter.join("");
            let simLetters = yesLetters.join("");

            //SHOW
            console.log("wordLetter", wordLetter);
            console.log("yesLetters: ", yesLetters);  

            //COMPARE
            if (wordLetters === simLetters) {
                console.log("IGUAIS")
                winGame();
            }
        } 
    }
}

function addNewWord() {
    newWord = document.getElementById("inputNewWord").value.toUpperCase();
    words.push(newWord);
    document.getElementById("inputNewWord").value = "";
}