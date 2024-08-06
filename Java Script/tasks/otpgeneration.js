var otp=''
function openOTP(){
    document.getElementById('container2').style.display='flex'
    var n1=Math.trunc(Math.random()*10)
    var n2=Math.trunc(Math.random()*10)
    var n3=Math.trunc(Math.random()*10)
    var n4=Math.trunc(Math.random()*10)
    otp=''+n1+n2+n2+n4
    document.getElementById('otp').innerHTML=otp
}
function closeOTP(){
    document.getElementById('container2').style.display='none'
}
function checkOTP(){
    var uOTP=document.querySelector('#UserOTP').value
    if(uOTP.length==otp && uOTP.length!==0){
        location.href='https://www.tesla.com'
    }
    else{
        document.querySelector('#status').innerHTML='Enter the proper OTP'
        document.querySelector('#status').style.color='black'
    }
}