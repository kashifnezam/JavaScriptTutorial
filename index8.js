// forEach method

const myfunc = (b,a) => console.log(`Index is ${a}  = ${b}`);

let a = [10,2,3,22,7,4];
/*for (i in a){
  myfunc(i, a[i]);
}*/

//a.forEach(myfunc);
a.forEach(function myfn(a,b){
  console.log(a, "*", "2 = ",a*2);
});