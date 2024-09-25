function BankAccount(owner,balance){
    this.owner=owner
    this.balance=balance
    console.log(`your current balance ${this.balance}`)
    this.deposit=function(amount){
        this.balance+=amount
        console.log(`${this.owner} has deposited ${amount}.New balance is ${this.balance}`)
    }
    this.withdraw=function(amount){
        if(amount<=this.balance){
            this.balance-=amount
            console.log(`${this.owner} has withdrawn ${amount}.New balance is ${this.balance}`)
        }
        else{
            console.log('Insufficient funds')
        }
    }
}
let myacc=new BankAccount('vineeth',1000)
console.log(myacc)
myacc.deposit(2000)
myacc.withdraw(207)
myacc.withdraw(4000)