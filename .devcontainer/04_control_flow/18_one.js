// if

// < , > , <= , >= , == , !=

// const isuserloggedin=true
// if(2=="2"){
//     console.log(` 2=='2' `);
// }
// if(2==="2"){
//     console.log(` 2==='2' `);
// }

// const temperature=41;
// if(temperature===41){
//     console.log("less than  50");
// }
// else{
//     console.log("temperature is grater than 50");
// }


// const score=200;
// if(score>100){
//     const power = "fly"
//     console.log(`user Power:${power}`);
// }
// // console.log(`user Power:${power}`);


// const balance =1000;
// // if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than");  
// }
// else if (balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");   
// }


const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user llogged in");
    
}