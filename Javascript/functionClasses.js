function myName(firstName,lastName){
    console.log(firstName+" "+lastName)
}
myName("Jack","Ryan")
function checkAge(age){
    if(age> 18){return true}
    else{return false}
}
console.log(checkAge(22))
let age = 5
let answ = age==5?"age is 5":"age is not 5"
console.log(answ)
let sayHi = function(fname){
    console.log("Helloooo "+fname)
}
sayHi("Johny")