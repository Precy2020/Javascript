function is_even (positive_number){
    if(positive_number !== 0 && positive_number !== 1){
        return is_even(positive_number - 2)
    }
    else
        switch (positive_number) {
            case 0:
                return true
            case 1:
                return false
            default:
                 return null
        }
}
console.log(is_even(21))