class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A cours wa added by ${this.username}`);

    }
}

const u1=new Teacher("heee","he@gmail.com","123")
// console.log(u1);
u1.addCourse();
u1.logMe()

const u2=new User("dev")
u2.logMe()

console.log(u1 instanceof User)
console.log(u2 instanceof User)
console.log(u1 instanceof Teacher)
console.log(u2 instanceof Teacher)


