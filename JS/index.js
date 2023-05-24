// VARIABLES
const body = document.querySelector('body');
const grid = document.querySelector('#grid');
const restartBtn = document.querySelector('#restart')
let numberOfSquares = 0;
let cells = [];
let makeBlack = false;

// ------------------------------------------------------------
// CODE

// start the sketch when website loads
start();
// restart when button clicked
restartBtn.onclick = () => location.reload();

// Make the grid square and responsive to window resize
setGridCSS();
window.addEventListener('resize', setGridCSS);

// create the cell elements and append them to the grid div as children
for(let i=0; i<numberOfSquares**2; i++)
    cells[i] = document.createElement('div');
cells.forEach(addCell);

// Get all the cells
// Add event on mouse click, to toggle changing the cell bg color to black on hover over cell
let cellElements = Array.from(document.querySelectorAll('.cell'));
grid.onmousedown = () => {
    if (makeBlack) makeBlack=false;
    else if (!makeBlack) makeBlack=true;

    cellElements.forEach((cellElement) => {
        cellElement.addEventListener('mouseover',() => {
            if (makeBlack) cellElement.classList.add('black');
        })
    });
}

// ------------------------------------------------------------
// FUNCTIONS

// Prompt which asks for grid size, limited from 5x5 to 100x100
function start(){
    do numberOfSquares = prompt("Please, choose a gird size between 5 and 100.");
    while (numberOfSquares < 5 || numberOfSquares > 100);
}

function setGridCSS()
{
    let gridWidth = grid.offsetWidth, 
        gridHeight = grid.offsetHeight;

    // Make the grid a square, with a side equal to the smaller screen size length
    if(gridWidth >= gridHeight) gridWidth = gridHeight;
    if(gridWidth <= gridHeight) gridHeight = gridWidth;

    grid.style.cssText = `grid: repeat(${numberOfSquares}, 1fr) / repeat(${numberOfSquares}, 1fr);
                          justify-items: center; height: ${gridHeight}px; width: ${gridWidth}px; margin: auto;`;
}

function addCell(cell){
    cell.style.cssText = 'width: 100%; height: 100%;';
    cell.classList.add("cell");
    grid.appendChild(cell);
}