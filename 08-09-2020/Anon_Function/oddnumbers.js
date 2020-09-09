arr = [1,2,3,4,5,6,7];


(function(arr){
  var a = "";
  for(i=0;i<arr.length;i++){
    if(arr[i]%2===1){
      a = a + arr[i] + " ";
    }
  }
  console.log(a.trim());
})([1,2,3,4,5,6,7]);
