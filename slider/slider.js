const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('#slider');
let bias = 0;

left.addEventListener('click', function() {
    if (bias == 0){
        console.log('крайняя левая точка');
        left.style.color = 'gray';
    } else {
        right.style.color = 'black';
        bias = bias - 100;
        slider.style.right = bias + 'px';
    }
    
})

right.addEventListener('click', function() {
    if (bias == 500){
        console.log('крайняя правая точка');
        right.style.color = 'gray';
    } else {
        left.style.color = 'black';
        bias = bias + 100;
        slider.style.right = bias + 'px';
    }
    
})