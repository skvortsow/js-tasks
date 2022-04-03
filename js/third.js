
const thirdBtn = document.querySelector('#thirdTask')


thirdBtn.addEventListener('click', function(){
    let string1 = prompt('Введите адрес файла:');
    console.log(isHtml(string1))
});

function isHtml(string){
    let check;
    let newString = '';
    let x = 1;
    for (let i = 0; i < 5; i++){
        newString = newString + string[string.length - x];
        x++;
    }
    if(newString == "lmth."){
        check = true;
    } else{
        check = false;
    }
    return check;
}

