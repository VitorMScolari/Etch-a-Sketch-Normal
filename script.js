const container = document.querySelector('#container');
const grid = document.querySelector('#grid-number');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#erase');
const rgbColor = document.querySelector('#rgbColor');
const sliderText = document.querySelector('.sliderText');
const sliderDiv = document.querySelector('.sliderDiv');


let toggleRGB = false;
let toggleEraser = false;
let painting = false;

let count = 0;



function changeSliderText() {
    sliderDiv.innerHTML = `${input[value]} x ${value}`;
}

for(let i=0; i < 20; i++) {
    container.style.gridTemplateColumns = `repeat(${i}, 1fr)`
    container.style.gridTemplateRows = `repeat(${i}, 1fr)`
    count++;
}

count--;

const countTotal = (count*count);


for(let i=0; i < countTotal; i++) {
    const divs = document.createElement('div');
    divs.classList.add('main');
    container.appendChild(divs);

}



const main = Array.from(document.querySelectorAll('.main'));


function mainDraw() {
    if (!painting) return;

    this.style.backgroundColor = 'white';

    if(toggleRGB == true) {
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
    this.style.backgroundColor = 'white';

    if(toggleRGB == true) {
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


main.forEach(main => main.addEventListener('mousemove', mainDraw))
main.forEach(main => main.addEventListener('mousedown', startDrawing))
main.forEach(main => main.addEventListener('mouseup', stopDrawing))
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


function cleanGrid() {
    main.forEach(main => main.style.backgroundColor = null);
}

clear.addEventListener('click', cleanGrid);


function eraseGrid() {
    if (toggleEraser == false) {
        toggleEraser = true;
    } else {
        toggleEraser = false;
    }
}

eraser.addEventListener('click', eraseGrid);