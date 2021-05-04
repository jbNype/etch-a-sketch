/******************************************************************************* 
************************ The Odin Project: Etch-a-Sketch ***********************
********************************************************************************
***********************          by Justin Bauer          **********************
***********************          GitHub: jbNype           **********************
***********************     http://justinbauer.design     **********************
********************************************************************************/

const container = document.querySelector('.container');
const button = document.querySelector('button');

createGrid(16);

function createGrid(size) {
    for(let row = 0; row < size; row++){
        for(let column = 0; column < size; column++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.width = 600/size + 'px';
            grid.style.height = 600/size + 'px';
            container.append(grid);
        }    
    }
    randomColor();
}

button.addEventListener('click', () => {
    let grid = document.querySelectorAll('.grid');
    let gridArray = Array.from(grid);
    for(let i = 0; i < gridArray.length; i++) {
        gridArray[i].style.background = '#111111';
    };
    userGrid();
});

function userGrid() {
    let newSize = prompt('Enter a new size?', '');

    if (newSize != null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert('Enter a number between 4 and 64.');
            userGrid(); 
        } else {
            clearGrid();
            createGrid(newSize);
        }
    }
}

function clearGrid() {
    let gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function randomColor() {
    const squares = document.querySelectorAll('div');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function (e) {
            let randomR = (Math.floor(Math.random() * 256));
            let randomG = (Math.floor(Math.random() * 256));
            let randomB = (Math.floor(Math.random() * 256));
            e.target.style.background = `rgb(${randomR},${randomG},${randomB})`;
        });
    });
}