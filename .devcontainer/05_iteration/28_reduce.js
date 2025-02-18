//reduce 

const mynums=[1,2,3]

//this wcan be use in shopping cart for calculate the total value of the cart
//1
// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)
// console.log(mytotal);

//2
// const mytotal=mynums.reduce((acc,currval)=>acc+currval,0)
// console.log(mytotal);


const shoppingcart=[
    {
        itemname:'js course',
        price:299
    },
    {
        itemname:'py course',
        price:2999
    },
    {
        itemname:'c course',
        price:9999
    }
]
const pricetopay=shoppingcart.reduce((acc,item)=> acc + item.price ,0)
console.log(pricetopay);
