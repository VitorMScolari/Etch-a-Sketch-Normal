const button = document.querySelector('.button');
const container = document.querySelector('#container');

let painting = false;

let count = 0;

for(let i=0; i < 10; i++) {
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
    
    const canvas = document.createElement('canvas');
    canvas.setAttribute('class', 'main' + [i]);
    divs.appendChild(canvas)
    
}

const containerHeight = container.getBoundingClientRect().height;
const containerWidth = container.getBoundingClientRect().width;

const canvasHeight = containerHeight / (count + 1);
const canvasWidth = containerWidth / (count + 1);


for(let i=0; i < countTotal; i++) {

    let canvas = document.querySelector('.main' + [i]);
    
    canvas.setAttribute("style",`height: ${canvasHeight}px; width: ${canvasWidth}px;`)

}



const main = Array.from(document.querySelectorAll('.main'));


function mainDraw(e) {
    
    if (!painting) return;

    for(let i=0; i < countTotal; i++) {

    let mainBoard = document.querySelector('.main' + [i]);

    let ctx = mainBoard.getContext('2d');

    
    ctx.lineWidth = 5;
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'green';


    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    }

}

function startDrawing() {
    painting = true;
}

function stopDrawing(e) {
    painting = false;
    
    for(let i=0; i <= 10; i++) {

    let mainBoard = document.querySelector('.main' + [i]);
    let ctx = mainBoard.getContext('2d');

     ctx.beginPath();

    }
}


main.forEach(main => main.addEventListener('mousemove', mainDraw))
main.forEach(main => main.addEventListener('mousedown', startDrawing))
main.forEach(main => main.addEventListener('mouseup', stopDrawing))












/*
function buttonPop {
    
}
*/

/*
button.addEventListener('click', gridNumbers);
*/

