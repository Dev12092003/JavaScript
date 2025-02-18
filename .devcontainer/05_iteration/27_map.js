const mynum=[1,2,3,4,5,6,7,8,9,10]

// //1
// const newnum=mynum.map((item)=>item+10);
// console.log(newnum);

// const newnum=mynum.map((item)=>{item+10}); // give undefind same as filter becaus scope open

// //2
// const newnum=mynum.map((item)=>{return item+10});
// console.log(newnum);

//chaining
//const xnum=mynum.map((num)=>{return num>=5}).map((num)=>num+1).filter((item)=>item>=1) // this will give output like this  [1, 1, 1, 1, 2,2, 2, 2, 2, 2]
//becaus {return num>=5} this conver the filst map in to true false then go to next map whihc add number and then filter so 
const xnum=mynum.map((num)=>num*10).map((num)=>num+1).filter((item)=>item>=1)
console.log(xnum);


