const container = document.createElement('div');
const style = document.createElement('style');
let color = '#000000';
let  mouseDown = false;

// adds controls container

const controls = document.createElement('div');
controls.classList.add('controls');
document.body.appendChild(controls);

// create grid slider

const slider = document.createElement('input');
slider.setAttribute('type','range');
slider.setAttribute('min','1');
slider.setAttribute('max','64');
slider.setAttribute('value','16');
slider.setAttribute('class','slider');
controls.appendChild(slider);

//create output for slider value

const output = document.createElement('output');
let sliderValue = document.querySelector('.slider').value;
output.setAttribute('id','sliderValue');
output.textContent = sliderValue;
controls.appendChild(output);

 oninput = function() {
    output.textContent = slider.value
}

slider.addEventListener('mouseup', () => {
    remove();
    num = document.querySelector('.slider').value;
    createGrid();
    colorDraw();
})

// create colorpicker
const colorPicker = document.createElement('input');
    colorPicker.setAttribute('type','color');
    colorPicker.setAttribute('id','colorPicker');
controls.appendChild(colorPicker);

colorPicker.addEventListener('input', () => {
    return color = colorPicker.value;
})

//create draw and erase button
const selectionContainer = document.createElement('div');
    selectionContainer.classList.add('selectionContainer');
controls.appendChild(selectionContainer)

const draw = document.createElement('input')
    draw.classList = 'button';
    draw.setAttribute('value','DRAW');
    draw.setAttribute('type','button');
    draw.setAttribute('id','draw');
selectionContainer.appendChild(draw);

const rainbow = document.createElement('input');
    rainbow.classList = 'button';
    rainbow.setAttribute('value','RAINBOW');
    rainbow.setAttribute('type','button');
    rainbow.setAttribute('id','rainbow');
selectionContainer.appendChild(rainbow);

const erase = document.createElement('input')
    erase.classList = 'button';
    erase.setAttribute('value','ERASE');
    erase.setAttribute('type','button');
    erase.setAttribute('id','erase');
selectionContainer.appendChild(erase);


//creates the container for the grid
container.classList.add('container');
    
document.body.appendChild(container);


//function for grid removal
function remove() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove()
    })
}


//function that creates the grid
function createGrid() {
    let drawValue = num;
    const grid = drawValue * drawValue;
    const perRow =  100/drawValue;
    for(i = 0; i < grid; i++){
        const square = document. createElement('div');
        square.classList.add('square');
        square.setAttribute('id',`${i}`)
        container.appendChild(square);
    }
    style.innerHTML = `
    .square {
        flex: 1 0 ${perRow}%
    }`;
    document.body.appendChild(style)
}

 // colors the clicked square
 function colorDraw(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let id = (square.id)
            document.getElementById(id).style.backgroundColor = `${color}`;
        })
    })
}   

// eraser function
function eraser(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let id = (square.id)
            document.getElementById(id).style.backgroundColor = 'white';
        })
    })
}

//rainbow color function
function colorRaibow(){
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let id = (square.id)
            let colorRandom = Math.floor(Math.random()*16777215).toString(16);
            document.getElementById(id).style.backgroundColor = '#' + colorRandom;
        })
    })
}


createGrid(num = 16);
colorDraw();


document.getElementById('erase').addEventListener('click', eraser);
document.getElementById('draw').addEventListener('click', colorDraw);
document.getElementById('rainbow').addEventListener('click', colorRaibow);
