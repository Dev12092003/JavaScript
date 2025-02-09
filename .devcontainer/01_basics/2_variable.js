const accountId = 1234567890;
let accountEmail="dev@gmail.com";
var accountPassword="1234556789"; // now we are not using the var because scope  
accountcity="Gujarat"; //not recomendate
let accountState; //undefiend

// accountId=2;     // not allowed
accountEmail="new@gmail.com";
accountPassword="987654321";
accountcity="Mahesana";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountcity);
console.log(accountState);


console.table([accountId,accountEmail,accountPassword,accountcity,accountState]);


