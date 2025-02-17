// let a=10;
// const b=20;
// var c=30;

// // {} scope 

// console.log(a);
// console.log(b);
// console.log(c);

// var c=300;
// if(true){
//     let a=10;
//     const b=20;
//     var c=30;
// }

// // console.log(a); //follow the scope
// // console.log(b); // follow the scope
// console.log(c); // var not follw the scope 

// let a=300;
// if(true){
//     let a=10;
//     console.log("inner:",a);
    
// }
// console.log(a);


// ******************************

// nested Scope
// function one(){
//     const username="Dev"

//     function two(){
//         const website="youtube"
//         console.log(username);
        
//     }
//     //console.log(website); //1) this will not print because this is out of the scope of two 
//     two(); // 2) call the function two
// }

// one(); //3) call the function one




// if(true){
//     const username="dev"
//     if(username==="dev"){
//         const website=" youtube "
//         console.log(username + website);
//     }
//     // console.log(website); //1) this will not print because this is out of the scope of two 
// }
// // console.log(username); // out of the scope



// *********************
//1
// function addone(num){
//     return num + 1;
// }
// addone(5)

// const addtwo=function(num){
//     return num + 2;
// }
// addtwo(5);

//2
console.log(addone(5)) //this run 
function addone(num){
    return num + 1;
}
addtwo(5); //Cannot access 'addtwo' before initialization
const addtwo=function(num){
    return num + 2;
}