var btag=document.querySelector('input')
btag.addEventListener('click',function(){
    var bool=btag.classList.toogle(true)
    if(bool===true){
        btag.style.backgroundColor='gray'
        btag.value='subscribed'
    }
    else{
        btag.style.backgroundColor='rgb(232, 25, 25)'
        btag.value='subscribe'
    }
})
