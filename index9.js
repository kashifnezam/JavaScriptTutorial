// Map function

//const sqr = a => a*a;
const num = [1,4,7,9,33,12];
const numNew = num.map(function sqr (a){
  return a*a;
});
console.log(`num= ${numNew}`);
console.log(numNew);

//filter method
const numNew1 = num.filter( isOdd = (i) => i%2 != 0);
console.log(numNew1);

//Reduce method
const numNew2 = numNew.reduce((accumulator , currentValue)=> accumulator + currentValue);
console.log (numNew2);