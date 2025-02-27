let myName="dev    "
let chanel="heee  "

// console.log(myName.trim().length);
// console.log(myName.truelength); create our own method

let myHeros = ["thor","spiderman"]

let heroPwer={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

//here we give the power to the object so every one can use it here we give power to the object so every one can access 
Object.prototype.dev=function () {
    console.log(`dev is in all object`);
    
}
heroPwer.dev()
myHeros.dev()

Array.prototype.heyDev=function(){
    console.log("dev hee");
}
myHeros.heyDev()
//heroPwer.heyDev() // here we give power to the array so only array can access not all




// ******************

//inheritance

const user={
    name:"dev",
    email:"dev@gmail.com"
}
const Teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:"js assignament",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user // prototypels inheritan 




//mordan syntax
Object.setPrototypeOf(TeachingSupport,Teacher)//inbulti use to inheritance



// ****************
//truelength

let anotherUserName="he     "
String.prototype.truelength=function(){
    console.log(`${this}`); //this give the reference of he(current object)
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUserName.truelength()

"dev   ".truelength()
"hello".truelength()













