
function getOpposite(num) {
     if(Number && num !==0)
 {
   var a = num * -1;
    return a;
 }
 else if(num===0){
     return 0;
 }
 else if (!Number){
     return -1;
 }

}

var result = getOpposite(5)
console.log(result);
var result = getOpposite(-5)
console.log(result);
var result = getOpposite(0)
console.log(result);
var result = getOpposite("5a")
console.log(result);
