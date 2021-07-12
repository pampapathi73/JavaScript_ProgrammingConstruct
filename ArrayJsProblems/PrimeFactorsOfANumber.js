readline = require("readline-sync");
let input = readline.question("Enter the Number: ");
let flag=false;
let factorsArray = new Array();
console.log("Factors of the Given Number: ");

//logic to check for prime factors of a number with function amd for loop
function primeFactors(input) {
   for(let i = 2; i <= input; i++) {

       if( input % i == 0) {
           flag=true;
           factorsArray.push(i);
           input /= i;
       }
    }
    return factorsArray;
}

console.log(primeFactors(input).join(' , '));