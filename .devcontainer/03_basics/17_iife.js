// Immediately Invoked Function Expression (IIFE)

//simple function 
// function chai(){
//     console.log("DB conneccted");
// }
// chai()

//iife function named IIFE
// global scope ke varible se polustion hoti he kai baar to hatane ke liae 
(function chai(){
    console.log(`DB conneccted`);
})();
//() finctiondefination ()fucntion execution

//iife arrow function 
((name)=>{
    console.log(`Db connected 2 ${name}`);
})("dev")
