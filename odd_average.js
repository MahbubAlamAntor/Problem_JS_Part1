function isOdd (numbers){
    const odds = [];
    for (const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count)
    const avg = sum / count;
    return avg;
    
}

const numbers = [54,7,5,78,56,7];
const avg = isOdd(numbers);
console.log("Number Is: ", avg)