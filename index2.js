// object (dictionary in other languages)

let obj1 = {name:"YMH", age:20, country: "India"};
obj1.email = "ymh@gmail.com"

//console.log(obj1);
//console.log(obj1.name);

// iteration
for (let i in obj1){
  console.log(`${i} : ${obj1[i]}`);
}