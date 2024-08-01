// var headingtags=document.getElementsByClassName('heading')

// // targeting element by element
// // headingtags[0].innerHTML=`1st heading tag`
// // headingtags[1].innerHTML=`2nd heading tag`
// // headingtags[2].innerHTML=`3rd heading tag`
// // headingtags[3].innerHTML=`4th heading tag`
// // headingtags[4].innerHTML=`5th heading tag`
// // headingtags[5].innerHTML=`6th heading tag`

// // targeting all the elements simultaneously

// for(i=0;i<=headingtags.length-1;i++){
//     headingtags[i].innerHTML=`${i+1} heading tag`
// }


// __________getElementsBytagName_________

// var headingtags=document.getElementsByTagName('h1')
// console.log(headingtags)
// headingtags[0].innerHTML=`1st heading tag`

// targeting all the elements simultaneously

// for(i=0;i<=headingtags.length-1;i++){
//     headingtags[i].innerHTML=`heading tag ${i+1}`
// }

// _________getelementsbyname________

// var tagnames=document.getElementsByName('names')
// console.log(tagnames)
// tagnames[0].innerHTML="this is 1st element"

// -----------query selector-------------used to target single single elements

// var ele1=document.querySelector('#head').innerHTML=`targeting id`
// console.log(ele1)

// var ele2=document.querySelector('.header').innerHTML=`targeting class`
// console.log(ele2)

// var ele3=document.querySelector('p').innerHTML=`targeting paragraphs`
// console.log(ele3)
// // another way
// var ele4=document.querySelector('#head')
// ele4.innerHTML=`another way 1`
// console.log(ele4)



var allheading=document.querySelectorAll('.heading')
