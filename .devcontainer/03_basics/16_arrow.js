// const user={
//     username:"dev",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`); //for refer the current contex we use this
//         console.log(this); // current contex means the current value 
         
//     }
// }

////1
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage();
// // console.log(this); 

//// 2
//// user.welcomeMessage()
//// user.username="sam"
//// user.welcomeMessage();
// console.log(this); // this give the empty becaue we are in node environment  but in browser we give some output regarding the global windo object 


// function one(){
//     let username="dev"
//     console.log(this.username); //when we use the this inside the function that will not work 
// }
// one()
// const one=function(){
//     let username="dev"
//     console.log(this.username);
// }
// one()

//arraw function declaration 
// const one=()=>{
//     let username="dev"
//     console.log(this);
// }
// one()



// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }

//impicit return arrow function 
// const addtwo=(num1,num2)=> num1+num2;
// const addtwo=(num1,num2) => (  // use this in react 
//     num1+num2
// );


// const addtwo=(num1,num2) => {username:"dev"}  // give undefined beacuae we can not return object like this 
const addtwo=(num1,num2) => ({username:"dev"})


console.log(addtwo(3,4))
