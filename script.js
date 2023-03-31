const container = document.querySelector(".container");
const sizeSelect = document.querySelector(".select")
const resetButton = document.querySelector(".reset")
const blackButton = document.querySelector(".black")
const randomButton = document.querySelector(".random")
const pinkButton = document.querySelector(".pink")
const baseColor = 'white';
let color = 'black'
let click = true

function gridCreation (gridNumber) {
    let gridSquares = container.querySelectorAll('div')
    gridSquares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    let gridArea = gridNumber * gridNumber;
    for (i = 0; i < gridArea; i++){
        let gridSquare = document.createElement('div');
        gridSquare.style.backgroundColor = `${baseColor}`;
        gridSquare.classList.add('square-style')
        gridSquare.addEventListener('mouseover', changeColor)
        container.insertAdjacentElement('beforeend', gridSquare)
    } }



sizeSelect.addEventListener('click', function changeSize(){
    let number = prompt('What size? (Min: 2 Max: 100)')
    if (number < 2 || number > 100){
        alert('Number is either too big or small, choose a valid number')
        changeSize()
    }
    gridCreation(number)
})



resetButton.addEventListener('click', resetColor)
function resetColor(){
    let resetSquares = container.querySelectorAll('div')
    resetSquares.forEach((div) => 
    div.style.backgroundColor = `white`)
    resetSquares.forEach((div) => 
    div.style.opacity = `1`)
    
    }

pinkButton.addEventListener('click', () => color = "pink")
blackButton.addEventListener('click', () => color = "black")
randomButton.addEventListener('click', () => color = "random")



function changeColor() {
    if (click){
    if (color === `random`){
        this.style.backgroundColor = `hsl(${Math.random()* 360}, 100% ,50%)`
    }
    else {
        this.style.backgroundColor = color
        this.style.opacity = 1
    }
}
}

document.querySelector('body').addEventListener('click', () => {
    if (click == true){
        click = false
    }
    else click = true
})



gridCreation(16)
