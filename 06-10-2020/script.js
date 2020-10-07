//1. CHUNK
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function chunk(arr, num) {
    var finalArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        var last = finalArr[finalArr.length - 1];
        if (!last || last.length === num) {
            finalArr.push([element]);
        }
        else {
            last.push(element);
        }
    }
    return finalArr;
}
console.log(chunk(arr, 2));
//2. FIND
var arrfind = [1, 8, 2, 0, 10, 90];
function find(arr) {
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= 10) {
            var found = arr[i];
            return "Number is " + found;
        }
    }
    return "Number Not Found";
}
console.log(find(arrfind));
//3. FILTER
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
var filteredArr = function (arr) {
    var filterArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].active)
            filterArr.push(arr[i]);
    }
    return filterArr;
};
console.log(filteredArr(users));
//4. SUM
var arrSum = [1, 8, 2, 0, 10, 90];
var total = 0;
function sum(arrSum, total) {
    for (var i = 0; i <= arrSum.length - 1; i++) {
        total += arrSum[i];
    }
    return total;
}
console.log(sum(arrSum, total));
//5. REDUCE
//Reduce function
var reduce = function (total, arr) {
    for (var i = 0; i < arr.length; i++) {
        total -= arr[i];
    }
    return total;
};
console.log(arr + " = " + reduce(0, arr));
