// const promiseOne= new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls.cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resloved");
// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Stuti",email:"duttastuti2k@gmail.com"})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
// })

// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"Stuti",password:"123"})
//         }else{
//             reject('Error:Something went wromg')
//         }
//     },1000)
// })
// promisefour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejected"))

// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"JAvascript",password:"123"})
//         }else{
//             reject('Error:Something went wromg')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{
//     const response=await promisefive
//     console.log(response);
// } catch(error){
//     console.log(error);
// }}
// consumePromiseFive()

// async function getAuser(){
//     try{
//     const response = await fetch('https://randomuser.me/')
//     const data =await response.json()
//     console.log(data);
// } catch(error){
//     console.log(error);
// }
// }
// getAuser()
