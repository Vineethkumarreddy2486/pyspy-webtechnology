// prompt acts like user input

// var num=prompt('enter number of apples')
// var str=`i have ${num} apples`
// console.log(str)

// example:2
// console.log(`current date and time is ${Date()}`)
// console.log(`this is random number ${Math.random()*10}`)

// example:3

// var num1=prompt('enter num1')
// var num2=prompt('enter num2')
// console.log(`addition of ${num1} and ${num2} is ${Number(num1)+Number(num2)}`)

// task
let clr=prompt('enter color')
let carname=prompt('enter car name')
document.getElementById('a').innerHTML=`I have brought a 
<span style="color:${clr}">${clr}</span> color 
<span style="color:${clr}">${carname}</span> car`