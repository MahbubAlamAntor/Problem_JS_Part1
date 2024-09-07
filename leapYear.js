function leapYear (year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const finalYear = leapYear(2052);
console.log(finalYear)

function isLeapYear (leap){
    if(leap % 100 !== 0 && leap % 4 ===0){
        return true
    }
    else if (leap % 100 === 0 && leap % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}

const finalLeap = isLeapYear(2045);
const finalLeap1 = isLeapYear(2055);
const finalLeap2 = isLeapYear(2062);
const finalLeap3 = isLeapYear(2072);
console.log(finalLeap, finalLeap1, finalLeap2, finalLeap3);