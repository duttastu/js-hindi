const user ={
    uname : "Stuti",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.uname}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.uname ="dutta"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let uname = "stu"
//     console.log(this.uname);
// }

// one()

// const one= function(){
//     let uname ="stuti"
//     console.log(this.uname);
// }

// one()


const one= ()=>{
    let uname ="stuti"
    console.log(this);
}

// one()

// const addtwo=(n1,n2) => {
//     return n1+n2
// }
// console.log(addtwo(2,4));

// const addtwo=(n1,n2) =>  n1+n2

// console.log(addtwo(2,4));
// if we use curly braces we have to write return keyword
//if we don't use curly braces we have to write parenthesis
// const addtwo=(n1,n2) => (n1+n2)
const addtwo = (n1,n2) => ({uname:"stuti"})
console.log(addtwo(2,4));
