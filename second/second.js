const workers = [
    {"name":"Петя","salary":500},
    {"name":"Вася","salary":1300},
    {"name":"Дима","salary":800},
    {"name":"Женя","salary":2000},
    {"name":"Саша","salary":10000},
    {"name":"Серёжа","salary":1000}
];

function check (arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].salary > 1000){
            newArr.push(arr[i].name);
        }
    }
    return newArr;
}

console.log(check(workers))