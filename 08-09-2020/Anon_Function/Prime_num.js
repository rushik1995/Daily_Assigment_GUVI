var a = function(arr){
  var b = "";
  for(i=0;i<arr.length;i++)
  {
    if (arr[i]===1)
    {

    }
    else if(arr[i] === 2)
    {
b = b + arr[i];+ " ";
    }
    else{
      for(j=1;j<arr[i];j++)
    {
    if(arr[i]%j===0)
    {

    }
  }
}
  b = b + arr[i];+ " ";
}
console.log(b);
}


a(([5,53,11,66,23]));
