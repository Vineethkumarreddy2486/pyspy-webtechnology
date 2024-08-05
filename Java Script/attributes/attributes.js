var allform=document.forms
console.log(allform)

// setattribute is used to set tha attributes
// syntax:-setattribute('property','value')
allform[0].elements[0].setAttribute('type','email')
allform[0].elements[0].setAttribute('placeholder','Enter your e-mail')
allform[0].elements[1].setAttribute('type','password')
allform[0].elements[1].setAttribute('placeholder','Enter your password')
allform[0].elements[2].setAttribute('type','submit')
allform[0].setAttribute('action','https://www.instagram.com')
allform[0].elements[2].setAttribute('disabled','true')
 function allinp(){
    var formval=allform[0].elements[1].value
    var formvallen=formval.length
    if(formvallen>=5){
        allform[0].elements[2].removeAttribute('disabled')
    }
    else{
        // removeattribute is used to remove the attribute
        // syntax:-removeattribute('attribute')
        allform[0].elements[2].setAttribute('disabled','true')
    }
 }