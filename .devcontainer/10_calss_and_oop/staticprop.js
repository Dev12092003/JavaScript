class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static creatId(){ // not give the access to every 
        return `123`
    }
}
const u1= new User("Dev")
// console.log(u1.creatId()) // not work because static


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher("iphone","i@gmial.com")
iphone.logMe()
//console.log(iphone.creatId()); // not work because static
