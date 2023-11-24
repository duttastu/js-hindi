const mynums =[1,2,3]

// const mytotal= mynums.reduce(function(acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)
// const mytotal = mynums.reduce( (acc,curval) => acc+curval,0)

// console.log(mytotal);

const shoppingcart =[
    {
        itemname: "pycourse",
        price:2999
    },
    {
        itemname: "js",
        price:4999
    },
    {
        itemname: "cpp",
        price:5999
    },
    {
        itemname: "c",
        price:6999
    },
    
]

const mycart = shoppingcart.reduce((acc,item) => acc + item.price,0)
console.log(mycart);