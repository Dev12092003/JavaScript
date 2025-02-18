// for each

const coding=["js","python","java","c++","node"]

//1
// coding.forEach( function (item) {
//     console.log(item)
// } )

//2
// coding.forEach((item)=>{
//     console.log(item);
// })

//3
// function print(item){
//     console.log(item);
// }
// coding.forEach(print)

// note: arrow function contain the  item,index return the index of the element,arr return full array
// coding.forEach((item,index,arr)=>{ 
//     console.log(item,index,arr);  
// })




const mycoding=[
    {
        languagename:"js",
        languagefile:".js"
    },
    {
        languagename:"pyhton",
        languagefile:".py"
    },
    {
        languagename:"c",
        languagefile:".c"
    }
]
// this is very usefull while using with database
mycoding.forEach( (val)=>{
    console.log(val.languagename);  
})