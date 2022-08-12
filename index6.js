const sumAll = (...a) => {
  let sum = 0;
  for(i of a){
    sum += i;
   }
  return `Sum of all number is ${sum}`;
}

console.log(sumAll(1,2,3,4,5,7,9,10,16,77,99100,677));