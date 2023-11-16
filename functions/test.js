function myname(){
    console.log("s");
    console.log("t");
}

//myname()

// function numadd(n1,n2){ // (n1,n2) this is parameter
//     console.log(n1 + n2);

// }

function numadd(n1,n2){ // (n1,n2) this is parameter
    // let result= n1 + n2;
    // return result
    return n1 + n2

}

// numadd(2 ,7) // this is argument
 const result = numadd(3,4)

// console.log("result:", result);

function loginusermessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("stuti"))
console.log(loginusermessage());