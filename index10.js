const num = [2,8,911,33,227,7,55,6];
// sorting with increasing number 
console.log(num.sort((a,b) => a-b));
//to dublicate list
const num1 = num.slice(3);
console.log(num1);
//find method
const users = [
  {userId : 1, name: "YMH"},
  {userId : 2, name: "Shama"},
  {userId : 3, name: "Yahoo"},
  {userId : 4, name: "Sheela"}
  ];
  
const nUsers =users.find((i) => i.userId == 4);
console.log(nUsers);