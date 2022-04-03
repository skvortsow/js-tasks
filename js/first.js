const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я", "А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "Я"]

let string2 = "";
const firstBtn = document.querySelector('#fisrtTask')

firstBtn.addEventListener('click', function(){
    let string1 = prompt('Введите строку:');
    
    let check = function(string){
        for(let i=0; i < string.length; i++){
            let current = string[i];
            for(let x=0; x < vowels.length; x++){
                if (current==vowels[x]){
                    string2 = string2 + string1[i];
                }
            }
        }
        return string2;
    };

    console.log(check(string1));
    string2 = '';
});



