console.log("Hello World!");

const board = document.querySelector("#board");

let cells = [];

let cellRows = [];

function fillArrayWithRows(numberOfRows = 16){

}

function fillRowsWithCells(numberOfCell = 16){

}

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

/*
    Goal
        1.Create a board of cells. 
        2.User should be able to draw on it by filling 
        cells with color.
        3. User should be able to create a new board with
        different dimensions.
        4. User should be able to change color of the lines
        they draw.

    Plan
        1. Create the board using Javascript
            Each cell should:
                1) Have basic style attached (.cell)
                2) Have event listener attached for pen
        2. Create controls for changing the board:
            1) Refresh button 
                Erase all colors from the board. Keep the
                dimensions specified in the "dimensions form".
            2) Dimensions form (width and height of the new board)
                By default filled with width: 16, height: 16
                If a default value is change, the board created
                with "Refresh button" should use the specified
                values for it's dimensions.
            2) Eraser button
            3) Pen button
            4) Rainbow Pen button
            5) Change Color button

        Controls implementation
            1) Create a bunch of boolean variables each
                associated with a control button and
                reflecting it's state (on = true/false);
            2) Add a hover event listener to every cell.
                Add activity checks for every boolean
                variable. If a variable is true -> invoke
                the specified function changing the style
                of the cell.
*/