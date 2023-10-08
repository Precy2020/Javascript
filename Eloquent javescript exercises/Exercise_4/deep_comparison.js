function deepEqual(number1, number2){
    if(number1 === number2 && typeof(number1 === number2)){
        return true
   }
    else{
        return false
    }
}

console.log(deepEqual(3, 5))