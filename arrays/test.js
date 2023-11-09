//arrays

//const myArr1 =[0,2,3,4,5,6,7]

const myarr = new Array(1,2,3,4,5,6,7,8)
//myarr.push(55)
//myarr.unshift(8)
//myarr.shift(8)
// console.log(myarr.includes(7));
// console.log(myarr.indexOf(6));
// const newarr = myarr.join()
// console.log(myarr);
// console.log(newarr);


//////////////slice , splice
console.log(myarr);
console.log("A ",myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log("c ",myarr);
console.log(myn2);