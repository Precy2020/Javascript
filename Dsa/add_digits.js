function add_digit(number){
    number = " "
    let temp = 0
    for (const iterator of number) {
        console.log(iterator)
        temp += iterator
    }
    return temp
}
console.log(add_digit(32))