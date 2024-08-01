// var fun=function(){
//     console.log(`this function do not have any function name`)
// }
// fun()


// anonomous function with arguments

// var fun=function(n1,n2){
//     var sum=n1+n2
//     console.log(sum)
// }
// fun(12,13)

// anonomous function with return type

// var fun=function(n1,n2){
//     return n1+n2
// }
// console.log(fun(30,40))

// factorial of given number
// var number=Number(prompt('Enter your number'))
// var num=function(number){
//     fact=1
//     i=1
//     while(i<=number){
//         fact*=i
//         i++
//     }
//     return fact
// }
// console.log(num(number))

// IIFE function

// (function(){
//     console.log('This is IIFE function')
// })();                                           //semicolon is mandatory for IIFE

// IIFE with arguments

// (function(n1,n2){
//     console.log(n1+n2)
// })(2,3);

// IIFE with return type

// var add=(function(n1,n2){    //we have to store the entire function in another varaible to use return
//     return n1+n2             //in IIFE funcrion and we've to call that varaible
// })(12,13)
// console.log(add)

// anonomous function with different arguments

var add=function(n1,n2,n3){
    n1=1
    n2=2
    n3=3
    return arguments[0]+arguments[1]
}
console.log(add(10,20,30));