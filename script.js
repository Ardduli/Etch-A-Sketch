const container = document.createElement('div');
const num = 16;
const grid = num * num;
const style = document.createElement('style');
const perRow =  100/num.toFixed(1)

container.classList.add('container');
    
document.body.appendChild(container);

for(i = 0; i < grid; i++){
    const square = document. createElement('div');
    square.classList.add('square');
    square.classList.add('blank');
    square.setAttribute('id',`${i}`)
    container.appendChild(square);
    console.log(i)
}

style.innerHTML = `
    .square {
        flex: 1 0 ${perRow}%
    }`;
document.body.appendChild(style);