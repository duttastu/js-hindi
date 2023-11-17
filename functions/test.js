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
    if(!username ){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("stuti"))
// console.log(loginusermessage());

function calculatecartprice(val3,val4,...num){ //in this three dots are rest operator
    return num
}

// console.log(calculatecartprice(100,200,3000,8510));

const user1 ={
    name1:"Stuti",
    price:144

}

function newObject(anyObject){
    console.log(`the name of person is ${anyObject.name1} and the price is ${anyObject.price}`);
}

newObject(user1)
