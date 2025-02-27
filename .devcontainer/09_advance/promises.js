//1
const promiseOne = new Promise(function(resolve,reject){
    // Do n asyn task 
    // DB calls , cryptography, network 
    setTimeout(function(){
        //resolve()
        console.log("Asyn task is completed");
        resolve() // if we put upper then log then it will not print first resolv call after the task completed  
    },1000)
})

promiseOne.then(function(){// resolv econnection with .then()
    console.log("promise consumed");
}) 


//2 way to declare promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("asyn2 resolve");
})


//3
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"dev",email:"dev@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})


//4
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"dev",password:"123"})
        }
        else{
            reject('Error:something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log((username));
}).catch(function(error){
    console.log(error); 
}).finally(()=>console.log("the promise either resolve or either rejected"))



//5
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"js",password:"123"})
        }
        else{
            reject('Error: js went wrong')
        }
    },1000)
})

async function consumPromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumPromiseFive()


// 6 
// async function getallusers() {
//    try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//       const data=await response.json() //here we consvert the response data string to json
//       console.log(data);
//    }
//    catch(error){
//     console.log(error);
//    }
// }
// getallusers()


// 
fetch("https://api.github.com/users/dev12092003").then((response)=>{
    console.log("this is the fetch response");
    console.log(response);
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((err)=>console.log(err))

//promise 
