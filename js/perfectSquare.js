function findNextSquare(sq)
{
    if (Number.isInteger(Math.sqrt(sq)))
    {
        return Math.pow(Math.sqrt(sq)+1,2)
    }
    else
    {
        return -1;
    }
}
console.log(findNextSquare(153))