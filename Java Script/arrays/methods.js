var arr=['apple','orange','mango','custard apple']
console.log(typeof arr)

// converting arr into string

var arr2=arr.join('_')           // separator
console.log(arr2)
console.log(typeof arr2)


// reverse used to reverse the array
var rev=arr.reverse()
console.log(rev)

// reversing string
var str='Today is Great a day'
console.log(str)
var arr=str.split('')
console.log(arr)
var arrrev=arr.reverse()
console.log(arrrev)
str=arrrev.join('')
console.log(str)

// filter method

var age=[18,29,34,10,5,28,89,57]
console.log(age)
// var fillarr=age.filter(agefil);
// function agefil(age){
//     return age>=18 && age<=60
// }

var fillarr=age.filter((age)=>{
    return age>=18 && age<=60
})
console.log(fillarr)

// ___includes used to check the presence of ana element in array

var arr=['black','Green','pink']
var inc=arr.includes('black')
console.log(inc)

practice questions

// 1.filtering even numbers

var arr=[1,2,3,4,5,6,7]
console.log(arr)
var arr2=arr.filter((i)=>{
    return i%2!=0
})
console.log(arr2)

// 2.filtering strings

var str=['Apple',"Hyderabad",'pen','bull','rock','mango']
var filstr=str.filter((i)=>{
    return i.includes('a')
})
console.log(filstr)

// filtering elements by length 

var str=['Apple',"Hyderabad",'pen','bull','rock','mango']
var lenarr=str.filter((i)=>{
    return i.length==5
})
console.log(lenarr)

___indexof,__lastindexof

var arr=[1,2,3,4,1,5,6,2,3,1]
console.log(arr.indexOf(1))
console.log(arr.indexOf(1,3))       // indexof(req element,starting index)
console.log(arr.lastIndexOf(1))

// ___push(),pop()   works on end positions only
 var arr=['red','black','blue','white']
 console.log(arr)
 arr.push('pink')
 console.log(arr)
 arr.push('brown','yellow')
 console.log(arr)
 arr.pop()
 console.log(arr)
 arr.pop()
 console.log(arr)

//  ___shift() and ___unshift()

var arr=['red','black','blue','white']
console.log(arr)
arr.shift()                            //removes element from first
console.log(arr)
arr.shift()
console.log(arr)
     // used to add elements from starting positions
arr.unshift('red')
arr.unshift('pink','green')
console.log(arr)


// ___slice()   :-never effects the original array

var arr=['red','black','blue','white','pink','orange']
console.log(arr)
var arr2=arr.slice(1,3)
console.log(arr2)
var arr3=arr.slice(-1,-3)
console.log(arr3)

// __splice(SI,howmanyvalues after SI) :-it effects the original array

var arr=['red','black','blue','white','pink','orange']
console.log(arr)
arr.splice(1,2)
console.log(arr)
arr.splice(2,4)
console.log(arr)

// __tostring()

var arr=['red','black','blue','white','pink','orange']
console.log(arr)
console.log(typeof arr)
var str=arr.toString()
str=str.replaceAll(',',' ')
console.log(str)
console.log(typeof str)

