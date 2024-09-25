let divtag=document.createElement('div')     //used to create tag 
console.log(divtag)
document.body.appendChild(divtag)            //used to append the tag
divtag.style.width='400px'
divtag.style.height='400px'
divtag.style.backgroundColor='red'

let divtag2=document.createElement('div')
divtag.appendChild(divtag2)
divtag2.style.backgroundColor='yellow'
divtag2.style.height='200px'
divtag2.style.width='200px'
divtag.style.display='flex'
divtag.style.justifyContent='center'
divtag.style.alignItems='center'