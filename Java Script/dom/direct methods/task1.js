function changecolor(){
    var allforms=document.forms
    var rr=allforms[0].elements[0].value
    var gg=allforms[0].elements[1].value
    var bb=allforms[0].elements[2].value
    var alpha=allforms[0].elements[3].value
    alpha=alpha/100
    document.body.style.backgroundColor=`rgb(${rr},${gg},${bb},${alpha})`
}