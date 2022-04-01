let vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я", "А", "Е", "Ё", "И", "О", "У", "Ы", "Э", "Ю", "Я"]
let string1 = prompt('Введите строку:');
let string2 = "";
function check(string){
    for(let i=0; i < string.length; i++){
        let current = string[i];
        console.log(current)
        for(let x=0; x < vowels.length; x++){
            if (current==vowels[x]){
                string2 = string2 + string1[i];
            }
        }
    }
    return string2;
}


console.log(check(string1));