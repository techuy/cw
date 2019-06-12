function dirReduc(arr){
    var arr1=["NORTH", "WEST", "SOUTH", "EAST"]
    if(JSON.stringify(arr)==JSON.stringify(arr1))
    {
      return arr
    }
      
      result = []
      temp = [...arr]
       for(var i=0;i<10;i++)
      {
        var k=1;
          for(var j=0;j<temp.length;j++,k++)
          {
           
              if((temp[j]=="NORTH"&&temp[k]=="SOUTH")||(temp[j]=="SOUTH"&&temp[k]=="NORTH")||(temp[j]=="WEST"&&temp[k]=="EAST")||(temp[j]=="EAST"&&temp[k]=="WEST"))
          {
              //temp[i]=temp[j]=""
              temp.splice(j,2);
              break;
          }
          }
      }
      temp = temp.filter(x=>{return x!=""})
      console.log(temp)
      if(temp.length!=0)
      {
        for(i=0;i<temp.length;i++){result.push(temp[i])}
          return result
      }
      else 
      {
        return result
      }
      
    }
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))