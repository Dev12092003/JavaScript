// const name="dev" 
// const repoCount=50;

// console.log(name+repoCount+" value"); // not recomandet

// console.log(`hello my name is ${name} and my repo count ${repoCount}`) // use this for string concate

// const str1 = "Hello";
// const str2 = "World";

// console.log(str1.concat(" ", str2));
// // Expected output: "Hello World"

// console.log(str2.concat(", ", str1));
// // Expected output: "World, Hello"


// const gamename = new String('dev-he-hello') // string decalre second method

// console.log(gamename[0]);
// console.log(gamename.__proto__); //access prototype

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.toLowerCase());
// console.log(gamename.charAt(2));  //A string representing the character (exactly one UTF-16 code unit) at the specified index. If index is out of the range of 0 – str.length - 1, charAt() returns an empty string.
// console.log(gamename.at(-1)); //it start from the reverse  // output: o
// console.log(gamename.indexOf('v'));

// const newstr=gamename.substring(1,2) // (first for staring, second for the length)  
// console.log(newstr);

// console.log("String Slice")
// const anotherString=gamename.slice(1,2) // (first-for starint index , second -for the string index which you have to ptint )
// console.log(anotherString); // slice is same as substring but it does not include the end index
// console.log(gamename.slice(3));
// console.log(gamename.slice(3,2)); // not give output
// console.log(gamename.slice(3,6));
// console.log(gamename.slice(-3));
// console.log(gamename.slice(-6,-2));




// console.log();

// console.log("String Trim");


// const newstrone="  Dev ";
// console.log(newstrone);
// console.log(newstrone.trim()); // remove the space from the string

// const url="https://dev.com/dev%20patel" 
// console.log(url.replace('%20','-'));

// console.log(url.includes('dev'));
// console.log(url.includes('he'));


// console.log();
// console.log("String Split");
// console.log(gamename.split("-")); // ("charater", limit)
// console.log(gamename.split("-",1));
// console.log(gamename.split("-",2));


//***************
//slice and substring 
// Use slice() when working with arrays or strings where you might need negative indexes.
// Use substring() only if you want automatic swapping of indices.

const str = "abcdefg";
const str10 = "abcdefg";


console.log(str.substring(1, 3));
// Expected output: "oz"
console.log(str10.slice(1, 3));
// Expected output: "oz"


console.log(str.substring(4, 1)); //(swaps 4 and 1)
// Expected output: "oz"
console.log(str10.slice(4, 1)); // ( give empty string  since start > end)
// Expected output: "oz" but output: 

console.log(str.substring(2));
// Expected output: "zilla"
console.log(str10.slice(2));
// Expected output: "zilla"

console.log(str.substring(-4)); //not work in substring (negative index is treated as 0)
console.log(str10.slice(-4));
// Expected output: "illa"

console.log(str.substring(-6, 2)); //not work in substring ( convert negative index to 0 )
console.log(str10.slice(-6,-2));
// Expected output: "ozil"
