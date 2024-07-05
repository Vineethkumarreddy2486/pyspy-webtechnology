for(i=1;i<=5;i++){
    console.log('This is for loop')
}

for(i=1;i<=10;i++){
    console.log(i)
}


// WAP for multiplaction table collect the number from user

var num=prompt('enter number')
for(i=1;i<=10;i++){
    console.log(num +'x' +i +'=' +num*i)
}


// WAP for multiplaction table collect the number from user but in reverse 

var num1=prompt('enter number')
for(i=10;i>=1;i--){
    console.log(num1 +'x' +i +'=' +num1*i)
}


//using while loop
var n=prompt('enter number')
i=1
while(i<=10){
    console.log(n +'x' +i +'=' +n*i)
    i++
}

//using while loop in reverse

var n=prompt('enter your table number')
var str = ''
i=10
while(i>=1){
    str+=n +'x' +i +'=' +n*i+ '<br>'
    i--
}
document.getElementById('a').innerHTML=str;