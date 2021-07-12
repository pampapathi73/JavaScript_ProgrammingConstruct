let i = 0;
let numb = 0;
let randomNumbArr = new Array();


for(i=0; i<10; i++) {
   numb = Math.floor(Math.random() * 900 + 100);
   console.log(numb);
   randomNumbArr.push(numb);
}

console.log(randomNumbArr);

let sortArr = randomNumbArr.sort();
console.log(sortArr);

console.log("Second Smallest Number in the Array: "+sortArr[1]);
console.log("Second Largest Number in the Array: "+sortArr[8]);