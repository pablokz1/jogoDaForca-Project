const words = ["javascript", "html", "css", "jquery", "nodejs", "react", "angular", "python", "java", "c", "c++", "c#", 
"php", "typescript", "swift", "ruby", "go", "rust", "dart", "kotlin", "scala", "perl", "lua", "r", "haskell", "elixir", 
"cobol", "fortran", "assembly"];

let randomWord = words[Math.floor(Math.random() * words.length)];
let attempts = 6;
let guessedLetters = [];
let wordDisplay = "";


for (let i = 0; i < randomWord.length; i++) {
    wordDisplay += "_ ";
}
document.getElementById("word-display").innerText = wordDisplay.trim();

function checkGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();

    if (guessedLetters.includes(guess)) {
        document.getElementById("output").innerText = "Você já tentou esta letra antes.";
        return;
    }

    guessedLetters.push(guess);
    document.getElementById("used-letters").innerText = guessedLetters.join(", ");

    if (randomWord.includes(guess)) {
        let newWordDisplay = "";
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guess) {
                newWordDisplay += guess + " ";
            } else {
                newWordDisplay += wordDisplay[i * 2] + " ";
            }
        }
        wordDisplay = newWordDisplay.trim();
        document.getElementById("word-display").innerText = wordDisplay;
        if (!wordDisplay.includes("_")) {
            document.getElementById("output").innerText = "Parabéns! Você acertou a palavra!";
            document.getElementById("guess").disabled = true;
        } else {
            document.getElementById("output").innerText = "Letra correta!";
        }
    } else {
        attempts--;
        if (attempts === 0) {
            document.getElementById("output").innerText = `Game Over! A palavra era: ${randomWord}`;
            document.getElementById("guess").disabled = true;
        } else {
            document.getElementById("output").innerText = `Letra incorreta! Você tem mais ${attempts} tentativas.`;
        }
    }

    document.getElementById("guess").value = "";
}