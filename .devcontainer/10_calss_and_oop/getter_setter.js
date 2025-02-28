class User{
    constructor(email,password){
        this.email=email
        this.password = password
    }
    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password.toUpperCase()}dev`
    }

    set password(value){
        this._password=value
    }
}

const dev = new User("dev@gmail.com","abc");
console.log(dev.email); // uppercase
console.log(dev._email); // lowercase
console.log(dev.password);
