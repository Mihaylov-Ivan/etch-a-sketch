const body = document.querySelector('body');
let numberOfSquares = 0;
let cells = [];

do numberOfSquares = prompt("Please, choose a gird size between 5 and 100.");
while (numberOfSquares < 5 || numberOfSquares > 100);

setBodyCSS();

window.addEventListener('resize', setBodyCSS);

for(let i=0; i<numberOfSquares**2; i++){
    cells[i] = document.createElement(`cell${i+1}`);
}

cells.forEach(addCell);

let cellElements = Array.from(document.querySelectorAll('.cell'));

console.log(cellElements);

cellElements.forEach(cellElement => function() {
    cellElement.addEventListener('mouseover',() => {
        cellElement.classList.add('black');
    })

    console.log(cellElement.classList);

});


// body.onmouseover = function(e) {



//     // console.log(e);

//     // currentCellName = e.target.localName;
//     // let cell = document.querySelector(currentCellName);
//     // cell.style.cssText = "background-color: black;";
// }

// body.onmousedown = function(e) {
//     console.log(e);
// }

function setBodyCSS()
{
    let screenWidth = window.innerWidth, 
        screenHeight = window.innerHeight;

    if(screenWidth >= screenHeight) screenWidth = screenHeight;
    if(screenWidth <= screenHeight) screenHeight = screenWidth;

    body.style.cssText = `grid: repeat(${numberOfSquares}, 1fr) / repeat(${numberOfSquares}, 1fr);
                          justify-items: center; height: ${screenHeight}px; width: ${screenWidth}px; margin: auto;`;
}

function addCell(cell){
    cell.style.cssText = 'width: 100%; height: 100%;';
    cell.classList.add("cell");
    body.appendChild(cell);
}

// function addCellColor(currentCellName){
//     let cell = document.querySelector(currentCellName);

//     cell.style.cssText = "background-color: black;";
// }