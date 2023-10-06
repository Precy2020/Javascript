function is_even (positive_number){
if(positive_number % 2 == 0){
    if(positive_number != 0){
        is_even(positive_number - 2)
        return true
    }
}
else
        return false
}
console.log(is_even(1))