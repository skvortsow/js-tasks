let isEven = num => num%2==0;
let arr = [20,10,4,5,3];
let newArr = [];
for (let i = 0; i < arr.length; i++){
    if (isEven(arr[i])==true){
        newArr.push(arr[i])
    }
}
console.log(arr);
console.log(newArr);

