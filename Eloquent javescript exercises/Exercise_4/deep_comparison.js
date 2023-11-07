function deepEqual(number1, number2){
    if(number1 === number2){
        return true
   }
   if(number1 !== null || number2 !== null){
     if(typeof(number1 === number2)){
        return true
     }
   }
    else{
        return false
    }
}

console.log(deepEqual(3, 5))