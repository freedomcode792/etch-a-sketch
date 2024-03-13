console.log("Hello World!");

const board = document.querySelector("#board");

let cells = [];

let cellRows = [];



function fillBoard(boardDimensions = 16, cellSize = 2){
    for (let i = 0; i < boardDimensions; i++){
        const cellRow = document.createElement("div");

        cellRow.classList.add("row");

        for (let j = 0; j < boardDimensions; j++) {
            const cell = document.createElement("div");

            cell.classList.add("cell");

            cell.textContent = j+1;

            cellRow.appendChild(cell);

            cells.push(cell);
        }

        board.appendChild(cellRow);
        
    }
}

fillBoard();

console.log(cells);

let eraserIsOn = penIsOn = rainbowIsOn = false;

function setInstrumentsStatesToFalse(){
    eraserIsOn = penIsOn = rainbowIsOn = false;
    console.log(eraserIsOn);
    console.log(penIsOn);
    console.log(rainbowIsOn);
}

const refreshButton = document.querySelector("#refresh-button");

const eraserButton = document.querySelector("#eraser-button");
const penButton = document.querySelector("#black-pen-button");
const rainbowPenButton = document.querySelector("#rainbow-pen-button");

function enableAllControlButtons(){
    eraserButton.disabled = penButton.disabled = rainbowPenButton.disabled = false;

}

eraserButton.addEventListener("click", ()=>{
    setInstrumentsStatesToFalse();
    eraserIsOn = true;
    console.log(eraserIsOn);
    enableAllControlButtons();
    eraserButton.disabled = true;
});

penButton.addEventListener("click", ()=>{
    setInstrumentsStatesToFalse();
    penIsOn = true;
    console.log(penIsOn);
    enableAllControlButtons();
    penButton.disabled = true;
});

rainbowPenButton.addEventListener("click",()=>{
    setInstrumentsStatesToFalse();
    rainbowIsOn = true;
    console.log(rainbowIsOn);
    enableAllControlButtons();
    rainbowPenButton.disabled = true;
});

