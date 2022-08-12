// function shortcut and Arrow function

const isEven = function(num){
  if(num%2 == 0){
    return true;
  }
  return false;
};

console.log(isEven(56));

//ARROW FUNCTION
const isEven = (num) => {
  return num%2 == 0;
};
console.log(isEven(44));
console.log(isEven(43));

// more shortcut arrow function

const isOdd = num => num%2 != 0;
console.log(isOdd(47));

const firstString = (a) => a[0];
console.log(firstString("Kashif")); 
