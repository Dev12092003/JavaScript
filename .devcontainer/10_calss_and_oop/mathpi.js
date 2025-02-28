//Object

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI); // not chagebal

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

const chai={
    name: "ginget chai",
    price:250,
    isAvailable:true,

    orderChai:function(){
        console.log("chai nahi bani");
        
    }
}

console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai)); // chai is an object we need the property so give the whihc property you need
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false, // so we can not able to see or enumrebal name in output
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}

