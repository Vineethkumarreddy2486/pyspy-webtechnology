// Arithmatic operators

var n=48
var n1=2
var n2="4"
console.log(n+n1)
console.log(n+n2)   //for addition only it will concatinate,for remaining it will perform respective operation
console.log(n-n2)
console.log(n*n1)
console.log(n/n1)
console.log(++n) //pre increment o/p;-49
console.log(n++) //post increment n=48
console.log(n)
console.log(--n) //pre decrement n=47
console.log(n--) //post increment n=48


// Assignment Operators

var num1=22
var num2=2
num1+=num2
num1-=num2
num1*=num2
num1/=num2
num1%=num2
num2%=num1
num1**=num2
console.log(num1,num2)

// Comparison Operators

var n3=45
var n4='46'
console.log(n3==n4)     //it compares values
console.log(n3===n4)    //it compares data types
console.log(n3!=n4)
console.log(n3)

// Logical operators

var num4=55
var num5=45
console.log(num4>num5 && num5<num4)   //o/p;-true/false
console.log(num4>num5 & num5<num4)   //o/p;- 1/0
console.log(num4<70 || num5>70)
console.log(num4<70 | num5>70)
console.log(!false)
console.log(!true)
