/*"use strict";
we can use it to declare variable strictly
console.log("Hello World");
k = "ymh";
console.log(k);
// differce b/w var let const

var name = "kuch";
console.log(name);
var name = "nhy"; // here we can redefine the variable
console.log(name);

let age = 20;
//let age = 40; it will give error we can't redefine the variable
age = 50; // but can reassign 
console.log(age);
const add = "India" //const must initialise, cant redefine and can't reassign 
console.log(add);

let a = 24;
let b= 55;
if(a>=b){
  console.log("a greater than or equal to b");
}
else{
  console.log("b greater than a");
}

##Terniary operator

let age = 2;
let k = age>=18 ? "You can vote " : "You are ineligible to vote";
console.log(k);

//Guess a number

let b = (Math.floor(Math.random()*100));
let count = 1;
var msg = " ";
while (count<=10){
  let a = +(prompt(this.msg+ " Guess any number: " ));
  console.log(a);
  count+=1;
if (a==b){
  console.log("congo");
  msg = "congratulations...";
  exit;
}
else if(a>b){
  console.log("Greater number");
  msg = "Greater Number, ";
}
else{
  console.log("Smaller number");
  msg = "Smaller number, ";
}
}*/

// Arrays---
let mixed = ["apple", "pine", 23, null, undefined];
mixed[2] = "ymh";
console.log(mixed);

mixed2 = [...mixed, "Guava",66,"ymh"];
mixed3 = ["Guava",66,"ymh", ...mixed];
console.log(mixed2);
