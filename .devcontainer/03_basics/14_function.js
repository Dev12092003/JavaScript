// function saymyname(){
//     console.log("d");
//     console.log("e");
//     console.log("v");
// }
// saymyname();


//1 methos declaration
// function addnum(number1 , number2){ // number1 , number2 are parameters
//     console.log(number1+number2)
// }
// addnum(2,3) // 2 , 3 are arguments
// addnum(2,"4")
// addnum(2,"t")
// addnum(2,null)

// const result=addnum(3,3)
// console.log("result",result); // give output wiht undefine

//2 method declaration
// function addnum(number1 , number2){ // number1 , number2 are parameters
//     let result=number1+number2;
//     return result  // after return nothing print
//     // console.log("dev")
// }
// const result=addnum(3,3)
// console.log("result",result);


//3 method declaration
// function addnum(number1 , number2){ // number1 , number2 are parameters
//     return number1+number2;
// }
// const result=addnum(3,3)
// console.log("result",result);


// function loginUserMessage(username="sam"){ //here we pass default value
//     if(!username/* or username===undefined*/){
//         console.log("please enter user name")
//         return ;
//     }
//     return `${username} just looged in`
// }
// loginUserMessage("dev") //this only return but not print
// console.log(loginUserMessage("dev"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage()); // if not pass any vallue in function then it give undefiend


// function calculatecartprice(...num1){  // ..rest operator/spreadoperator
//     return num1
// }
// console.log(calculatecartprice(200,300,500));


// like shopping caart user addd the item we dont know then we use this type of function 
function calculatecartprice(val1,val2,...num1){  // ..rest operator/spreadoperator
    return num1
}
console.log(calculatecartprice(200,300,500));


const user={
    username:"dev",
    price:10
}
function handleobj(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
handleobj(user)
handleobj({
    username:"dev",
    price:20
})


const mynewarr=[10,20,30,40,50,60,70,80,90]
function returnsecondval(getarr){
    return `my arr ${getarr[0]}`
}
console.log(returnsecondval(mynewarr))
console.log(returnsecondval([1,2,3,4,5,6,7,8,9]))