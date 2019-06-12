const deNico = (key, m) => { 
    key = key.split("")
    m=m.split("")
    console.log(key)
   var encode =[]
   var count=0
   var count1=0;
   do
   {
     var tempArr =[]
     for(var i=0;i<key.length;i++,count1++)
     {
       if(m[count1]==undefined)
       {
         tempArr.push(" ");
       }
       else
       {
         tempArr.push(m[count1]);
       }
     }
     encode.push(tempArr)
     count++;
   }while(count1<m.length)
   console.log(encode)
   var sortKey = key.join("")
   key.sort()
   sortKey = sortKey.split("")
   console.log(key)
   var newKey = []
   for(i=0;i<key.length;i++)
   {
     newKey.push(key.indexOf(sortKey[i]))
   }
   var decode = []
   for(i=0;i<encode.length;i++)
   {
     var newM = []
     for(var j=0;j<encode[i].length;j++)
     {
       newM.push(encode[i][newKey[j]])
     }
     decode.push(newM)
   }
   decode =decode.reduce((a, b) => [...a, ...b], []);
   while(decode[decode.length-1]==' ')
  {
      decode.pop();
  }
   return decode.join("")
 }

// const deNico = (key, m) => {
//     let codder = key.split('').sort().map(e => key.indexOf(e));
//     console.log(codder)
//     m.split('').map((_,i)=>console.log([Math.floor(i/key.length)*key.length + codder.indexOf(i % key.length)]));
//     return m.split('').map((_, i) => m[Math.floor(i/key.length)*key.length + codder.indexOf(i % key.length)]).join('').replace(/\s+$/,'');
// }

 console.log(deNico("crazy","cseerntiofarmit on  "))  //Secret infomation
 console.log(deNico("abc", "abcd")) // abcd
 console.log((deNico("ba","2143658709" ))) // 0123456789
 console.log(deNico("a", "message"))//message 