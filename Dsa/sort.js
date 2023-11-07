let array = [1, 4, 78, 1, 5, 90]

for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length; index2++) {
        if(array[index] > array[index2]){
            let change = array[index]
            array[index] = array[index2]
            array[index2] = change
        }
        
    }
}
console.log(array)

