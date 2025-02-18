// for of

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);   
// }

// const str="Hello World"
// for (const greet of str) {
//     console.log('each character is '+ greet); 
// }


// Maps 

const map = new Map()
map.set('IN',"India")
map.set('US',"Usa")
map.set('Fr',"France")
map.set('IN',"India")
console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(key,'-','value');
}


const obj={
    'game1':'NFS',
    'game2':'spy',
    'game3':'uu'
}

// for (const [key,value] of obj) { // we can not ittreat the object like this see new file
//     console.log(key,'-',value);
// }





