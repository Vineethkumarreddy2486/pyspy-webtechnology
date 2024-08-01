// Named function example :-
// function parentfun(){
//     console.log('This is parent function')
//     function childfun(){
//         console.log('This is child function')
//     }
//     childfun()
// }
// parentfun()

// Named function example 2 :-
// function parentfun(){
//     console.log('This is parent function')
//     function childfun(){
//         console.log('This is child function')
//     }
//     return childfun
// }
// var Outside_fun=parentfun()
// Outside_fun()

// arrow function example 1:-

//  var arrowParentFun=()=>{
//     console.log('This is arrow parent function')
//     var arrowChildfun=()=>{
//         console.log('This is arrow child function')
//     }
//     arrowChildfun()
//  }
//  arrowParentFun()

// arrow function example 2:-

// var arrowParentFun=()=>{
//     console.log('This is arrow parent function')
//     var arrowChildfun=()=>{
//         console.log('This is arrow child function')
//     }
//     return arrowChildfun
// }
// var arrowchild=arrowParentFun()
// arrowchild()

// ___________CLOSURE_____________
// it will be created when we have nested function and varaibles inside parentfunction

// function pf(){
//     var a=10
//     var b=20
//     function cf(){
//         console.log(a+b)
//     }
//     cf()
//     return a-b
// }
// console.log(pf())

// with return type

// function ariOp(num1,num2){
//     function add(){
//         console.log(num1+num2)
//     }
//     function sub(){
//         console.log(num1-num2)
//     }
//     return sub,add
// }
// var val=ariOp(2,3)
// val()


// ___________CALLBACK AND HIGHERORDERED FUNCTIONS______________
function callBackFun(){
    console.log('This is callback function')
}
function HigherOrderedfun(cFun){
    cFun()
    console.log('this is higher ordered function')
    cFun()
}
HigherOrderedfun(callBackFun)