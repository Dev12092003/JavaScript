// ES6


// class User {
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const u1=new User("dev","dev@gmail.com","123")
// console.log(u1.encryptPassword());
// console.log(u1.changeusername());



//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.changeusername=function(){
    return`${this.username.toUpperCase()}`
}


const u2= new User("he","he@gmail.com","123")
console.log(u2.encryptPassword());
console.log(u2.changeusername());



