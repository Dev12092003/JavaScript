//singleton object or object using method 

// //const tinderUser = new Object()  //this is singleton object 
// const tinderUser = {} //this is non singleton object

// tinderUser.id="123"
// tinderUser.name="dev"
// tinderUser.isLoggedIn=false

// console.log(tinderUser);





// const regularUSer={
//     email:"dev@gmail.com",
//     fullname:{
//         userfullname:{
//             fisrname:"dev",
//             lastname:"patel"
//         },
//     }
// }

// console.log(regularUSer);
// console.log(regularUSer.fullname);
// console.log(regularUSer.fullname.userfullname);
// console.log(regularUSer.fullname.userfullname.fisrname);

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj3={5:"a",6:"b"}
// const obj4={7:"a",8:"b"}
// const obj5={9:"a",0:"b"}


// const nweobj= {obj1,obj2}  / not good
// console.log(nweobj); 

// combin two object
//const newobj=Object.assign(obj1,obj2,obj3,obj4,obj5) // give same result
//const newobj=Object.assign({},obj1,obj2,obj3,obj4,obj5) // give same result but recomndet give garentte to conver in object 

// const newobj={...obj1,...obj3} // easy for use
// console.log(newobj);





//  when connect with database value comes like this array of object
// const user=[
//     {
//         id:1,
//         email:"dev@gmail.com"
//     },
//     {
//         id:2,
//         email:"dev@gmail.com"
//     }
// ]

// console.log(user[1].email);
// console.log(tinderUser);


//very import when you creat project
// console.log(Object.keys(tinderUser)); // data type array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename:"Js",
    price:"999",
    coursIntstructor:"dev"
}

console.log(course.coursename);
console.log(course.price);
console.log(course.coursIntstructor)

//object destructure
const {coursIntstructor : he} = course
console.log(he);
 
// **************************************

//API call this type of response 

//json
// {
//     "name":"dev"
//     "coursename":"js"
//     "price":"999"
// }

// array 
// [
//     {},
//     {},
//     {}
// ]







