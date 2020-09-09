var num = -5;



function addFive(num) {

    num = num + 5;
    return num;

}
var result = addFive(10)
console.log(result);
var result = addFive(0)
console.log(result);
var result = addFive(-5)
console.log(result);


// EXPECTED INPUT AND OUTPUT IS GIVEN BELOW
// Input:
// addFive(5);
// addFive(0);
// addFive(-5);
// Output:
// 10
// 5
// 0
