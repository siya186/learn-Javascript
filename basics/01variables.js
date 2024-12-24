const accountId = 14456
let accountEmail = "sakshi@gmail.com"
var  accountPassword = "1234"
accountCity = "jaipur"            // not a preferred way of declaring a variable



/*
prefer not to use var because of issue in its scope
*/

// accountId = 2
//console.log(accountId); // const can'nt be reassigned

accountEmail = "sg@gmail.com"
accountPassword = "4632"
accountCity = "bengalore"

console.table([accountEmail , accountId , accountPassword ,accountCity])

let accountState;
// const accState;    // const declarations must be initialised
var accState;
console.log(accountState)
console.log(accState)



