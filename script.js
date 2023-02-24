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
slider.setAttribute('max','100');
slider.setAttribute('value','16');
slider.setAttribute('class','slider');
controls.appendChild(slider);

//create output for slider value

const output = document.createElement('output');
let sliderValue = document.querySelector('.slider').value;
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

createGrid(num = 16)
colorDraw()
