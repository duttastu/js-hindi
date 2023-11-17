let a=200  //global scope
if(true){
    let a =10
    const b=20
    var c = 30
    console.log("inner: ", a);

}// variables declared inside {} cannot be accessed from outside the block is called block scope
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
console.log(a);
// console.log(typeof b);
// console.log( c);
 