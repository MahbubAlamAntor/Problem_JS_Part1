function arry (newArray){
    let find = 5;
    let count = 0;
    for (let number of newArray){
        if(number === find){
            count = count +1;
        }
    }
    return count;
}

const numbers = [45,87,54,54,5,69,5,5];
const result = arry(numbers);
console.log(result)


const max = Math.max(45,47,45,25,45);
console.log(max)