const container = document.querySelector('#container');
const grid = document.querySelector('#grid-number');
const clear = document.querySelector('#clear');
const eraser = document.querySelector('#eraser');
const RGB = document.querySelector('#RGB');

let painting = false;

let count = 0;

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


function mainDraw(e) {
    if (!painting) return;
    
    this.style.backgroundColor = 'white';
}

function startDrawing(e) {
    painting = true;
    this.style.backgroundColor = 'white';

}

function stopDrawing() {
    painting = false;
    
}


function mouseOut() {
        painting = false;

}


main.forEach(main => main.addEventListener('mousemove', mainDraw))
main.forEach(main => main.addEventListener('mousedown', startDrawing))
main.forEach(main => main.addEventListener('mouseup', stopDrawing))
container.addEventListener('mouseleave', () => painting = false)












/*
function buttonPop {
    
}
*/

/*
button.addEventListener('click', gridNumbers);
*/

