// const tinderuser = new Object()   // this is singleton object

const tinderuser ={}

tinderuser.id ="123444sef"
tinderuser.name ="Stuti"

//console.log(tinderuser);

const regularuser = {
    email :"sd@gmail.com",
    fullname: {
        fname: "stuti",
        lname: "dutta"
    }
}
// console.log(regularuser);

const obj1 ={1: "a", 2: "b"}
const obj2= {3: "c", 4:"d"}
const obj4= {5: "e", 6:"f"}
// const obj3= Object.assign({},obj1,obj2 ,obj4)  //{} is retur0ns target object
const obj3={...obj1,...obj4}
// // console.log(obj3);
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

const course ={
    coursename: "js in hindi",
    price:"222",
    instructor: "hitesh"
}

const {instructor}= course
console.log(instructor); 

