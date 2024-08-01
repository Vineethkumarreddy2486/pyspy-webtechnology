var num1=prompt('enter num1')
var num2=prompt('enter num2')
var op=prompt('enter the operation you wanted to do')
op=op.toLowerCase();
switch(op){
    case 'add':console.log(`addition of ${num1} and ${num2} is : ${Number(num1)+Number(num2)}`);
    break;
    case 'sub':console.log(`subtraction of ${num1} and ${num2} is : ${num1-num2}`);
    break;
    case 'mul':console.log(`multiplication of ${num1} and ${num2} is : ${num1*num2}`);
    break;
    case 'div':console.log(`division of ${num1} and ${num2} is : ${num1/num2}`);
    break;
    case 'mod':console.log(`suntraction of ${num1} and ${num2} is : ${num1%num2}`);
    break;
    case 'exp':console.log(`suntraction of ${num1} and ${num2} is : ${num1**num2}`);
    break;
    default:console.log('Enter the valid input');

}