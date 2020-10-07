//1. CHUNK

let arr = [1,2,3,4,5,6,7,8,9,10,11];
function chunk(arr, num) {
let finalArr = [];
  for(let element of arr){
    let last = finalArr[finalArr.length -1];
    if(!last || last.length === num){
      finalArr.push([element]);
    }else{
      last.push(element);
    }
  }
  return finalArr;
}

console.log(chunk(arr,2));


//2. FIND

let arrfind = [1,8,2,0,10,90];


function find(arr) {
    for(let i=0;i<=arr.length-1 ; i++){
      if(arr[i]>=10){
        let found = arr[i];
        return `Number is ${found}`;
      }
    }
    return "Number Not Found";
}
console.log(find(arrfind));

//3. FILTER

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
let filteredArr = function (arr) {
    let filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].active)
            filterArr.push(arr[i]);
    }
    return filterArr;
};
console.log(filteredArr(users));

//4. SUM

let arrSum = [1,8,2,0,10,90];
let total = 0;
function sum(arrSum,total) {
    for(let i=0;i<=arrSum.length-1;i++){
      total += arrSum[i];
    }
    return total;
}
console.log(sum(arrSum,total));

//5. REDUCE

let reduce = function (total, arr) {
    for (let i = 0; i < arr.length; i++) {
        total -= arr[i];
    }
    return total;
};
console.log(arr + " = " + reduce(0, arr));
