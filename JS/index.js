const body = document.querySelector('body');
let numberOfSquares = 0;
let cells = [];

function setBodyCSS()
{
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let w = screenWidth, h=screenHeight;

    if(screenWidth >= screenHeight) w = h;
    if(screenWidth <= screenHeight) h = w;

    body.style.cssText = `grid: repeat(${numberOfSquares}, 1fr) / repeat(${numberOfSquares}, 1fr);
                          justify-items: center; height: ${h}px; width: ${w}px; margin: auto;`;
}

function createCells(cell){
    cell.style.cssText = 'width: 100%; height: 100%;';
    body.appendChild(cell);
}

do numberOfSquares = prompt("Please, choose a gird size between 5 and 100.");
while (numberOfSquares < 5 || numberOfSquares > 100);

setBodyCSS();

for(let i=0; i<numberOfSquares**2; i++){
    cells[i] = document.createElement(`cell${i+1}`);
}

cells.forEach(createCells);

window.addEventListener('resize', setBodyCSS);