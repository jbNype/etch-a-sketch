const container = document.querySelector('.container');

// create 16x16 grid
function createGrid(size) {
    
    for(let row = 0; row < size; row++){
        for(let column = 0; column < size; column++) {
            // create divs using createElement.
            let grid = document.createElement('div');
            grid.classList.add('grid');
            // set height and width for new grid divs
            grid.style.width = 500/size + 'px';
            grid.style.height = 500/size + 'px';
            // appendChild divs to '.container' div
            container.append(grid);
        }
        
    }
}

// When mouse hovers over grid squres do the following
    // add event listners to divs for mouse hover
    // change colour of hover grid  
        // add new class with CSS attached, or new background-color

// add button to reset grid
// event listener for 'click'
// run 'reset' function, clearing all hover effects by reseting CSS background color to white
// prompt allows user to choose grid siz (eg. 64x64) -- ma grid size 100
    // if user input is less than 100, then create new grid
    // else ask for new number below 100

// instead of black and white, ceate random RGB generator for grid
    // (Math.random(Math.floor) * 10) for each specific number in RGB fo each hover
    // after each pass the grid squre increases 10% to black
        // 10 passes is equal to solid black
