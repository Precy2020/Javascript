function reduce(array, combine, start){
    let current = start;
for (let element of array) {
current = combine(current, element);
}
return current;
}


console.log(reduce())