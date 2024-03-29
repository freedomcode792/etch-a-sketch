console.log("Hello World!");

const board = document.querySelector("#board");

let cells = [];

let cellRows = [];

function addEventListenerToCell(cell){
    cell.addEventListener("mouseenter",()=>{
        if(penIsOn){
            cell.style.cssText = "background-color: black;";
        }

        if(eraserIsOn){
            cell.style.cssText = "background-color: white;";
        }

        if(rainbowIsOn){
            cell.style.cssText = "background-color: " + getRandomColor();
        }
        if(gradualPenIsOn){
            lightness-=10;
            cell.style.cssText = `background-color: hsl(0, 0%, ${lightness}%)`;
        }
    });
}

function getRandomNumber(min, max){
    rand = (Math.round((Math.random()*(max-min)))+min);
    return rand;
}

function getRandomColor(){
    const randomNumber = getRandomNumber(1, 7);

    switch (randomNumber) {
        case 1: 
            return "red";

        case 2: 
            return "orange";

        case 3: 
            return "yellow";

        case 4: 
            return "green";
        
        case 5:
            return "blue";

        case 6: 
            return "indigo";

        case 7:
            return "violet";
    }
}



function getBoardDimensionInPx(){
    const rootStyle = getComputedStyle(document.documentElement);
    const boardDimension = rootStyle.getPropertyValue("--board-dimension");
    return +(boardDimension.slice(0, boardDimension.length-2));
}

function changeCellDimension(newCellDimension){
    document.documentElement.style.setProperty('--cell-dimension', `${newCellDimension}px`);
}

function fillBoard(boardDimensionInCells = 32){

    const boardDimensionInPx = getBoardDimensionInPx();
    console.log("boardDimensionInPx: ", boardDimensionInPx);

    const cellDimension = boardDimensionInPx/boardDimensionInCells;
    console.log("cellDimension: ", cellDimension);

    changeCellDimension(cellDimension);

    for (let i = 0; i < boardDimensionInCells; i++){
        const cellRow = document.createElement("div");

        cellRow.classList.add("row");

        for (let j = 0; j < boardDimensionInCells; j++) {
            const cell = document.createElement("div");

            cell.classList.add("cell");

            

            //cell.textContent = j+1;

            cellRow.appendChild(cell);

            addEventListenerToCell(cell);

            cells.push(cell);
        }

        board.appendChild(cellRow);
        
    }
}

/* fillBoard(){
    1. get board size in pixels
    2. scale the cell size according to the board size
    (board size)/number of cells
    3. Apply the scale to the newly created cells
    4. fill the board with cells

    1. const boardDimension = getBoardDimension();
    2. const cellDimension = boardDimension/numberOfCells
    3. 
} */

fillBoard(16);

let eraserIsOn = penIsOn = rainbowIsOn = gradualPenIsOn = false;

function setInstrumentsStatesToFalse(){
    eraserIsOn = penIsOn = rainbowIsOn = gradualPenIsOn = false;
}

const refreshButton = document.querySelector("#refresh-button");

const eraserButton = document.querySelector("#eraser-button");
const penButton = document.querySelector("#black-pen-button");
const rainbowPenButton = document.querySelector("#rainbow-pen-button");
const gradualPenButton = document.querySelector("#gradual-pen-button");


function enableAllControlButtons(){
    eraserButton.disabled = penButton.disabled = rainbowPenButton.disabled = gradualPenButton.disabled = false;

}

function removeBoard(){
    board.innerHTML = "";
}

function isNumericString(str) {
    return /^\d+$/.test(str);
  }

  function getUserInput(input=+prompt("Enter board side length in cells")){
    
    return input ? (input<=100 ? input : getUserInput(+prompt("No more than 100 cells is allowed"))) : getUserInput();
  }

refreshButton.addEventListener("click", ()=>{
    removeBoard();
    fillBoard(getUserInput());
    lightness = 100;

});

eraserButton.addEventListener("click", ()=>{
    setInstrumentsStatesToFalse();
    eraserIsOn = true;
    enableAllControlButtons();
    eraserButton.disabled = true;
});

penButton.addEventListener("click", ()=>{
    setInstrumentsStatesToFalse();
    penIsOn = true;
    enableAllControlButtons();
    penButton.disabled = true;
});

rainbowPenButton.addEventListener("click",()=>{
    setInstrumentsStatesToFalse();
    rainbowIsOn = true;
    enableAllControlButtons();
    rainbowPenButton.disabled = true;
});

let lightness;
gradualPenButton.addEventListener("click",()=>{
    setInstrumentsStatesToFalse();
    gradualPenIsOn = true;
    enableAllControlButtons();
    gradualPenButton.disabled = true;
    lightness = 100;
});

