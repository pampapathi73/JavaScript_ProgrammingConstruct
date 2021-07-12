readline = require("readline-sync")

let day=readline.question("Enter the date :")
let month=readline.question("Enter the month :")
if (( (day <= 6 && month <= 20) && (month >=3 && day <= 20) && (day<31) ))
console.log("True");
else
        console.log("False");