/// object in detail 
const data1 = {
  Name: "Herooo",
  Age: 20,
  //address : { houseNo : 2222},
  about : function (){
    //console.log(`I'm Ok and my name is ${data1.Name} , age = ${data1.Age}`);
    console.log(`I'm Ok and my name ${this.Name} , Age = ${this.Age}`);
    console.log(this);
  }
};
console.log(data1?.address);
console.log(data1.address?.houseNo);
data1?.about();
"use strict"
console.log(this);
