// __proto__or [[prototype]]
//note: prototype is different (whithout [])

const obj1 = {
  Name: "Kashif",
  Age : 22,
  About : function () {
    console.log(`this is ${this.Name}, and Age is ${this.Age}`)}
};
const obj3 = Object.create(obj1);
obj3.Age = 44;
const obj2 = {
  Name: "Kamran",
  Age : 22,
  /*About : function () {
    console.log(`this is ${this.Name}, and Age is ${this.Age}`)},*/
};

console.log(obj3.__proto__)
console.log(obj3)
//obj3.About();
///////////--+++ Proto property use------
function obj4 (){
  console.log("Hello");
}
console.log(obj1.About.prototype);
