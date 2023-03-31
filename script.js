const container = document.querySelector(".container")
const color = 'black';



function gridCreation (gridNumber) {
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`
    let gridArea = gridNumber * gridNumber;
    for (i = 0; i < gridArea; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = `${color}`;
        container.insertAdjacentElement('beforeend', square)
    } 
}
