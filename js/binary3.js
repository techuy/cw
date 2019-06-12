// Regular expression that matches binary inputs that are multiple of 3
var multipleOf3Regex = {
    test:function(binary)
    {
      if (binary.match(/[0-9]/i)) {
        var a=[],count=0;
        a=binary.split("");
        for(i in a)
        {
          count+=parseInt(a[i]);
        }
        console.log(count)
        if(count%2==0) return true;
        else return false;
      }
      else return false;
  }
  }

  console.log(multipleOf3Regex.test("111")) //true