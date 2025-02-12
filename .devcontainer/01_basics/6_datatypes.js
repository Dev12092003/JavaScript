// premative 

// 7 types : String , Number, Boolean, Null, Undefiend,
//           Symbol, Bitint 

// const score =100;
// const scorevalue =100.10;
// const isloggin=true;
// const outsidetemp=null;  // data type object 
// let userEamil; //undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id===anotherId);

// const bignum=12323561254656713643n;





//non premative  (referance)
// Array, Objeccts, Functions 

// const Hero=["dev","yash","aryan"];

// let myobj={
//     name:"dev",
//     age:22
// }

// const MyFunction = function(){
//     console.log("Hello");
// }



//******************************** 


//memory type - Stack , Heap 
// stack use in all (primitive) , Heap use in all (non-primitive)
// when stack use then the what ever varivable we decalr it give the copy
// when the heap declare then we get the original value reference 

//this go to the stack
let muYoyutubeName="hello";

let anothername=muYoyutubeName;
anothername="hi";
console.log(muYoyutubeName);
console.log(anothername);


//this go to the Heap
let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne;
console.log(userOne)
console.log(userTwo);

userTwo.email="userTwo@gmail.com"
console.log(userOne); 
console.log(userTwo);



