// const useremail="dev2gmail.com"

// if(useremail){
//     console.log("got the user email");
// }
// else{
//     console.log("Don't get user email");
// }


//  falsy value
// false , 0 , -0 , BigInt 0n , "" , null , undefiend , NaN

// truty value 
// true , "0" , "   " , 'false' , [] , {} , function(){} 

// const arr=[]
// if(arr.length===0){
//     console.log("array is empty");   
// }

// const obj={}
// if(Object.keys(obj).length===0){
//     console.log("object is empty");
// }


//  false == 0   => true
// false == ''   => true
// 0 == ''       => true


// Nullish Coalescing Operator (??):null,undefined

// let val1;
// val1=5??10 // 5
// val1=null??10 //10
// val1=undefined??15 //15
// val1=null??10??20 //10
// val1=null??undefined //undefined
// val1=undefined??null //null
// console.log(val1);

const iceTea=100;
iceTea<=80 ? console.log("less than 80"): console.log("more than 90");