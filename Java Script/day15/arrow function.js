// ___________ARROW FUNCTION_____________
// When we have multiple statements

var Arrow_fun=()=>{
    console.log('this is arrow function 1')
    console.log('this is arrow function 2')
    console.log('this is arrow function 3')
}
Arrow_fun();

// another syntax when we have only one statement

var One_statement=()=>console.log('Another syntax When we have only 1 statement')
One_statement();

// another syntax when we have one parameter and one statement

var One_para=num1=>console.log(`One parameter with one statement ${num1}`)
One_para(20);

// another syntax when we have one parameter and multiple statements

var One_para_multiple_states=age=>{
    console.log('This is another syntax')
    console.log('when we have one parameter and multiple statements')
    console.log(`the age is ${age}`)
}
One_para_multiple_states(22);

// when we've multiple parameters and multiple statements

// var num1=Number(prompt('Enter the value for num1'))
// var num2=Number(prompt('Enter the value for num2'))
// var op=(num1,num2)=>{
//     console.log(`Add b/w ${num1} and ${num2} is ${num1+num2}`)
//     console.log(`Sub b/w ${num1} and ${num2} is ${num1-num2}`)
//     console.log(`Mul b/w ${num1} and ${num2} is ${num1*num2}`)
//     console.log(`Div b/w ${num1} and ${num2} is ${num1/num2}`)
//     console.log(`Mod b/w ${num1} and ${num2} is ${num1%num2}`)
// }
// op(num1,num2);


// with return type

var add=(a,b)=>{return a+b}
console.log(add(2,3))
console.log(add(10,20))