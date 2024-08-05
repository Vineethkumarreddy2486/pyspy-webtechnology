var alldiv=document.querySelectorAll('div')
function grandparentdiv(){
    window.alert('This is Grand parent div')
    event.stopPropagation()
}
function parentdiv(){
    window.alert('This is parent div')
    event.stopImmediatePropagation()
}
function childdiv(){
    window.alert('This is child div')
    event.stopImmediatePropagation()
}