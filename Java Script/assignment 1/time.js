var hh=Number(prompt('Enter the hours in 24 format'))
var mm=Number(prompt('Enter the minutes'))
var am_pm="AM"
if(hh>=12){
    am_pm='PM'
    if(hh>12){
        hh-=12
    }
}
if(hh==0){
    hh=12
}
document.getElementById("hh").innerHTML=hh
document.getElementById("mm").innerHTML=mm
document.getElementById("am_pm").innerHTML=am_pm
