# etch-a-sketch
Simple javascript implementation of etch-a-sketch board on a webpage


# Goal
        1.Create a board of cells. 
        2.User should be able to draw on it by filling 
        cells with color.
        3. User should be able to create a new board with
        different dimensions.
        4. User should be able to change color of the lines
        they draw.

# Plan
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


# Refresh & Resize Implementation
1. Create a button with an event listener invoking:
    1) removeBoardFunction -> to remove the existing board
    2) fillBoardFunction -> to create a new board
        - this functions should prompt the user for the dimensions of the new board in cells per side.
        - the dimensions shouldn't be greater than
        100x100 cells
        - the new grid should be generated in the same total space as the previous grid. This will require: 
            1) getting the dimensions of the space reserved for the board
            2) calculating the size of cells and rows
            based on the space reserved for the board.
            3) Integrating the new functionality into
            the existing code.


# Pen, eraser, rainbow pen implementation
        [APPROACH 1]
            1) Create a bunch of boolean variables each
                associated with a control button and
                reflecting it's state (on = true/false);
            2) Attach a hover event listener to each    control button. All these listeners will do is changing the status of boolean values to "true" and false.
            2) Add a hover event listener to every cell.
                Inside of the listener, add activity checks for every boolean variable. If a variable is true -> invoke
                the specified function changing the style
                of the cell.


             

            

