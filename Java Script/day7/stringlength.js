var str='Apple'
console.log(str.length)

for(i=0;i<=str.length-1;i++){
    console.log(str[i])
}

// slice : left to right only possible

let str1='Apple is a company'
console.log(str1)
console.log(str1.slice(0,5))
console.log(str1.slice(-7,-1))
console.log(str1.slice(-7,0))
console.log(str1.slice(-20))

// substring:-In substring only positive values to be given,if we give negative values those
//  will be considered as 0.

console.log(str1.substring(10,18))
console.log(str1.substring(10,5))          // here  5 is SI and 10 is EI
console.log(str1.substring(-6,5))          // -6 is considered as 0       
console.log(str1.substring(-6))
console.log(str1.substring(-10,-18))


// substr(starting index,no. of chars to be printed)
console.log(str1.substr(0,5))
console.log(str1.substr(-18,8))
console.log(str1.substr(6,2))
console.log(str1.substr(0))
console.log(str1.substr(-5,-6))

// trim():-used to remove the space from both starting and ending.
// trimstart():-used to remove the space in starting
// trimend():-used to remove the space in ending

var st=' apple '
console.log(st,st.length)

var st1=st.trimStart()
console.log(st1,st1.length)

var st2=st.trimEnd()
console.log(st2,st2.length)

var st3=st.trim()
console.log(st3,st3.length)


console.log('pad examples:-')
// padStart(maxlength,any data)
let strr='apple'
console.log(strr)
let strr1=strr.padStart(6,'2')
console.log(strr1)
let strr2=strr.padStart(20,'mango')
console.log(strr2)

// padEnd(maxlength,any data)
 let strr3=strr.padEnd(20,'mango')
 console.log(strr3)

console.log('replace examples:-')
// replace(search val,replace val)
let sr='tom like apples so he brought 1kg of apples'

let sr1=sr.replace('apples','mangoes')                    //replaces only first occurence
console.log(sr1)

let sr2=sr.replaceAll('apples','mangoes')                 //replaces all occurences
console.log(sr2)

// replace middle shells with your name
var sting=`She sells seashells by the seashore,
the shells she sells are surely seashells.
so if she sells shells on the seashore,                   
I'm sure she shells seashore shells.`
var sting1=sting.slice(0,95)
console.log(sting1)

var sting2=sting.slice(96)
console.log(sting2)

sting2=sting2.replace('shells',' "vineeth"')
let sting3=sting1+sting2
console.log(sting3)


console.log('split examples')


// split('value')
var stg=`She sells seashells by the seashore,the shells she sells are surely seashells.so if she sells shells on the seashore,                   
I'm sure she shells seashore shells.`
var stg1=stg.split(" ")
console.log(stg1)
console.log(stg.split('s'))




