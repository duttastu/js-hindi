// if
// const isUSerLoggedin = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less tha 50");
// }else{
//     console.log("temperature is greater tha 50");
// }
// console.log("executed");

//<,>,<=,>=,==,===,!=,!==

// const score = 200

// if (score > 100) {
//     const power="fly"
//     console.log(`user power :${power} `); 
// }

// const balance = 1000
// // if(balance > 500) console.log("test");
// if (balance < 500){
//     console.log("less than");
// }else if(balance <750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }
const UserLoggedin = true
const debitCard = true
const loggedinfromgoogle =false
const loggedinfromemail =true

if(UserLoggedin && debitCard){
    console.log("Allow to buy course");
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}