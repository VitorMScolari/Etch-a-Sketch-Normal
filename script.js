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

function gridSize(value) {

    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`

for(let i=0; i < (value * value); i++) {
    const divs = document.createElement('div');
    divs.classList.add('main');
    divs.addEventListener('mousemove', mainDraw)
    divs.addEventListener('mousedown', startDrawing)
    divs.addEventListener('mouseup', stopDrawing)
    container.appendChild(divs);
}

}

function mainDraw(e) {
    if (!painting) return;

    if (toggleRGB == false) {
        this.style.backgroundColor = 'white';
    } else if (toggleRGB == true) {
        this.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 360) {
            hue = 0;
         } else if (e.path[1].className == "active") {
           this.style.backgroundColor = 'black';
         }
    } 
    

}

function startDrawing(e) {
    painting = true;
    
    if (toggleRGB == false) {
        this.style.backgroundColor = 'white';
    } else if(toggleRGB == true) {
        this.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        hue++;
        if(hue >= 360) {
            hue = 0;
          } else if (e.path[1].className == "active") {
             this.style.backgroundColor = 'black';
          }
     }

}

function stopDrawing() {
    painting = false;
    
}

container.addEventListener('mouseleave', () => painting = false)


let hue = Math.floor(Math.random() * 10) + 1;

function toggleColor() {
    container.classList.remove('active');

    if (toggleRGB == false) {
        toggleRGB = true;
    } else {
        toggleRGB = false;
    }
}

function eraseGrid() {    
    container.classList.add('active');
}

rgbColor.addEventListener('click', toggleColor);

clear.addEventListener('click', reloadGrid);

eraser.addEventListener('click', eraseGrid);


window.onload = () => {
    gridSize(gridNumber)
}