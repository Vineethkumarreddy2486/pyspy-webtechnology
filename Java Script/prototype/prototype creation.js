// obj can have null,and one prototype as outputs,prototype will have one object.
// prototype helps us to borrow the function from other object
var operation={
    add:function(a,b){
        return a+b
    }
}
var sub={
    sub:function(a,b){
        return a-b
    }
}
var mul={
    mul:function(a,b){
        return a*b
    }
}
var div={
    div:function(a,b){
        return a/b
    }
}
operation.__proto__=sub
sub.__proto__=mul
mul.__proto__=div
console.log(operation)
console.log(operation.add(2,3))
console.log(operation.sub(2,3))
console.log(operation.mul(2,3))
console.log(operation.div(2,3))