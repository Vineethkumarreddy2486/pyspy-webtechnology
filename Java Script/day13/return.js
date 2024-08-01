var amountICICI=Number(prompt('Enter loan amount took from ICICI'))
var intrestICICI=Number(prompt('Enter Rate Of Intrest'))
var timeDuICICI=Number(prompt('Enter the time duration to return amount.'))
function BikeLoan(amountICICI,intrestICICI,timeDuICICI){
    console.log(`I brought a bike of ₹ ${amountICICI}`)
    console.log(`we must return the intrest of ${intrestICICI}%`)
    console.log(`Duration of the loan is ${timeDuICICI}`)
    let intamount=(amountICICI*intrestICICI*timeDuICICI)/100
    console.log(`The intrest amount to be retured to bank is ${intamount}`)
    let totalamount=amount+intamount
    return totalamount

}
var ICICI=BikeLoan(amountICICI,intrestICICI,timeDuICICI)
console.log(`The total amount to be retured to bank ICICI is ${totalamount}`)


var amountHDFC=Number(prompt('Enter loan amount took from HDFC'))
var intrestHDFC=Number(prompt('Enter Rate Of Intrest'))
var timeDuHDFC=Number(prompt('Enter the time duration to return amount.'))
var HDFC=BikeLoan(amountHDFC,intrestHDFC,timeDuHDFC)
console.log(`The total amount to be retured to bank HDFC is ${totalamount}`)