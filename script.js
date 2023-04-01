
// Global Variables

const container = document.querySelector(".container");
const sizeSelect = document.querySelector(".select")
const resetButton = document.querySelector(".reset")
const blackButton = document.querySelector(".black")
const randomButton = document.querySelector(".random")
const pinkButton = document.querySelector(".pink")
const eraserButton = document.querySelector('.eraser')
const baseColour = 'white';
let colour = 'black'
let click = true


// // gridCreation function
// First selects all divs , then removes each div from container
// to ensure its an empty div when called 
// Next it creates a grid template for columns and rows. takes number from parameter, 
// then creates fractions based on that.
// Loop that creates the grid squares (divs) from the gridArea, applys baseColor.
// adds an event listener for the changing of color on hover
// then inserts all gridSquare to the container


function gridCreation (gridNumber) {
    let gridSquares = container.querySelectorAll('div')
    gridSquares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    container.style.gridTemplateRows= `repeat(${gridNumber}, 1fr)`
    let gridArea = gridNumber * gridNumber;
    for (i = 0; i < gridArea; i++){
        let gridSquare = document.createElement('div');
        gridSquare.style.backgroundColor = `${baseColour}`;
        gridSquare.classList.add('square-style')
        gridSquare.addEventListener('mouseover', changeColour)
        container.insertAdjacentElement('beforeend', gridSquare)
    } }

// Takes user input to change the size of the Etch-a-sketch

sizeSelect.addEventListener('click', function changeSize(){
    let number = prompt('What size? (Min: 2 Max: 100)')
    if (number < 2 || number > 100){
        alert('Number is either too big or small, choose a valid number')
        changeSize()
    }
    gridCreation(number)
})

// Reset board fuynction, changing each squares background to white.

resetButton.addEventListener('click', resetColor)
function resetColor(){
    let resetSquares = container.querySelectorAll('div')
    resetSquares.forEach((div) => 
    div.style.backgroundColor = `white`)
    }

// Event listeners changing variable color   
pinkButton.addEventListener('click', () => colour = "pink")
blackButton.addEventListener('click', () => colour = "black")
randomButton.addEventListener('click', () => colour = "random")
eraserButton.addEventListener('click', () => colour = 'white')

// function to allow for more complex logic for colors (rainbow)
// if you revisit in future, make more fun colors, such as LGBT flag spectrum colors
// also if click = false, then doesnt draw.
// So when click = true, it draws, when false it doesnt
function changeColour() {
    if (click){
    if (colour === `random`){
        this.style.backgroundColor = `hsl(${Math.random()* 360}, 100% ,50%)`
    }
    else {
        this.style.backgroundColor = colour
        this.style.opacity = 1
    }
}
}
// This logic allows you to stop drawing on click, basically just makes it so if 
// click is true, then its false. and vice versa.

document.querySelector('.container').addEventListener('click', () => {
    if (click == true){
        click = false
        console.log(click)
    }
    else click = true
    console.log(click)
})



gridCreation(16)
