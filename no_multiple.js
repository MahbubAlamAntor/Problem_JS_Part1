const array = ['abul', 'kabul', 'sabul', 'dabul', 'makbul','abul', 'kabu', 'akbul', 'kabul'];

function isArray(arry){
    let final = [];
    for (const newarry of arry){
        if(final.includes(newarry) === false){
            final.push(newarry)
        }
    }
    return final;
}

const result = isArray(array);
console.log(result);