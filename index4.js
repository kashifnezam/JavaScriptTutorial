// Function


/*function isEven(num){
  if(num%2 == 0){
    return true;
  }
  else{
    return false;
  }
}
console.log(isEven(435));
// shorter one step
function isEven(num){
  return num%2 == 0;
}
console.log(isEven("555"));
console.log(isEven(422));
*/
// taking arrays and finding its index



function indexArray(a,b){
  for(i in a){
    if (a[i] == b){
      return `Present, index is ${i}`;
    }
  }
  return "Not present";
}
const k = ["Hero", "mera", "tera", 22,33];
console.log(indexArray(k,"33"));

