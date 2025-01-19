const words = [
  "tirana", "andorra", "yerevan", "vienna", "baku", "minsk", "brussels", 
  "sarajevo", "sofia", "zagreb", "nicosia", "prague", "copenhagen", "tallinn", 
  "helsinki", "paris", "tbilisi", "berlin", "athens", "budapest", "reykjavik", 
  "dublin", "rome", "nur-sultan", "pristina", "riga", "vaduz", "vilnius", 
  "luxembourg city", "valletta", "monaco", "podgorica", "amsterdam", 
  "skopje", "oslo", "warsaw", "lisbon", "bucharest", "moscow", "san marino", 
  "belgrade", "bratislava", "ljubljana", "madrid", "stockholm", "bern", "ankara", 
  "kyiv", "london", "vatican city"
];


let randomWord = words[Math.floor(Math.random() * words.length)];
let wordLetters = randomWord.split(""); 
let lives = 10;
let guessedLetters = []; 
let correctGuesses = 0; 
let revealedLetters = []; 


document.getElementById("lives").innerText = "Lives: " + lives;


let hangmanDiv = document.getElementById("hangman");
for (let i = 0; i < wordLetters.length; i++) {
  let span = document.createElement("span");
  span.innerText = "_"; 
  span.setAttribute("data-index", i); 
  span.style.marginRight = "10px"; 
  hangmanDiv.appendChild(span);
}


function guess(letter) {

  if (guessedLetters.includes(letter)) {
    alert("You already guessed that letter!");
    return;
  }

  guessedLetters.push(letter); 
  let correct = false; 


  for (let i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] === letter) {
      document.querySelector(`span[data-index='${i}']`).innerText = letter; 
      correct = true; 
      correctGuesses++; 
    }
  }


  if (!correct) {
    lives--;
    document.getElementById("lives").innerText = "Lives: " + lives;
  }


  if (correctGuesses === wordLetters.length) {
    alert("Congratulations! You guessed the word!");
    resetGame();
  }

  if (lives === 0) {
    alert("Game Over! The word was: " + randomWord);
    resetGame();
  }
}


function giveClue() {
  let unrevealedIndexes = [];
  for (let i = 0; i < wordLetters.length; i++) {
    if (!revealedLetters.includes(i)) {
      unrevealedIndexes.push(i);
    }
  }

  if (unrevealedIndexes.length > 0) {
    let randomIndex = unrevealedIndexes[Math.floor(Math.random() * unrevealedIndexes.length)];
    document.querySelector(`span[data-index='${randomIndex}']`).innerText = wordLetters[randomIndex];
    revealedLetters.push(randomIndex); 
    correctGuesses++; 
  } else {
    alert("All clues have been revealed!");
  }

  if (revealedLetters.length === wordLetters.length) {
    alert("Congratulations! You've revealed the whole word!");
    resetGame();
  }
}


function resetGame() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  wordLetters = randomWord.split("");
  lives = 10;
  guessedLetters = [];
  correctGuesses = 0;
  revealedLetters = [];

  document.getElementById("lives").innerText = "Lives: " + lives;
  hangmanDiv.innerHTML = ""; 

  for (let i = 0; i < wordLetters.length; i++) {
    let span = document.createElement("span");
    span.innerText = "_";
    span.setAttribute("data-index", i);
    span.style.marginRight = "10px"; 
    hangmanDiv.appendChild(span);
  }
}
