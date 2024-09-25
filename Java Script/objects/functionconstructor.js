// function constructor
function Employee(empName,empID,empSal,empDesp){
    this.ename=empName           //'this' carries current object adress
    this.eid=empID              // function name should be like '1st ltr caps'
    this.esal=empSal
    this.edesg=empDesp
}
let vineeth=new Employee('Vineeth','vin123','60LPA','Manager')  //creating obj to Employee
let reddy=new Employee('Reddy','red987','50LPA','Developer')  //creating another obj fot Employee

console.log(vineeth)
console.log(vineeth.ename)
console.log(vineeth.eid)

console.log(reddy)
console.log(reddy.ename)
console.log(reddy.eid)

