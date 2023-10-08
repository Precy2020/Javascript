function reverseArray(array){
  let new_array = []
   for (let index = array.length - 1; index >= 0;  index--) {
         new_array.push(array[index])    
   }
   return new_array
}
let numbers = [3, 4, 6, 7, 8, 9, 3]
console.log(reverseArray(numbers))