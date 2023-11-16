 // objects
const mySym ="myKey1"
 const abc =   {
    name :"Stuti",
    age : 23,
    email : "stuti123@gmail.com",
    [mySym] : "mykey1" //symbol always write in objects
 }

 console.log(abc.name);
 abc.name ="Stuti Dutta"
 Object.freeze(abc)
//  console.log(abc);
 console.log(abc[mySym]);