function CountAnimals(tur,horse,pigs) {

    sum = (tur *2) + (horse * 4) + (pigs * 4);

    return sum;
}

var legs = CountAnimals(2,3,5)
console.log(legs);
var legs = CountAnimals(1,2,3)
console.log(legs);
var legs = CountAnimals(5,2,8)
console.log(legs);
