// WAPTC whether the given number is positive or not.If the number is positive check whether it is even or not.

var n=prompt('enter any number')
if(n>=0){
    if(n%2==0){
        console.log("It is a Even number")
    }
    else{
        console.log("It is an Odd number")
    }
}
else{
    console.log("It is a Negative number")
}

// Determine the grade based on marks.If the marks are above 90 print grade A,if the marks are above 80 print grade B,if the marks are above 70 print grade C,if the marks are above 60 print grade D,if the marks are less than 60 print grade Fail. 


var marks=prompt('enter your marks')
if (marks<=100) {
    if(marks>=90){
        console.log('A grade')
    }
    else if(marks>=80){
        console.log('B grade')
    }
    else if(marks>=70){
        console.log('C grade')
    }
    else if(marks>=60){
        console.log('D grade')
    }
    else{
        console.log('Fail')
    }
}
else{
    console.log('Plse enter marks below or equal 100')
}

// WAPT find the largest number of three numbers.Collect the numbers from user

var n1=Number(prompt('Enter value for n1'))
var n2=Number(prompt('Enter value for n2'))
var n3=Number(prompt('Enter value for n3'))
if(n1>=n2 & n1>=n3){
    console.log(`${n1},${n2},${n3}:- ${n1} is the greatest value`)
}
else if(n2>=n1 && n2>=n3){
    console.log(`${n1},${n2},${n3}:- ${n2} is the greatest value`)
}
else{
    console.log(`${n1},${n2},${n3}:- ${n3} is the greatest value`)
}

// WAPTC whether the given year is a leap year or not.

var year=Number(prompt('Enter a year'))
if(year%4==0){
    console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is not a leap year`)
}

// Determine the day of the weak by using switch.Collect the day value from user and change the background image according to the day.

let num=Number(prompt('Enter day value between 0 and 6'))
switch(num){
    case 0:
        document.getElementById('b').innerHTML=`SUNDAY`
        document.getElementById('a').innerHTML=`<div id="div1"></div>`
        break;
    case 1:
        document.getElementById('b').innerHTML=`MONDAY`
        document.getElementById('a').innerHTML=`<div id="div2"></div>`
        break;
    case 2:
        document.getElementById('b').innerHTML=`TUESDAY`
        document.getElementById('a').innerHTML=`<div id="div3"></div>`
        break;
    case 3:
        document.getElementById('b').innerHTML=`WEDNESDAY`
        document.getElementById('a').innerHTML=`<div id="div4"></div>`
        break;
    case 4:
        document.getElementById('b').innerHTML=`THURSDAY`
        document.getElementById('a').innerHTML=`<div id="div5"></div>`
        break;
    case 5:
        document.getElementById('b').innerHTML=`FRIDAY`
        document.getElementById('a').innerHTML=`<div id="div6"></div>`
        break;
    case 6:
        document.getElementById('b').innerHTML=`SATURDAY`
        document.getElementById('a').innerHTML=`<div id="div7"></div>`
        break;
    default:
        document.getElementById('b').innerHTML=`Please enter valid input`
        document.getElementById('a').innerHTML=`<div id="div8"></div>`

}

// var n=prompt('Enter any value')
// if (n%3==0 || n%5==0){
//     if(n%3==0 && n%5==0){
//         console.log('FizzBuzz')
//     }
//     else if(n%5==0){
//         console.log('Buzz')
//     }
//     else{
//         console.log('Fizz')
//     }
// }
// else{
//     console.log('not divisible by 3 and 5')
// }

// var str=prompt('Enter a string')
// var rev=''
// var index=str.length-1
// while (index>=0){
//     rev+=str[index]
//     index--
// }
// if(rev==str){
//     console.log('its a palindrome')
// }
// else(
//     console.log('its not a palindrome')
// )
