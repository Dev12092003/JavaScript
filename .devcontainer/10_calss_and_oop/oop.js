//object literal
// const user = {
//     username:"hitesh",
//     loginCount : 8,
//     singedIn : true,
//     getUserDetails: function(){
//         // console.log("Got user details form the database");
//         // console.log(`user name: ${username}`); // this give error
//         // console.log(`user name:${this.username}`);
//          console.log(this);//ghere this give the current context
//     }
// }
// console.log(user.username); // object is object literal
// console.log(user.getUserDetails()); // give output and undefiend
// console.log(this); // here the global context this give the {}


 // *********************************
 //constructor function
// const promiseOne = new Promise()
// const date = new Date()

function User(username,logincount,isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn   
    this.greeing=function(){
        console.log(`welcome ${this.username}`);
    }
    // return this //it dosent mattere it implicityly automatically use 
}

// const userOne = User("dev",12,true);
// const userTwo = User("he",11,false)
// console.log(userOne); //here we print the user one but it print the usertwo it over writ the userone value

//solution use the new key word to solve 
const userOne = new User("dev",12,true);
const userTwo = new User("he",11,false)
console.log(userOne.constructor); //referen of the user
// console.log(userTwo);

