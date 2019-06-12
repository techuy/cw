function youAreACube (value){
    var number = Math.cbrt(value);
    return natural(number);
}
function natural (number)
    {
        return ((number>=0.0) && (Math.floor(number) === number) && (number != Infinity));
    }
console.log(youAreACube(2))