//creating objects by using function construtor

function Cardetails(carBrand,carColor,carOwner,carModel){
    this.cBrand=carBrand
    this.cColor=carColor
    this.cOwner=carOwner
    this.cModel=carModel
}
let car=new Cardetails('Mercedes','white','vineeth','latestversion')
console.log(car)
console.log(car.cBrand)
console.log(car.cColor)
console.log(car.cOwner)
console.log(car.cModel)


//creating for book

function Book(booktitle,bookauthor,bookpages,booklauyear){
    this.btitle=booktitle
    this.bauthor=bookauthor
    this.bpages=bookpages
    this.blauyear=booklauyear
}
let details=new Book('Love','Prem',100,'2019')
console.log(details)
console.log(details.btitle)
console.log(details.bauthor)
console.log(details.bpages)
console.log(details.blauyear)