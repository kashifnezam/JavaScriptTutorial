//// New Keyword----
/*function obj1(name, age){
  this.name = name;
  this.age = age;
}
const User = new obj1("Kashif", 34);
console.log(User);*/
// ---++++++×××××××××------+++++++---------
createUser.prototype.about = function () {
  return `This is ${this.firstName} ${this.LastName}, his/her age is ${this.Age}
  and Address is ${this.Address}`};
function createUser (firstName, LastName, Age, Address){
  console.log(arguments);
  this.firstName = firstName;
  this.LastName = LastName;
  this.Age = Age;
  this.Address = Address;
}

const User1 =new createUser("Kashif", "Nezam", 44, "India, Heroshima");
const User2 =new createUser("Hero", "Khan", 22, "India, Karnataka");
const User3 =new createUser("Dilshad", "Alam", 27, "India, Patna");
const User4 =new createUser("Aeries", "YH", 28, "India, Orissa");
const User5 =new createUser("Alex", "Jharkhandi", 32, "India, Jharkhand");
const User6 =new createUser("Vamp", "Khanam", 29, "India, Tezpur");
const User7 =new createUser("Arman", "Anwar", 30, "India, Delhi");
const User8=new createUser("Saif", "Hanif", 28, "India, Trichy");
const User9 =new createUser("Rahul", "Deshmukh", 19, "India, Allahabad");
const User10 =new createUser("Shweta","Tiwari", 17, "India, Punjab");

for(let i=1; i<=10; i++){
  var user = eval("User" + i );
  //console.log(user);
  console.log(user.about());
}

