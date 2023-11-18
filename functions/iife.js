//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

(function chai(){
    console.log(`Db connected`);
})();

( (name) =>{
    console.log(`hello, my name is ${name}`);
})('stuti');