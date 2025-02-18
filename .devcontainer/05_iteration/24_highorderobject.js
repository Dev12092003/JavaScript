// For in

const obj={
    js : 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in obj) {
    console.log(`${key} shortcut is for ${obj[key]}`);
}


const programming = ['js', 'rb', 'py', 'c++', 'java']
for (const key in programming) {
    console.log(`${key} is for ${programming[key]}`);
}


// const map = new Map()
// map.set('IN',"India")
// map.set('US',"Usa")
// map.set('Fr',"France")
// map.set('IN',"India")
// for (const key in map) { // in map forin is not working 
//     console.log(key);
// }

