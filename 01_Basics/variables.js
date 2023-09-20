const accountId = 123456
let accountEmail = "prashant@google.com"
var accountPassword = "Prashant@1921"
accountCity = "Pune"

console.log(accountId);


accountEmail = "prashant@aws.com"
accountPassword = "Prashant@192196"
accountCity = "Hyderabad"

let accountState

// accountId = 123456789

/*
Prefer not to use var
Because issue in block of scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])