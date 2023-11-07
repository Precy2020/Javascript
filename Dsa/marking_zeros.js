function _markingZeros (array){
    array = number
        for (var index = 0; index < array.length; index++) {
        if (array[index] === 0) {
            array.splice(index)
            array.push(index)
           
        }
        return array
     }
}
var number = [4, 3, 0, 2, 0, 4, 10, 12]
console.log(_markingZeros(number))


