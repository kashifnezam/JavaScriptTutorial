//----++++++++---MAP------++++++
const users = new Map();
users.set("Name", "Kamran");
users.set("age", 18);
users.set("salary", null);
console.log(users);
console.log(users.keys());
for(p of users.keys()){
  console.log(p);
}