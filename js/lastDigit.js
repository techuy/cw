function lastDigit(as){
    var num;
  while(as.length!=1)
  {
      var i=as.length-1
      num=Math.pow(as[i-1],as[i])
      console.log(as)
      as.pop();
      as.pop();
      as.push(num);
  }
  var sa = as.toString().split("").pop()
  return parseInt(sa)
}

console.log(lastDigit([3,4,5]))