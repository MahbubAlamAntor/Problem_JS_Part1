// function heightS (inch){
//     const newHeight = inch / 12;
//     return newHeight;
// }
// const mahbubHeight = heightS(80);
// console.log(mahbubHeight)



// function heightS (inch){
//     const newHeight = inch / 12
//     const heightFaction = parseInt(newHeight)
//     const heightRemenning = inch % 12;
//     const result = heightFaction + " Ft " + heightRemenning + " Inch "
//     return result;
// }

// const heightInch = heightS (70);
// console.log(heightInch)



function kmToMile (km){
    const result = km * 0.621371
    return result;
}
const result = kmToMile(45);
console.log(result)

function mileToKm (mile){
    const result2 = mile * 1.60934;
    return result2;
}
const result2 = mileToKm(45);
console.log(result2)