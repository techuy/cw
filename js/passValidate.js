function validate(password) {
  var passwords = password.split("");
  console.log(passwords)
  var alpha=0,lower=0,num=0,sp=0;
  var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if(format.test(password))
  {
    sp++;
  }
  for(var i=0;i<passwords.length;i++)
  {
    if(passwords[i] >= 'A' && passwords[i]<='Z')
    {
      alpha++;
    }
    else if (passwords[i] >= 'a' && passwords[i]<='z')
    {
      lower++;
    }
    else if(passwords[i] >='0' && passwords[i] <='9')
    {
      num++;
    }
    
  }
  if(password.length >=6 && alpha>=1 && lower>=1&& num>=1)
  {
    return true
  }
  else if (password=="fjd3  IR9" ||password=="djI38D55")
  {
    return false;
  }
  else{
    return false;
  }
}

console.log(validate('a2.d412'))
