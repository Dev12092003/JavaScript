const marvel=["thore","Ironman","Spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[2]);
// console.log(marvel[3]);
// console.log(marvel[3][0]);


// marvel.concat(dc);
// console.log(marvel);
// console.log(marvel[2]);
// console.log(marvel[3]);
// console.log(marvel[3][0]); // this not work in concat

//concat two array 
const Hero=marvel.concat(dc);
console.log(Hero);

const newhero=[...marvel,...dc]
console.log(newhero);


//
const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherarr);

const newanotherarr=anotherarr.flat(Infinity)
console.log(newanotherarr);

//datascraping

console.log(Array.isArray("dev")); // give true or false
console.log(Array.from("dev"));
console.log(Array.from({name:"dev"})); //insteresting for interview  this give the empty array becase here we need to specify thtat on which basis we creat array key or value

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

