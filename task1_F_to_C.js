function temperature (temp){
    const result = (temp * 1.8) + 32;
    return result;
}

const result = temperature(42);
console.log(result);