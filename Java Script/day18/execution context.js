console.log('start')
function parent(){
    var num1=10
    var num2=20
    function child(){
        console.log(num1+num2)
    }
    child()
}
parent()
console.log('end')