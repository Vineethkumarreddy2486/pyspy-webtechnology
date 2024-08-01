function seen(){
    document.querySelector('#inp').type='text'
    document.querySelector('#eye').src="../../Assests/Images/devil-removebg-preview.png"
    document.querySelector('#eye').style.transform='rotateY(180deg)'
}
function hide(){
    document.querySelector('#inp').type='password'
    document.querySelector('#eye').src="../../Assests/Images/moon-removebg-preview (1).jpg"
    document.querySelector('#eye').style.transform='rotateY(0deg)'
}
function checkpasslen(){
    var pass=document.getElementById('inp').value
    var passlen=pass.length
    if(passlen==0){
        document.getElementById('status').innerHTML=''
    }
    else if(passlen>=1 && passlen<=7){
        document.getElementById('status').innerHTML='Weak Password'
        document.getElementById('status').style.color='red'
    }
    else if(passlen>=8 && passlen<=14){
        document.getElementById('status').innerHTML='Good Password'
        document.getElementById('status').style.color='orange'
    }
    else{
        document.getElementById('status').innerHTML='Strong Password'
        document.getElementById('status').style.color='green'
    }
}