// without name attribute they cant be accessed

var allanchors=document.anchors
console.log(allanchors)
// allanchors[0].innerHTML='facebook'
allanchors[0].href=`https://www.facebook.com`
allanchors[1].innerHTML='Instagram'
allanchors[1].href='https://www.instagram.com'