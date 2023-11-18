// let a=200  //global scope
// if(true){
//     let a =10
//     const b=20
//     var c = 30
//     console.log("inner: ", a);

// }// variables declared inside {} cannot be accessed from outside the block is called block scope
 
// console.log(a);
// console.log(typeof b);
// console.log( c);
function one(){
    const username ="stuti"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

one()