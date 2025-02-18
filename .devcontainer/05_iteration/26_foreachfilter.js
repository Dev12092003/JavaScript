// for each 2

// const coding=["js","python","java","c++","node"]
// const values=coding.forEach((item)=>{  // foreach will never return the value 
//     console.log(item);
//     return item;  
// })
// console.log(values); // undefined not give the output




const mynum= [1,2,3,4,5,6,7,8,9,10]

// const newnums=mynum.filter( (num)=>num>4 ) // filter return the value whihc solve the problem of foreach
// console.log(newnums);


// const newnums=mynum.filter( (num)=>{
//     num > 4
// }) // this return the empty so solve this see down 
// console.log(newnums);


//1 using filter
// note when you open scope {} then you need to use the return 
// const newnums=mynum.filter( (num)=>{
//     return num > 4
// })
// console.log(newnums);

//2 usinng foreach
// const newnums=[]
// const newnums=mynum.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);


const book=[
    {name:"book1",price:100},
    {name:"book2",price:200},
    {name:"book3",price:300},
    {name:"book4",price:400},
    {name:"book5",price:300},
    {name:"book6",price:600},
    {name:"book7",price:300},
    {name:"book8",price:800},
    {name:"book9",price:900},
    {name:"book10",price:1000}
]

let userbooks=book.filter((bk)=>bk.price===300)
// userbooks=book.filter((bk)=>{bk.price>300}) // [] beacause the scope is open but we not use return
userbooks=book.filter((bk)=>{
    return bk.price>300&&bk.name==='book8'
})
console.log(userbooks);



