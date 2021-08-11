const container = document.querySelector('#container');
const grid = document.querySelector('#grid-number');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#erase');
const rgbColor = document.querySelector('#rgbColor');
const sliderText = document.querySelector('.sliderText');
const sliderDiv = document.querySelector('.sliderDiv');
const slider = document.querySelector('.slider');

let toggleRGB = false;
let toggleEraser = false;
let painting = false;
const gridNumber = 10;
let currentSize = gridNumber

grid.onmousemove = (e) => changeSliderText(e.target.value);
grid.onchange = (e) => changeSize(e.target.value);

function setCurrentSize(newSize) {
    currentSize = newSize
}

function changeSize(value) {
    setCurrentSize(value);
    changeSliderText(value)
    reloadGrid()
}

function reloadGrid() {
    container.innerHTML = '';
    gridSize(currentSize)
}

function changeSliderText(value) {
    sliderText.innerHTML = `Grid size: ${value} x ${value}`;
}


// let count = 0;

function gridSize(value) {

// for(let i=0; i < value; i++) {
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`
    // count++;
// }

// count--;

// const countTotal = (count*count);

for(let i=0; i < (value * value); i++) {
    const divs = document.createElement('div');
    divs.classList.add('main');
    divs.addEventListener('mousemove', mainDraw)
    divs.addEventListener('mousedown', startDrawing)
    divs.addEventListener('mouseup', stopDrawing)
    container.appendChild(divs);
}

}

// const main = Array.from(document.querySelectorAll('.main'));


function mainDraw() {
    if (!painting) return;

    if (toggleEraser == false && toggleRGB == false) {
        this.style.backgroundColor = 'white';
    } else if (toggleRGB == true) {
        this.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 360) {
            hue = 0;
         } else if (toggleEraser == true) {
            this.style.backgroundColor = 'black';
        }
    } 
    
    

}

function startDrawing() {
    painting = true;
    
    if (toggleEraser == false && toggleRGB == false) {
        this.style.backgroundColor = 'white';
    } else if(toggleRGB == true) {
        this.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 360) {
            hue = 0;
         } else if (toggleEraser == true) {
            this.style.backgroundColor = 'black';
         }
    }

}

function stopDrawing() {
    painting = false;
    
}


// main.forEach(main => main.addEventListener('mousemove', mainDraw))
// main.forEach(main => main.addEventListener('mousedown', startDrawing))
// main.forEach(main => main.addEventListener('mouseup', stopDrawing))
container.addEventListener('mouseleave', () => painting = false)


let hue = Math.floor(Math.random() * 10) + 1;

function toggleColor() {
    toggleEraser = false;

    if (toggleRGB == false) {
        toggleRGB = true;
    } else {
        toggleRGB = false;
    }
}


rgbColor.addEventListener('click', toggleColor);


clear.addEventListener('click', reloadGrid);


function eraseGrid() {    
    if (toggleEraser == false) {
        toggleEraser = true;
    } else if (toggleEraser == true) {
        toggleEraser = false;
    }
}

eraser.addEventListener('click', eraseGrid);


window.onload = () => {
    gridSize(gridNumber)
}