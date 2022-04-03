let isEven = num => num%2==0;
let arr = [20,10,4,5,3];
let newArr = [];

const fourthBtn = document.querySelector('#fourthTask')

for (let i = 0; i < arr.length; i++){
    if (isEven(arr[i])==true){
        newArr.push(arr[i])
    }
}

fourthBtn.addEventListener('click', function(){
    console.log(newArr);
});





