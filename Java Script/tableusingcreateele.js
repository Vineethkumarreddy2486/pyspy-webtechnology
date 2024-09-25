let tab=document.createElement('table')
console.log(tab)
document.body.appendChild(tab) 
tab.style.border='2px solid black'
tab.style.borderCollapse='collapse'
for(i=1;i<=5;i++){
    var row=document.createElement('tr')
    tab.appendChild(row)
    for(j=0;j<=2;j++){
        var cell=document.createElement('td')
        row.appendChild(cell)
        cell.style.border='4px solid black'
    }
}
var alltd=document.querySelectorAll('td')
console.log(alltd)
var bordercolors=['blue','blue','blue','red','red','red','orange','orange','orange','green','green','green','cyan','cyan','cyan']
var arr=['Details','Emp1','Emp2','EmpName','vineeth','Reddy','EmpSal','40LPA','60LPA','EmpLoc','USA','Ireland','EmpDes','S.Engg','Developer']
for(i=0;i<=alltd.length-1;i++){
    alltd[i].innerHTML=arr[i]
    alltd[i].style.border=`2px solid ${bordercolors[i]}`
}
for(i=0;i<=12;i++){
    if(i%3==0){
        alltd[i].style.fontWeight='bold'
    }
    else if(i==1 || i==2){
        alltd[i].style.fontWeight='bold'
    }
}