
function range(start, stop, step){
    let array = []
   for (let index = start; index <= stop; index + step) {
       array.push(index)
    }
    return array
}
console.log(range(1, 10, 2))


function sum(arrays){
    let add = 0;
  for (let index = 1; index < arrays.length; index++) {
       add = add + index
 }
 return add
}
const use = range(1, 11)
console.log(sum(use))