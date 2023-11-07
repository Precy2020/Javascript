let left_operand = 52;
let right_operand = 32;
let operator = "-";
let ans;

if(operator === "+"){
    ans = "addition version is"+" "+ (left_operand + right_operand);
}
else if(operator === "-"){
    ans = "subtraction version is"+" "+ (left_operand - right_operand);
}
else if(operator === "*"){
    ans = "multiplication version is"+" "+ (left_operand * right_operand);
}
else if(operator === "/"){
    ans = "division version is"+" "+ (left_operand / right_operand);
}
else{
    ans = "Operator is"+" "+ NaN
}
console.log(ans)