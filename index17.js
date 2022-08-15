/// classs method

class Animal{
  constructor(name, age){
    console.log("cons called");
    this.name = name;
    this.age = age;
  }
  showDetail(){
    console.log(this.name);
    console.log(this.age);
    
  }
}
Animal.name = "CAT";
Animal.age = "12";
const cat = new Animal("Cat" , 22);

cat.showDetail();
console.log(cat);
