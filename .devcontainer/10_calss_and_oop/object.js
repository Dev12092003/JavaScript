function multiplayBy5(num){
    return num*5
}

multiplayBy5.power = 2 //function is an function and function is an object 

console.log(multiplayBy5(5));
console.log(multiplayBy5.power);
console.log(multiplayBy5.prototype);

function creatUser(username,score){
    this.username=username
    this.score=score
}

creatUser.prototype.increment= function(){
    this.score++;
}
creatUser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}

const u1=new creatUser('User1',20)
const u2=new creatUser('User2',10)

u1.printme();
u2.printme();
// console.log(u1);
// console.log(u2);

