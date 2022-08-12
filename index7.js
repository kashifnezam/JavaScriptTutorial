//call back function
myfunc2 = () => console.log("Happy Birthday");
myfunc = a => {
  console.log(a);
  a();
};
myfunc(myfunc2);