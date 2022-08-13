const num = [2,8,911,33,227,7,55,6];
// sorting with increasing number 
console.log(num.sort((a,b) => a-b));
//to dublicate list
const num1 = num.slice(3);
console.log(num1);
//find method
const users = [
  {userId : 1, name: "YMH", salary: 12000},
  {userId : 2, name: "Shama",salary: 12000},
  {userId : 3, name: "Yahoo",salary: 12000},
  {userId : 4, name: "Sheela",salary: 12000},
  {userId : 5, name: "Shea",salary: 8000},
  ];
  
const nUsers =users.find((i) => i.userId == 4);
//--+++EveryMethod
console.log(users.every(user => user.salary > 1000));

// ----++++SomeMethod
// it is used to atleast one matched result
console.log(users.some(user => user.name == "Yahoo"));
