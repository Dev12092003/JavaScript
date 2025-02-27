function SetUsername(username){
    //complext calculation
    this.username=username
    console.log("called");
    
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const u1= new createUser("Dev","dev@gmail.com","123")
console.log(u1);
