const colourToGuess = document.getElementById("colourRandom");
const newColBtn = document.getElementById("newColour");
const correct = document.getElementById("correct");
const score = document.getElementById("score");
const allBoxes = document.querySelectorAll(".box");

let newColour = null;
let displayScore = 0;
let guessing = false;


allBoxes.forEach((colourBox) => {
    colourBox.addEventListener("click", () => {
        if(colourBox.style.backgroundColor === newColour){
            correctCol()
        } else {
            colourBox.style.opacity = "0"
        }
    })
})

const correctCol = () => {
    displayScore++
    for(let i = 0; i < allBoxes.length; i++){
        allBoxes[i].style.opacity = "1"
        allBoxes[i].style.backgroundColor = newColour
    }
}

const resetGame = () => {
    guessing = true;
    for(let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].style.backgroundColor = `rgb${Math.round (Math.random() * 255)}, rgb${Math.round (Math.random() * 255)}, rgb${Math.round (Math.random() * 255)}`
    }
    let elementToGuess = console.log(allBoxes[Math.floor(Math.random() * allBoxes.length)])

    newColour = elementToGuess.style.backgroundColour;

    colourToGuess.textContent = newColour
}

resetGame()

newColBtn.addEventListener("click", resetGame)