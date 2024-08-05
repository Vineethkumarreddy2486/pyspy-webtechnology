var buttons=document.getElementsByTagName('button')

// used to handle the event with using addeventlistener
// sntx:-addeventlistener("eventhandler by removing on",function())
// we use this to handle the event if we do not have html code

buttons[0].addEventListener('click',function(){
    document.body.style.backgroundColor='red'
})
buttons[1].addEventListener('mouseover',function(){
    document.body.style.backgroundColor='blue'
})

