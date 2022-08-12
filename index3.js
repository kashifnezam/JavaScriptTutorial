/// object distructing---

const data1 = {
  name : "Kamran",
  age: 20,
  gender : "Male",
};

/*for (let i in data1){
  console.log(i);
}*/

const data2 = {
  ...data1,
  ..."Kamran",
};
console.log(data2);

// List with Object

const data3 = [
  { Name : "Kashif",
   Age : 20,
   year : 2022,
  },
  {
    Name: "Aeries",
    Age : "Infinite",
    year: 2050,
  }
 ];
const [{first : Name}, second] = data3;
console.log(data3);




