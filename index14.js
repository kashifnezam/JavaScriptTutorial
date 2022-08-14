

/// arrow function takes "this keyword" from onstep upward....
const prof1 = {
  Name : "Kashif",
  Age : 20,
  About : () => console.log(`this is ${this.Name}, and Age is ${prof1.Age}`, this),
};
prof1.About();