//singleton - 
// Object.create // in this method we object called constructor method and inside this the singleton creat

//object literals
// const jsuser={  //obejct have kkey value 
//     name:"dev", // we wrtei this but system treat this as "name":"dev"
//     "Lastname":"patel",
//     age:18,
//     location:"gujarat",
//     email:"dev@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday","Saturday"]
// }

// console.log(jsuser);
// console.log(jsuser.email); // not recomendet to use this to access the object
// // console.log(jsuser[email]); // not able to acces because js treat as stirng so give error email is not defined
// console.log(jsuser["email"]); //this is recomendate 
// // console.log(jsuser[Lastname]);
// console.log(jsuser["Lastname"]);


//symbol

// const mysym=Symbol("key1");

// const jsuser={  //obejct have kkey value 
//     name:"dev", // we wrtei this but system treat this as "name":"dev"
//     "Lastname":"patel",
//     mysym:"myKey1",
//     age:18,
//     location:"gujarat",
//     email:"dev@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday","Saturday"]
// }
// console.log(typeof jsuser.mysym); // here js return as string whihc is wrong becasu we declare as symbol

// solution 
const mysym=Symbol("key1");

const jsuser={  
    name:"dev", 
    "Lastname":"patel",
    [mysym]:"myKey1", //to use this as symobl we use squarre bracket
    age:18,
    location:"gujarat",
    email:"dev@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsuser[mysym]); // right way to access 

// jsuser.email="new@gmail.com" //change the value of object 
// console.log(jsuser);

// // freeze che change 
// Object.freeze(jsuser); 
// jsuser.email="dev@gmail.com"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js");
}

jsuser.greetingtwo=function(){
    console.log(`hello js , ${this.name}`); // this keyword use to refer the current object
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


