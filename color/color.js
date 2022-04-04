let numberInput = document.querySelector('#number');
let colorInput = document.querySelector('#color');
const blockContainer = document.querySelector('#blocks');


numberInput.addEventListener('change', function(){
    const quantity = numberInput.value;
    let markup = '';

    for (let i = 0; i < quantity; i++){
        const block = document.createElement("div");
        block.classList.add('block');
        block.innerText = i + 1;
        markup += block.outerHTML;
    }

    blockContainer.innerHTML = markup;
});

let colorTheBlock = (block, color) => {
    block.style.backgroundColor = color;
}

let check = false;

colorInput.addEventListener('change', function(){
    const color = colorInput.value;
    const blocks = blockContainer.querySelectorAll('.block');

    check = !check;

    for (let i = 0; i < blocks.length; i++){

        blockNumber = i + 1;

        if (check){
            if (blockNumber % 2 !== 0){
                colorTheBlock(blocks[i], color);
                } else {
                    colorTheBlock(blocks[i], "#fff");
                }
        } else {
            if (blockNumber % 2 == 0){
                colorTheBlock(blocks[i], color);
                } else {
                    colorTheBlock(blocks[i], "#fff");
                }
        }
        
    }
});

