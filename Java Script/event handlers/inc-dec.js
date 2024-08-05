var num=0
let allinp=document.querySelectorAll('input')
console.log(allinp)
allinp[2].addEventListener('click',()=>{
    if(num>=0 && num<10){
        num++
        allinp[1].value=num
    }
})
allinp[0].addEventListener('click',()=>{
    if(num>0 && num<=10){
        num--
        allinp[1].value=num
    }
})