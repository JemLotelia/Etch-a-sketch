const container = document.querySelector(".container");
const sizeSelect = document.querySelector(".select")
const baseColor = 'black';

function gridCreation (gridNumber) {
    let squares = container.querySelectorAll('div')
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    let gridArea = gridNumber * gridNumber;
    for (i = 0; i < gridArea; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = `${color}`;
        container.insertAdjacentElement('beforeend', square)
    } 
}


sizeSelect.addEventListener('click', function changeSize(){
    let number = prompt('What size? (Min: 2 Max: 100)')
    if (number < 2 || number > 100){
        alert('Number is either too big or small, choose a valid number')
        changeSize()
    }
    gridCreation(number)
})

