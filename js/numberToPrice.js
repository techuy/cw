// var numberToPrice = function(number) {
//     const price = new Intl.NumberFormat('en-US',{
//         currency:'USD',
//         minimumFractionDigits:2
//     })
//     number = Math.round (number*100) / 100 
//     return price.format(number)
// }

var numberToPrice = function(number)
{
    if(!isNaN(number)){
    number = number.toFixed(3).toString().split("")
    number.pop()
   number =  number.join("")

    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    else
    {
        return -1
    }
}
console.log(numberToPrice(13253.5153))
console.log(numberToPrice('@'))

